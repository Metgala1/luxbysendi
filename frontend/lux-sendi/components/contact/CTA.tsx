export default function CTA() {
  return (
    <section className="py-24 px-6 bg-amber-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="uppercase tracking-widest text-sm font-medium">
          Ready to Celebrate?
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Let's Turn Your Vision Into Reality
        </h2>

        <p className="mt-6 text-lg text-white/90">
          From luxury event décor and surprise setups to beautiful gifting
          experiences, Lux by Sendi is here to create unforgettable moments
          tailored just for you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/237652953717"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-amber-600 font-semibold hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>

          <a
            href="mailto:esendiclaire@gmail.com"
            className="px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-amber-600 transition"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}