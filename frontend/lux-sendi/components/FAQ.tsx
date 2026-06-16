const faq = [
  { q: "How do I book?", a: "Send a message or request a quote online." },
  { q: "How far in advance?", a: "2–4 weeks recommended." }
];

export default function FAQ() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

      {faq.map((f) => (
        <div key={f.q} className="mb-6 border-b pb-4">
          <h3 className="font-semibold">{f.q}</h3>
          <p className="text-gray-600">{f.a}</p>
        </div>
      ))}
    </section>
  );
}