"use server";

export const handleContactForm = async (data: ContactForm) => {
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

  if (recaptchaRes.success && recaptchaRes.score > 0.5) {
    // Save to db and send email
  }

  return { success: false, message: "Message sent successfully" };
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
