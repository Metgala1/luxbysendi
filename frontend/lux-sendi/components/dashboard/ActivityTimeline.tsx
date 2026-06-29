const activities = [
  {
    title: "New Booking",
    description: "Jessica booked a Luxury Wedding package.",
    time: "10:15 AM",
  },
  {
    title: "Gallery Updated",
    description: "5 new event photos uploaded.",
    time: "11:40 AM",
  },
  {
    title: "Invoice Sent",
    description: "Invoice sent to Daniel Smith.",
    time: "2:10 PM",
  },
  {
    title: "Theme Added",
    description: "Royal Blue theme published.",
    time: "4:30 PM",
  },
];

export default function ActivityTimeline() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-8 text-2xl font-semibold">
        Activity Timeline
      </h2>

      <div className="space-y-8">

        {activities.map((activity, index) => (

          <div
            key={activity.title}
            className="flex gap-5"
          >

            <div className="flex flex-col items-center">

              <div className="h-4 w-4 rounded-full bg-[#D4AF37]" />

              {index !== activities.length - 1 && (
                <div className="mt-2 h-full w-px bg-zinc-300" />
              )}

            </div>

            <div className="pb-6">

              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <p className="mt-1 text-zinc-500">
                {activity.description}
              </p>

              <span className="mt-2 inline-block text-sm text-[#B8860B]">
                {activity.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}