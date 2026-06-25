import { addOns } from "@/lib/data/services";

export default function AddOns() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Optional Add-Ons
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {addOns.map((item, index) => (
            <div
              key={item + index}
              className="border border-white/20 rounded-2xl p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}