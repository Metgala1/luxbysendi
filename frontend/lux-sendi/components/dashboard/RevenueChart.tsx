"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4200 },
  { month: "Mar", revenue: 5100 },
  { month: "Apr", revenue: 4700 },
  { month: "May", revenue: 6800 },
  { month: "Jun", revenue: 7300 },
  { month: "Jul", revenue: 8100 },
];

export default function RevenueChart() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Revenue Overview
          </h2>

          <p className="text-zinc-500 mt-1">
            Monthly performance
          </p>
        </div>

        <div className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#B8860B]">
          This Year
        </div>
      </div>

      <div className="h-[350]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#ececec" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#D4AF37"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}