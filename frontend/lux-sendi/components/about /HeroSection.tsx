import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src="/luxbysendi.png"
        alt="About Us"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl text-center text-white px-6">
          <p className="uppercase tracking-[0.3em] mb-4 text-sm">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Creating Memorable Experiences
          </h1>

          <p className="mt-6 text-lg max-w-2xl mx-auto text-white/90">
            Dummy content placeholder. Replace this text with your company
            introduction and brand story.
          </p>
        </div>
      </div>
    </section>
  );
}