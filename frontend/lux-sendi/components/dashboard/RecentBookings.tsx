const bookings = [
  {
    id: "#1024",
    client: "Jessica Williams",
    event: "Luxury Wedding",
    amount: "$2,800",
    status: "Paid",
  },
  {
    id: "#1025",
    client: "Daniel Smith",
    event: "Birthday Party",
    amount: "$850",
    status: "Pending",
  },
  {
    id: "#1026",
    client: "Grace Johnson",
    event: "Baby Shower",
    amount: "$1,150",
    status: "Paid",
  },
  {
    id: "#1027",
    client: "Michael Brown",
    event: "Corporate Dinner",
    amount: "$3,400",
    status: "Deposit",
  },
];

export default function RecentBookings() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Recent Bookings
        </h2>

        <button className="text-[#B8860B] font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="border-b">

            <tr className="text-left text-zinc-500">

              <th className="pb-4">Booking</th>

              <th className="pb-4">Client</th>

              <th className="pb-4">Event</th>

              <th className="pb-4">Amount</th>

              <th className="pb-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr
                key={booking.id}
                className="border-b last:border-none"
              >
                <td className="py-5">{booking.id}</td>

                <td>{booking.client}</td>

                <td>{booking.event}</td>

                <td className="font-semibold">
                  {booking.amount}
                </td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm

                    ${
                      booking.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }
                    `}
                  >
                    {booking.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </section>
  );
}