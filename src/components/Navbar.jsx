// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <div className="text-xl font-bold">PeerHelp</div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden"
        aria-label="Toggle Menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Resources</a>
      </div>

      {open && (
        <div className="absolute top-16 right-6 bg-white shadow-md p-4 rounded-lg flex flex-col gap-3 md:hidden">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Resources</a>
        </div>
      )}
    </nav>
  );
}
