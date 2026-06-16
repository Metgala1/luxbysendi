"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/0 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">
          Lux{" "}
          <span className="text-2xl font-extrabold hover:animate-pulse text-pink-400 italic">
            By
          </span>{" "}
          Sendi
        </h1>

       
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#services" className="hover:text-pink-400 transition-colors">
            Services
          </a>
          <a href="#packages" className="hover:text-pink-400 transition-colors">
            Packages
          </a>
          <a href="#rentals" className="hover:text-pink-400 transition-colors">
            Rentals
          </a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">
            Contact
          </a>
        </nav>

       
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <nav className="md:hidden border-t backdrop-blur bg-white/80">
          <div className="flex flex-col p-4 gap-4 text-sm">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-400 transition-colors"
            >
              Services
            </a>

            <a
              href="#packages"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-400 transition-colors"
            >
              Packages
            </a>

            <a
              href="#rentals"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-400 transition-colors"
            >
              Rentals
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}