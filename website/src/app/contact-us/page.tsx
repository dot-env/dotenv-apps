import ContactForm from "#/components/contact-form";
import { pageMetadata } from "#/lib/page-metadata";
import { JsonLd } from "#/components/json-ld";
import type { ContactPage, WithContext } from "schema-dts";
import { siteConfig } from "#/configs/site";

export const metadata = pageMetadata({
  description: "Contact Dotenv in Johannesburg for a free technical audit. Email team@dotenv.co.za or call +27 68 172 1606.",
  path: "/contact-us",
  title: "Contact Us",
});

export default function page() {
  const contactJsonLd: WithContext<ContactPage> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us | Dotenv",
    "description": "Get in touch with Dotenv for a free consultation on your next software project.",
    "url": `${siteConfig.url}/contact-us`
  };

  return (
    <section id="contact" aria-label="Contact Us">
      <JsonLd data={contactJsonLd} />
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
