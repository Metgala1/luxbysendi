import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="py-16 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Connect With Us
        </h2>

        <p className="mt-4 text-gray-600">
          Follow our journey and discover our latest event transformations,
          luxury setups, and creative celebrations.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://www.tiktok.com/@luxbysendi"
            target="_blank"
            className="p-4 rounded-full border hover:shadow-lg transition"
          >
            <FaTiktok size={24} />
          </a>

          <a
            href="#"
            className="p-4 rounded-full border hover:shadow-lg transition"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="#"
            className="p-4 rounded-full border hover:shadow-lg transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}