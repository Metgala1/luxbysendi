"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "Home" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
  { href: "/theme", text: "Themes" },
  { href: "/gallery", text: "Gallery" },
  { href: "/about-us", text: "About Us" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-white/0 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">
          Lux{" "}
          <span className="text-2xl font-extrabold animate-pulse text-orange-500 italic">
            By
          </span>{" "}
          Sendi
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((link, index) => (
            <Link 
              className={pathname === link.href ? "border-b-2 border-b-orange-500 animate-bounce" : "text-black"} 
              href={link.href} 
              key={index}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t backdrop-blur bg-white/80">
          <div className="flex flex-col p-4 gap-4 text-sm">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors hover:text-pink-400 ${
                  pathname === link.href ? "text-orange-500 font-medium" : "text-black"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}