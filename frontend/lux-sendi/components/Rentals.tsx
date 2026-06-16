export default function Rentals() {
  return (
    <section id="rentals" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Rentals & Props
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {["Flower Walls", "Throne Chairs", "Neon Signs", "Marquee Letters"].map(
          (item) => (
            <div key={item} className="p-6 border rounded-2xl">
              <h3 className="font-semibold">{item}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Luxury event rental to elevate your setup.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}