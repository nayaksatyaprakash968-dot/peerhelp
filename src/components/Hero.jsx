// src/components/Hero.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero({ onGetStarted }) {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Empowering Students Through <span className="text-blue-600">Peer Learning</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            A community-driven platform where students connect, help each other,
            share notes, ask doubts, and grow together.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={onGetStarted}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition flex items-center gap-2 shadow-sm"
            >
              Get Started <ArrowRight size={20} />
            </button>

            <button
              onClick={() =>
                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Explore
            </button>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-64 rounded-3xl bg-gradient-to-tr from-blue-100 to-blue-50 shadow-xl border border-blue-100 p-6 flex items-center justify-center relative overflow-hidden">

            {/* Floating decorative shapes */}
            <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-blue-200/40 blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-blue-300/40 blur-lg"></div>

            {/* Illustration text */}
            <div className="relative text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">PeerHelp Community</h3>
              <p className="text-gray-500 text-sm">
                A simple visual placeholder until final illustrations are added.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
