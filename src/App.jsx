// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

export default function App() {
  // authModal: { open: boolean, mode: "login" | "signup" }
  const [authModal, setAuthModal] = useState({ open: false, mode: "login" });

  const openAuth = (mode = "login") => setAuthModal({ open: true, mode });
  const closeAuth = () => setAuthModal({ open: false, mode: authModal.mode });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar onOpenAuth={openAuth} />

      <main>
        <Hero onGetStarted={() => openAuth("signup")} />

        {/* Features section has id for anchor linking */}
        <div id="features">
          <Features />
        </div>

        <Testimonials />

        {/* Contact section for navbar -> contact */}
        <section id="contact" className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
            <p className="mt-4 text-gray-600">
              Questions, suggestions, or want to collaborate? Drop a message and we'll get back to you.
            </p>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />

      <AuthModal
        open={authModal.open}
        mode={authModal.mode}
        onClose={closeAuth}
      />
    </div>
  );
}

/* Small Contact form component used in App */
function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }
    setSubmitting(true);
    // fake submit
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setForm({ name: "", email: "", message: "" });
    }, 800);
  }

  if (done) {
    return (
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h4 className="font-semibold text-lg text-blue-700">Thanks — we got it!</h4>
        <p className="text-gray-600 mt-2">We'll respond to your message soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        className="px-4 py-3 rounded-lg border"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        className="px-4 py-3 rounded-lg border"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
        rows="4"
        className="px-4 py-3 rounded-lg border"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
