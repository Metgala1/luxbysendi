const packages = [
  {
    name: "The Enchantment",
    desc: "An intimate and beautifully curated setup designed to create a memorable and heartfelt experience.",
    gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    name: "The Elegance",
    desc: "A sophisticated celebration package featuring refined décor, personalized styling, and elevated details.",
    gradient: "bg-gradient-to-br from-violet-600 to-fuchsia-600",
  },
  {
    name: "The Grand Affair",
    desc: "A fully customized luxury experience with premium décor, immersive styling, and flawless execution.",
    gradient: "bg-gradient-to-br from-yellow-300 to-amber-400",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Packages
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully crafted packages designed to transform
            your special moments into unforgettable experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`${pkg.gradient} hover:animate-bounce rounded-3xl p-8 shadow-lg text-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
              </div>

              <p className="leading-relaxed text-white/90">
                {pkg.desc}
              </p>

              <button className="mt-8 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-white/90">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}