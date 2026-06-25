import { Sparkles, Heart, Gem, PartyPopper } from "lucide-react";

export const metadata = {
  title: "About Us | Lux by Sendi",
  description:
    "Learn more about Lux by Sendi, a premium event styling, decoration, and gifting brand dedicated to creating unforgettable experiences through luxury décor, personalized celebrations, and exceptional attention to detail.",
};

const values = [
  {
    icon: Sparkles,
    title: "Creativity",
    description:
      "Every celebration is unique. We bring fresh ideas, innovative designs, and personalized styling to every event we create.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We genuinely love what we do. Every setup is crafted with care, dedication, and a commitment to creating meaningful experiences.",
  },
  {
    icon: Gem,
    title: "Excellence",
    description:
      "From the smallest detail to the overall experience, we strive to deliver quality, elegance, and professionalism every time.",
  },
  {
    icon: PartyPopper,
    title: "Memorable Experiences",
    description:
      "Our goal is simple: to transform ordinary moments into extraordinary memories that will be cherished for years to come.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-amber-600">
            About Lux by Sendi
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Where Creativity Meets Elegance
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Lux by Sendi is a premium event styling, decoration, and gifting
            brand dedicated to transforming ordinary moments into unforgettable
            experiences through creativity, elegance, and attention to detail.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Creating Beautiful Moments Worth Remembering
            </h2>

            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                At Lux by Sendi, we believe that every celebration deserves to
                feel extraordinary. Whether it's an intimate romantic surprise,
                a luxurious wedding, a joyful birthday celebration, or a
                heartwarming welcome-home setup, we approach every event with
                creativity, passion, and precision.
              </p>

              <p>
                We specialize in luxury event decorations, personalized surprise
                experiences, picnic setups, money bouquets, gifting solutions,
                and bespoke celebration styling tailored to each client's unique
                vision.
              </p>

              <p>
                From concept to execution, our focus is on delivering elegant
                experiences that reflect your personality, celebrate life's most
                meaningful moments, and leave lasting impressions on everyone
                involved.
              </p>
            </div>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-orange-100 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-gray-900">
              What We Specialize In
            </h3>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>• Wedding Decorations & Styling</li>
              <li>• Birthday Celebrations</li>
              <li>• Engagement Setups</li>
              <li>• Bridal Shower Decorations</li>
              <li>• Baby Shower Celebrations</li>
              <li>• Anniversary Experiences</li>
              <li>• Luxury Picnic Experiences</li>
              <li>• Surprise Packages & Setups</li>
              <li>• Welcome Home Decorations</li>
              <li>• Money Bouquets & Gift Arrangements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="uppercase tracking-widest text-sm font-semibold text-amber-600">
            Our Mission
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Turning Visions Into Unforgettable Experiences
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Our mission is to create beautiful memories through thoughtful
            design, personalized service, and exceptional event styling. Every
            setup we create is guided by our commitment to quality,
            professionalism, and delivering experiences that exceed
            expectations.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="uppercase tracking-widest text-sm font-semibold text-amber-600">
              Our Values
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              The Principles Behind Every Celebration
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="p-8 rounded-3xl border bg-white shadow-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <Icon className="text-amber-600" size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-28 px-6 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Every Celebration Matters
          </h2>

          <p className="mt-8 text-lg text-white/90 leading-relaxed">
            Whether you're celebrating a milestone, surprising a loved one, or
            planning the event of your dreams, we're here to bring your vision
            to life with elegance, creativity, and unmatched attention to
            detail.
          </p>

          <p className="mt-10 text-2xl font-semibold tracking-wide">
            Classy. Affordable. Bold.
          </p>
        </div>
      </section>
    </main>
  );
}