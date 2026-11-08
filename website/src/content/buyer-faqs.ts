export const buyerFaqs = [
  {
    answer:
      "Dotenv is a software development agency in Johannesburg, South Africa. We design and build web platforms, mobile apps, backends, and cloud systems, and we modernize software that is already in production.",
    question: "What does Dotenv do?",
  },
  {
    answer:
      "The studio is in Johannesburg and works with clients in South Africa and remotely. Published work includes PipAlert, Local Lifestyle, and two University of Johannesburg platforms.",
    question: "Where does Dotenv work?",
  },
  {
    answer:
      "Recent production systems cover forex signaling, hospitality bookings, confidential incident reporting, and a student sales and marketing program. The same team also takes on custom web, mobile, and cloud builds.",
    question: "What kinds of products have you shipped?",
  },
  {
    answer:
      "Email team@dotenv.co.za or call +27 68 172 1606 and ask for a technical audit. The first conversation maps the system, the risks, and whether a build or a modernization makes sense.",
    question: "How does a project start?",
  },
  {
    answer:
      "There is no public rate card. Scope and price are set after the audit, because a reporting platform and a payments integration are not the same piece of work.",
    question: "Do you publish fixed prices?",
  },
] as const;

export const buyerFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: buyerFaqs.map((faq) => ({
    "@type": "Question",
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
    name: faq.question,
  })),
};
