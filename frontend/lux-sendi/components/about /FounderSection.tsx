import Image from "next/image";
export default function FounderSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500] rounded-3xl overflow-hidden">
          <Image
            src="/luxbysendi.png"
            alt="Founder"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="uppercase tracking-widest text-pink-500 text-sm">
            Meet The Founder
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Jane Doe
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Replace this section with the founder's story,
            vision, experience, and inspiration.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur accusantium reprehenderit cupiditate.
          </p>
        </div>
      </div>
    </section>
  );
}