const events = [
  {
    client: "Jessica",
    event: "Birthday",
    date: "15 Jul",
    status: "Confirmed",
  },
  {
    client: "Daniel",
    event: "Wedding",
    date: "20 Jul",
    status: "Pending",
  },
  {
    client: "Grace",
    event: "Baby Shower",
    date: "25 Jul",
    status: "Confirmed",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-semibold">
          Upcoming Events
        </h2>

        <button className="text-[#B8860B]">
          View All
        </button>

      </div>

      <div className="mt-8 space-y-5">

        {events.map((event) => (

          <div
            key={event.client}
            className="flex items-center justify-between rounded-2xl border p-5"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {event.client}
              </h3>

              <p className="text-zinc-500">
                {event.event}
              </p>

            </div>

            <div className="text-right">

              <p className="font-medium">
                {event.date}
              </p>

              <span
                className={`inline-block mt-2 rounded-full px-3 py-1 text-sm ${
                  event.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {event.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}