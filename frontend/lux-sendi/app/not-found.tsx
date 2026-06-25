import Link from "next/link";
import { Clock3 } from "lucide-react";

export const metadata = {
  title: "Coming Soon | Lux by Sendi",
  description:
    "Something beautiful is on the way. Stay tuned for new experiences from Lux by Sendi.",
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-2xl text-center">
        <div className="mx-auto w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
          <Clock3 className="text-amber-600" size={40} />
        </div>

        <span className="mt-8 block uppercase tracking-[0.3em] text-sm font-semibold text-amber-600">
          Coming Soon
        </span>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Something Beautiful Is On The Way
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          We're currently preparing something special for you. This section of
          our website is under development and will be available soon.
        </p>

        <p className="mt-4 text-gray-500">
          Thank you for your patience as we continue creating unforgettable
          experiences.
        </p>

        <Link
          href="/"
          className="inline-flex mt-10 px-8 py-4 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}