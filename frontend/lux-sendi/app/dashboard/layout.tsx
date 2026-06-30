import { ReactNode } from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Bookings", href: "/dashboard/bookings" },
  { name: "Events", href: "/dashboard/events" },
  { name: "Gallery", href: "/dashboard/gallery" },
  { name: "Themes", href: "/dashboard/themes" },
  { name: "Messages", href: "/dashboard/messages" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F8F8F6] flex">

      <aside className="hidden lg:flex w-72 bg-black text-white flex-col">

        <div className="border-b border-zinc-800 p-8">
          <h1 className="text-3xl font-serif text-[#D4AF37]">
            LuxBySendi
          </h1>

          <p className="text-sm text-zinc-400 mt-2">
            Luxury Dashboard
          </p>
        </div>

        <nav className="flex-1 py-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-8 py-4 hover:bg-[#D4AF37] hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}