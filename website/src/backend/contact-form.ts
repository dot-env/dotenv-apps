"use server";

import { after } from "next/server";
import { db } from "./db";
import { contacts } from "./db/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const handleContactForm = async (data: ContactForm) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      // message,
      recaptcha_token,
      company_size,
      service,
    } = data;

    if (
      !first_name ||
      !last_name ||
      !email ||
      !phone ||
      !recaptcha_token ||
      !company_size ||
      !service
    ) {
      return { success: false, message: "Please fill out all required fields" };
    }

    if (!recaptcha_token) {
      return { success: false, message: "Please complete the reCAPTCHA" };
    }

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha_token}`,
    });

    const recaptchaRes = (await res.json()) as ContactFormValidationResponse;
    if (recaptchaRes.success && recaptchaRes.score > 0.3) {
      after(async () => {
        await db
          .insert(contacts)
          .values({
            first_name,
            last_name,
            email,
            phone,
            company_size,
            service,
            message: data.message,
          })
          .onConflictDoUpdate({
            target: [contacts.email],
            set: {
              first_name,
              last_name,
              phone,
              company_size,
              service,
              message: data.message,
            },
          });

        const contactEmails = (
          process.env.CONTACT_EMAILS || "axole@mail.com,contact@dotenv.co.za"
        ).split(",");

        const fromEmail = process.env.FROM_EMAIL || "dotenv <contact@dotenv.co.za>";

        await Promise.all([
          // Notification email to the team
          resend.emails.send({
            from: fromEmail,
            to: contactEmails,
            subject: `New Contact Form Submission: ${first_name} ${last_name}`,
            text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone}\nCompany Size: ${company_size}\nService: ${service}\nMessage: ${data.message || "N/A"}`,
          }),
          // Confirmation email to the user
          resend.emails.send({
            from: fromEmail,
            to: email,
            subject: "We received your message!",
            text: `Hi ${first_name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest,\nThe dotenv team`,
          }),
        ]).catch((error) => console.error("Error sending emails:", error));
      });
    }

    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};

export type ContactForm = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  recaptcha_token: string;
  service: string;
  company_size: string;
};

type ContactFormValidationResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
};
