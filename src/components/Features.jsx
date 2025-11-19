// src/components/Features.jsx
import React from "react";
import { MessageCircle, BookOpen, Users, Lightbulb } from "lucide-react";

const featureList = [
  {
    icon: <MessageCircle size={40} />,
    title: "Ask Doubts",
    desc: "Post questions and get help from peers instantly.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Study Resources",
    desc: "Access shared notes, study guides, and materials.",
  },
  {
    icon: <Users size={40} />,
    title: "Peer Sessions",
    desc: "Join interactive study groups and mentoring sessions.",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Smart Suggestions",
    desc: "AI recommends relevant answers & study material.",
  },
];

export default function Features() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        Why Choose PeerHelp?
      </h2>

      <div className="grid md:grid-cols-4 gap-10 mt-16">
        {featureList.map((f, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-2xl shadow hover:shadow-xl border
            transition transform hover:-translate-y-2 text-center"
          >
            <div className="text-blue-600 mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
