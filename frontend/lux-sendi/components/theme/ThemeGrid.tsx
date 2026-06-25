import { themes } from "@/lib/data/theme";

export default function ThemeGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map((theme) => (
          <article
            key={theme.name}
            className="overflow-hidden rounded-3xl bg-white border shadow-sm hover:shadow-xl transition"
          >
            <div className="h-72 bg-neutral-200 flex items-center justify-center">
              <span className="text-neutral-500">
                Theme Image
              </span>
            </div>

            <div className="p-8">
              <span className="text-sm uppercase tracking-wider text-amber-600 font-medium">
                {theme.category}
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                {theme.name}
              </h3>

              <p className="mt-4 text-gray-600">
                {theme.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}