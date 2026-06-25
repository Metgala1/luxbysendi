import { services } from "@/lib/data/services";

export default function PackageCards() {
  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {services.map((pkg , index) => (
          <div
            key={index}
            className="rounded-3xl border p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold">
              {pkg.name}
            </h3>

            <p className="mt-2 text-neutral-500">
              {pkg.subtitle}
            </p>

            <p className="mt-4 text-neutral-600">
              {pkg.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}