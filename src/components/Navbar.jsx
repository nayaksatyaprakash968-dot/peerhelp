// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/70 border-b shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-blue-700">PeerHelp</div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavItem text="Home" />
          <NavItem text="Features" />
          <NavItem text="Contact" />
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Join Now
          </button>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow">
          <MobileItem text="Home" />
          <MobileItem text="Features" />
          <MobileItem text="Contact" />
          <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}

function NavItem({ text }) {
  return (
    <span className="relative cursor-pointer group">
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
    </span>
  );
}

function MobileItem({ text }) {
  return (
    <div className="text-lg text-gray-700 border-b pb-2">{text}</div>
  );
}
