const stats = [
  {
    title: "Bookings",
    value: "128",
    change: "+18%",
  },
  {
    title: "Revenue",
    value: "$15,240",
    change: "+21%",
  },
  {
    title: "Events",
    value: "95",
    change: "+11%",
  },
  {
    title: "Pending",
    value: "17",
    change: "-3%",
  },
];

export default function StatsCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bg-white rounded-3xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition"
        >

          <p className="text-zinc-500">
            {stat.title}
          </p>

          <h2 className="text-4xl font-bold mt-4 text-zinc-900">
            {stat.value}
          </h2>

          <div className="mt-6 inline-flex rounded-full bg-[#D4AF37]/10 px-4 py-2">

            <span className="text-[#B8860B] font-semibold">
              {stat.change}
            </span>

          </div>

        </div>

      ))}

    </section>
  );
}