const services = [
  { title: "Balloon Styling", desc: "Luxury arches, garlands & installations" },
  { title: "Event Setup", desc: "Full event transformation & styling" },
  { title: "Photo Booths", desc: "Mirror & magazine-style booths" },
  { title: "LED Rentals", desc: "Letters, numbers & light décor" }
];

export default function Services() {
  return (
    <section id="services" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Signature Services
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.title} className="p-6 rounded-2xl border hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}