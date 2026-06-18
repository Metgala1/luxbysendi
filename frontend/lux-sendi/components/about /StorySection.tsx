import Image from "next/image";
export default function StorySection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-pink-500 uppercase tracking-widest text-sm">
            Our Story
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Built From Passion & Creativity
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, unde. Replace this section with the company story,
            how the business started, and the journey behind the brand.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium recusandae officiis aspernatur magni.
          </p>
        </div>

        <div className="relative h-[500] rounded-3xl overflow-hidden">
          <Image
            src="/luxbysendi.png"
            alt="Story"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}