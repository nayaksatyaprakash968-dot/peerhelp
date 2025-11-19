// src/components/Hero.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
        Learn. Share. Grow Together with{" "}
        <span className="text-blue-600">PeerHelp</span>
      </h1>

      <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
        A community-driven platform where students connect, help each other,
        share notes, ask doubts, and grow together.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition flex items-center gap-2">
          Get Started <ArrowRight size={18} />
        </button>

        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition">
          Explore
        </button>
      </div>

      <div className="mt-12">
        <img
          src="https://cdn.dribbble.com/userupload/14003739/file/original-ef07420d6a69249566392ea78fc1b7aa.png?resize=1200x900"
          alt="Hero Illustration"
          className="mx-auto w-full max-w-3xl rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
