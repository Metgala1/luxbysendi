const messages = [
  {
    name: "Jessica",
    message: "Can we schedule a consultation?",
    time: "2 min ago",
  },
  {
    name: "Daniel",
    message: "I'd like to change my decoration colors.",
    time: "18 min ago",
  },
  {
    name: "Grace",
    message: "Thank you for the amazing event!",
    time: "1 hour ago",
  },
];

export default function RecentMessages() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-semibold">
          Recent Messages
        </h2>

        <button className="text-[#B8860B]">
          Inbox
        </button>

      </div>

      <div className="space-y-5">

        {messages.map((message) => (

          <div
            key={message.name}
            className="flex gap-4 rounded-2xl border p-4 hover:bg-zinc-50 transition"
          >

            <div className="h-12 w-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">

              {message.name.charAt(0)}

            </div>

            <div className="flex-1">

              <h3 className="font-semibold">
                {message.name}
              </h3>

              <p className="text-zinc-500">
                {message.message}
              </p>

            </div>

            <span className="text-sm text-zinc-400 whitespace-nowrap">
              {message.time}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}