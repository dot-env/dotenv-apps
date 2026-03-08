import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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
            }) as any; // Type assertion to access event data cleanly
        } catch (err) {
            console.error('Webhook verification failed:', err);
            return NextResponse.json(
                { error: 'Invalid webhook signature' },
                { status: 400 },
            );
        }

        // Handle email.received event
        if (event.type === 'email.received') {
            console.log('New email received from:', event.data?.from);
            console.log('Subject:', event.data?.subject);

            // Format recipient list from process.env
            const contactEmails = (
                process.env.CONTACT_EMAILS || ""
            ).split(",");
            const fromEmail = process.env.FROM_EMAIL || "dotenv <contact@dotenv.co.za>";

            try {
                const { error: forwardError } = await resend.emails.receiving.forward({
                    emailId: event.data.email_id,
                    to: contactEmails,
                    from: fromEmail,
                });

                if (forwardError) {
                    console.error('Failed to forward email:', forwardError);
                    return NextResponse.json({ error: forwardError.message }, { status: 500 });
                }

                console.log(`Forwarded email successfully to ${contactEmails.join(", ")}`);
            } catch (sendErr) {
                console.error('Failed to forward email:', sendErr);
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
