export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Client Name",
      text: "Placeholder testimonial content."
    },
    {
      name: "Client Name",
      text: "Placeholder testimonial content."
    },
    {
      name: "Client Name",
      text: "Placeholder testimonial content."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border rounded-3xl p-8"
            >
              <p className="text-gray-600">
                "{item.text}"
              </p>

              <h4 className="mt-6 font-semibold">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}