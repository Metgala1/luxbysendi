const testimonials = [
  {
    name: "Jasmine O.",
    text: "Absolutely magical setup. Better than I imagined!"
  },
  {
    name: "Tiffany & Ray",
    text: "Luxury experience from start to finish."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Clients Say
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white p-6 rounded-2xl">
            <p className="text-gray-600">"{t.text}"</p>
            <p className="mt-4 font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}