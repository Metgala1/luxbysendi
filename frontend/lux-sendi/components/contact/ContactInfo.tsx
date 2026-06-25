export default function ContactInfo() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600">
            Have a question, need a quotation, or ready to book your event?
            Reach out to us and we'll be happy to assist you.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Phone & WhatsApp</h3>
            <p className="text-gray-600 mt-2">
              +237 652 953 717
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600 mt-2">
              esendiclaire@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-600 mt-2">
              Buea, Southwest Region, Cameroon
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Business Hours</h3>
            <p className="text-gray-600 mt-2">
              Monday - Saturday
              <br />
              8:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}