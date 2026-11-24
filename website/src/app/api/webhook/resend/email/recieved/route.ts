import { NextResponse } from 'next/server';
import { Resend, type Attachment } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
    try {
        // Get the raw payload for signature verification
        const payload = await request.text();

        // Extract Svix headers for verification
        const svixId = request.headers.get('svix-id');
        const svixTimestamp = request.headers.get('svix-timestamp');
        const svixSignature = request.headers.get('svix-signature');

        // Verify webhook signature (CRITICAL for security!)
        if (!svixId || !svixTimestamp || !svixSignature) {
            console.warn('Missing Svix headers - rejecting webhook');
            return NextResponse.json(
                { error: 'Missing webhook signature headers' },
                { status: 400 },
            );
        }

        // Get the webhook secret from environment
        const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
        if (!webhookSecret) {
            console.error('RESEND_WEBHOOK_SECRET not configured');
            return NextResponse.json(
                { error: 'Webhook secret not configured' },
                { status: 500 },
            );
        }

        // Verify the webhook signature
        let event;
        try {
            event = resend.webhooks.verify({
                payload,
                headers: {
                    id: svixId,
                    timestamp: svixTimestamp,
                    signature: svixSignature,
                },
                webhookSecret: webhookSecret,
            });
        } catch (err) {
            console.error('Webhook verification failed:', err);
            return NextResponse.json(
                { error: 'Invalid webhook signature' },
                { status: 400 },
            );
        }

        // Handle email.received event
        if (event.type === 'email.received') {
            const received = event.data;
            console.log('New email received from:', received?.from);
            console.log('Subject:', received?.subject);

            if (!received?.email_id) {
                return NextResponse.json(
                    { error: 'Missing email id on received event' },
                    { status: 400 },
                );
            }

            // Format recipient list from process.env
            const contactEmails = (process.env.CONTACT_EMAILS || "")
                .split(",")
                .map((email) => email.trim())
                .filter(Boolean);
            const fromEmail = process.env.FROM_EMAIL || "dotenv <contact@dotenv.co.za>";

            if (contactEmails.length === 0) {
                console.error('CONTACT_EMAILS not configured');
                return NextResponse.json(
                    { error: 'CONTACT_EMAILS not configured' },
                    { status: 500 },
                );
            }

            try {
                const { data: email, error: getEmailError } =
                    await resend.emails.receiving.get(received.email_id, {
                        html_format: 'cid',
                    });

                if (getEmailError || !email) {
                    console.error('Failed to fetch received email:', getEmailError);
                    return NextResponse.json(
                        { error: getEmailError?.message || 'Failed to fetch received email' },
                        { status: 500 },
                    );
                }

                const attachments: Attachment[] = [];
                if (email.attachments.length > 0) {
                    const { data: attachmentList, error: attachmentsError } =
                        await resend.emails.receiving.attachments.list({
                            emailId: received.email_id,
                        });

                    if (attachmentsError) {
                        console.error('Failed to list email attachments:', attachmentsError);
                    } else if (attachmentList?.data?.length) {
                        const downloaded = await Promise.all(
                            attachmentList.data.map(async (attachment): Promise<Attachment> => {
                                const contentId = attachment.content_id
                                    ? attachment.content_id.replace(/^<|>$/g, '')
                                    : undefined;

                                try {
                                    const response = await fetch(attachment.download_url);
                                    if (response.ok) {
                                        return {
                                            content: Buffer.from(await response.arrayBuffer()),
                                            filename: attachment.filename,
                                            contentType: attachment.content_type,
                                            ...(contentId ? { contentId } : {}),
                                        };
                                    }
                                } catch (downloadErr) {
                                    console.error(
                                        `Failed to download attachment ${attachment.id}:`,
                                        downloadErr,
                                    );
                                }

                                return {
                                    path: attachment.download_url,
                                    filename: attachment.filename,
                                    contentType: attachment.content_type,
                                    ...(contentId ? { contentId } : {}),
                                };
                            }),
                        );
                        attachments.push(...downloaded);
                    }
                }

                const replyTo = email.reply_to?.length
                    ? email.reply_to
                    : email.from || received.from;

                const baseOptions = {
                    from: fromEmail,
                    to: contactEmails,
                    ...(replyTo ? { replyTo } : {}),
                    subject: email.subject || received.subject || '(no subject)',
                    ...(attachments.length > 0 ? { attachments } : {}),
                };

                const forwardPayload = email.html
                    ? {
                          ...baseOptions,
                          html: email.html,
                          ...(email.text ? { text: email.text } : {}),
                      }
                    : {
                          ...baseOptions,
                          text: email.text || '(no content)',
                      };

                const { error: forwardError } = await resend.emails.send(forwardPayload);

                if (forwardError) {
                    console.error('Failed to forward email:', forwardError);
                    return NextResponse.json({ error: forwardError.message }, { status: 500 });
                }

                console.log(`Forwarded email successfully to ${contactEmails.join(", ")}`);
            } catch (sendErr) {
                console.error('Failed to forward email:', sendErr);
                return NextResponse.json(
                    { error: 'Failed to forward email' },
                    { status: 500 },
                );
            }
        } else {
            console.log('Unhandled event type:', event.type);
        }

        // Always return 200 to acknowledge receipt
        return NextResponse.json({
            received: true,
            type: event.type,
        });
    } catch (err) {
        console.error('Webhook handler error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 },
        );
    }
}
