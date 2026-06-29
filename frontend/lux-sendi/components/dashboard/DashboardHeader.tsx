export default function DashboardHeader() {
  return (
    <header className="bg-white rounded-3xl shadow-sm p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

      <div>
        <h1 className="text-4xl font-serif font-semibold text-zinc-900">
          Welcome Back, Sendi 👋
        </h1>

        <p className="text-zinc-500 mt-2">
          Here's what's happening today.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="rounded-xl border px-4 py-3 outline-none w-72"
        />

        <button className="w-12 h-12 rounded-full bg-[#D4AF37] text-white">
          🔔
        </button>

        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
          S
        </div>

      </div>

    </header>
  );
}