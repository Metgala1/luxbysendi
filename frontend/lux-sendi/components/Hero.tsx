export default function Hero() {
  return (
    <section className="h-[80vh] flex items-center justify-center text-center bg-linear-to-br from-pink-50 to-purple-100">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight">
          Rent the Charm. <br /> Create the Memories.
        </h1>

        <p className="mt-6 text-gray-600">
          Premium balloon décor, event styling & luxury setups for unforgettable moments.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:animate-pulse">
            Explore Packages
          </button>
          <button className="px-6 py-3 border-0 bg-black/20  rounded-full hover:animate-bounce ">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}