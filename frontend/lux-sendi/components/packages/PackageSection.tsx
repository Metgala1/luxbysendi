interface PackageSectionProps {
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
}

export default function PackageSection({
  title,
  description,
  features,
  reverse,
}: PackageSectionProps) {
  return (
    <section className="py-24">
      <div
        className={`max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="h-[500] rounded-3xl bg-neutral-200 flex items-center justify-center">
            Image Placeholder
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            {title}
          </h2>

          <p className="mt-6 text-lg text-neutral-600 leading-8">
            {description}
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature , index) => (
              <li key={index}>✓ {feature}</li>
            ))}
          </ul>

          <button className="mt-10 px-8 py-4 rounded-full bg-black text-white">
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
}