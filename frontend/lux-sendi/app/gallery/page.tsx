import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Lux by Sendi",
  description:
    "Explore our portfolio of luxury event decorations, weddings, birthdays, surprise setups, picnic experiences, and bespoke celebrations by Lux by Sendi.",
};

const galleryItems = [
  {
    title: "Luxury Wedding Setup",
    category: "Weddings",
    image: "/dinner.jpeg",
  },
  {
    title: "Birthday Celebration",
    category: "Birthdays",
    image: "/dinner.jpeg",
  },
  {
    title: "Romantic Surprise Setup",
    category: "Surprises",
    image: "/dinner.jpeg",
  },
  {
    title: "Bridal Shower Elegance",
    category: "Bridal Showers",
    image: "/dinner.jpeg",
  },
  {
    title: "Baby Shower Theme",
    category: "Baby Showers",
    image: "/dinner.jpeg",
  },
  {
    title: "Luxury Picnic Experience",
    category: "Picnics",
    image: "/dinner.jpeg",
  },
  {
    title: "Money Bouquet Creation",
    category: "Gifting",
    image: "/dinner.jpeg",
  },
  {
    title: "Anniversary Setup",
    category: "Anniversaries",
    image: "/dinner.jpeg",
  },
];

export default function GalleryPage() {
    return (
        <>
    <section className="py-28 px-6 bg-gradient-to-b from-amber-50 to-white">
  <div className="max-w-5xl mx-auto text-center">
    <span className="uppercase tracking-[0.3em] text-sm font-semibold text-amber-600">
      Our Gallery
    </span>

    <h1 className="mt-6 text-5xl md:text-6xl font-bold">
      Moments We’ve Brought to Life
    </h1>

    <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Every celebration is a story of love, joy, and unforgettable memories.
      Explore our collection of luxury event decorations, carefully designed
      and executed for our amazing clients.
    </p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {galleryItems.map((item, index) => (
      <div
        key={index}
        className="group overflow-hidden rounded-3xl   bg-white shadow-sm hover:shadow-2xl transition"
      >
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
        </div>

        <div className="p-6">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-medium">
            {item.category}
          </span>

          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="py-24 px-6 bg-neutral-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold">
      Every Detail Matters
    </h2>

    <p className="mt-6 text-gray-600 leading-relaxed">
      At Lux by Sendi, we don't just decorate spaces — we create emotions.
      From intimate surprise setups to grand wedding transformations, every
      design is carefully curated to reflect your vision and personality.
    </p>
  </div>
</section>
<section className="py-28 px-6 bg-amber-600 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl font-bold">
      Want Your Event Featured Here?
    </h2>

    <p className="mt-6 text-lg text-white/90">
      Let us turn your celebration into a masterpiece. Book with Lux by Sendi
      and experience luxury event styling like never before.
    </p>

    <Link
      href="/contact"
      className="inline-block mt-10 px-8 py-4 rounded-full bg-white text-amber-600 font-semibold"
    >
      Book Your Event
    </Link>
  </div>
</section>
        </>
    )
}