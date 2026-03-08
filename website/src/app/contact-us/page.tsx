import ContactForm from "#/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Stop patching leaks. Let's engineer solutions that last. Contact DotEnv for a free consultation today.",
  openGraph: {
    title: "Contact Us - Dotenv",
    description: "Stop patching leaks. Let's engineer solutions that last. Contact DotEnv for a free consultation today.",
  }
};

export default function page() {
  return (
    <section id="contact" aria-label="Contact Us">
      <div className="flex justify-center items-center gap-8 my-16 px-8 md:px-0 align-middle">
        <div className="justify-center items-center gap-8 grid grid-cols-1">
          <div className="justify-center items-center gap-8">
            <h2 className="font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
              <span className="text-primary">Ready</span> to Ship Smarter?
            </h2>
            <p>Stop patching leaks. Let’s engineer solutions that last.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
