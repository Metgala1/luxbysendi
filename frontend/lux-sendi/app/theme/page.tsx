import ThemeGrid from "@/components/theme/ThemeGrid";
import Link from "next/link";

export const metadata = {
  title: "Themes | Lux by Sendi",
  description:
    "Explore our themed event decorations, birthday concepts, luxury color palettes, and custom celebration experiences.",
};

const colorThemes = [
  "Black & Gold",
  "Rose Gold Elegance",
  "Royal Blue & Silver",
  "Emerald Green Luxury",
  "White & Gold",
  "Pink & Gold",
  "Champagne & Ivory",
  "Red & Black Glamour",
];

export default function ThemesPage() {
  return (
    <main>
      {/* Hero */}

      <section className="py-28 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-amber-600">
            Event Themes
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Inspiration For Every Celebration
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover themed celebrations designed to bring your vision to life
            through creativity, elegance, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Intro */}

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Designed Around Your Vision
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Every event is unique. Whether you're planning a birthday,
            engagement, bridal shower, baby shower, anniversary, or luxury
            picnic, we create custom themes tailored to your style.
          </p>
        </div>
      </section>

      {/* Theme Cards */}

      <ThemeGrid />

      {/* Color Themes */}

      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Signature Color Themes
            </h2>

            <p className="mt-4 text-gray-600">
              Elegant color combinations curated for sophisticated celebrations.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorThemes.map((theme) => (
              <div
                key={theme}
                className="rounded-2xl bg-white border p-6 text-center font-medium"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-28 px-6 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold">
            Have A Theme In Mind?
          </h2>

          <p className="mt-6 text-lg text-white/90">
            Share your ideas with us and we'll create a fully customized
            celebration tailored to your vision.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-4 rounded-full bg-white text-amber-600 font-semibold"
          >
            Start Planning Your Event
          </Link>
        </div>
      </section>
    </main>
  );
}