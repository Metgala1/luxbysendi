export default function ValuesSection() {
  const values = [
    {
      title: "Creativity",
      description:
        "Placeholder text explaining the creativity behind the brand."
    },
    {
      title: "Quality",
      description:
        "Placeholder text describing commitment to excellence."
    },
    {
      title: "Community",
      description:
        "Placeholder text explaining customer relationships."
    }
  ];

  return (
    <section className="bg-neutral-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Our Core Values
          </h2>

          <p className="mt-4 text-gray-600">
            Replace with actual company values later.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <h3 className="text-xl font-semibold">
                {value.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}