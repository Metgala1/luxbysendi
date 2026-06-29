const actions = [
  "Create Event",
  "Upload Gallery",
  "Add Theme",
  "Create Invoice",
  "View Calendar",
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl bg-black p-6 text-white shadow-sm">

      <h2 className="text-2xl font-semibold">
        Quick Actions
      </h2>

      <p className="mt-2 text-zinc-400">
        Frequently used actions.
      </p>

      <div className="mt-8 space-y-4">

        {actions.map((action) => (

          <button
            key={action}
            className="w-full rounded-xl border border-[#D4AF37] py-4 font-medium transition hover:bg-[#D4AF37] hover:text-black"
          >
            {action}
          </button>

        ))}

      </div>

    </section>
  );
}