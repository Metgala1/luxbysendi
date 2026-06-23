const services = [
  {
    title: "Wedding Décor & Styling",
    desc: "Elegant ceremony and reception designs tailored to create unforgettable wedding experiences."
  },
  {
    title: "Birthday Celebrations",
    desc: "Creative birthday setups featuring themed décor, balloons, backdrops, and personalized details."
  },
  {
    title: "Surprise Event Planning",
    desc: "Thoughtfully curated surprise experiences for proposals, anniversaries, birthdays, and special milestones."
  },
  {
    title: "Gift Arrangement Services",
    desc: "Beautifully packaged gift boxes, hampers, and custom presentations designed to leave a lasting impression."
  },
  {
    title: "Event Decoration & Coordination",
    desc: "Professional styling and setup for corporate events, private gatherings, baby showers, and celebrations."
  },
  {
    title: "Custom Theme Experiences",
    desc: "Bespoke décor concepts and themed installations crafted to reflect your unique vision and personality."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Signature Services
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.title} className="p-6  rounded-2xl border hover:shadow-lg transition">
            <h3 className="font-semibold  text-xl">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}