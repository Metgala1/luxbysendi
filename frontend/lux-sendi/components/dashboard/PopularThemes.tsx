const themes = [
  {
    name: "Royal Gold",
    bookings: 42,
  },
  {
    name: "Black Luxury",
    bookings: 36,
  },
  {
    name: "White Elegance",
    bookings: 29,
  },
];

export default function PopularThemes() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-semibold">
          Popular Themes
        </h2>

        <button className="text-[#B8860B]">
          Manage
        </button>

      </div>

      <div className="space-y-5">

        {themes.map((theme) => (

          <div
            key={theme.name}
            className="flex gap-5 rounded-2xl border p-4 hover:shadow-md transition"
          >

            <div className="h-24 w-24 rounded-xl bg-linear-to-br from-black to-[#D4AF37]" />

            <div className="flex flex-col justify-center">

              <h3 className="text-lg font-semibold">
                {theme.name}
              </h3>

              <p className="text-zinc-500">
                {theme.bookings} bookings
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}