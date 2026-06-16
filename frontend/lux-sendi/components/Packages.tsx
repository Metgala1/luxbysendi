const packages = [
  { name: "The Spark", desc: "Perfect proposal setup" },
  { name: "The Promise", desc: "Elegant romantic styling" },
  { name: "The Forever", desc: "Luxury full experience setup" }
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((p) => (
          <div key={p.name} className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
            <button className="mt-4 text-sm underline">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}