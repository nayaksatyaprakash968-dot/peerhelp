// src/components/Testimonials.jsx
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    text: "PeerHelp helped me clear my semester doubts faster than any coaching class!",
  },
  {
    name: "Priya Verma",
    text: "I love the study groups! They made exam prep actually fun.",
  },
  {
    name: "Rohit Singh",
    text: "The shared notes section saved me so much time during finals.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-blue-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        What Students Say
      </h2>

      <div className="mt-12 max-w-2xl mx-auto text-center p-8 bg-white rounded-2xl shadow">
        <p className="text-gray-700 text-lg mb-4 italic">
          "{testimonials[index].text}"
        </p>
        <h4 className="text-xl font-semibold text-blue-700">
          — {testimonials[index].name}
        </h4>
      </div>
    </section>
  );
}
