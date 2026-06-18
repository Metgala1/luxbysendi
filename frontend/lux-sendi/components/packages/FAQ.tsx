const faqs = [
  "How far in advance should I book?",
  "Can packages be customized?",
  "Do you travel for events?",
];

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq}
              className="border rounded-2xl p-6"
            >
              <h3 className="font-semibold">{faq}</h3>

              <p className="mt-3 text-neutral-600">
                Placeholder answer content.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}