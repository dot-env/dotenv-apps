import { buyerFaqs } from "#/content/buyer-faqs";

export function BuyerFaqs() {
  return (
    <section
      aria-label="Common questions"
      className="mx-auto my-16 px-8 md:px-0"
      id="faqs"
    >
      <h2 className="mb-8 font-bold text-muted-foreground text-4xl md:text-5xl md:text-left text-center">
        <span className="text-primary">Questions</span> before you hire a
        software agency
      </h2>
      <div className="flex flex-col gap-8">
        {buyerFaqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="font-bold text-lg">{faq.question}</h3>
            <p className="mt-2 text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
