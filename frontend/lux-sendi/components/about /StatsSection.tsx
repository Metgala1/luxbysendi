export default function StatsSection() {
  const stats = [
    {
      value: "500+",
      label: "Events Styled"
    },
    {
      value: "5+",
      label: "Years Experience"
    },
    {
      value: "100%",
      label: "Client Satisfaction"
    },
    {
      value: "50+",
      label: "Corporate Clients"
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-5xl font-bold">
              {stat.value}
            </h3>

            <p className="mt-3 text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}