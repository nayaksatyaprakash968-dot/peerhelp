// src/components/App.jsx  (or Home.jsx depending on your structure)

import React, { useState } from "react";

// UI sections/components
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import AuthModal from "./AuthModal";

// Authentication hooks & provider
import { useAuth, AuthProvider } from "./AuthModal"; 
// (Assuming AuthProvider + useAuth are exported from AuthModal.jsx)


/* ----------------------------------------------------------
   AppContent → Main content of the app (inside AuthProvider)
----------------------------------------------------------- */
function AppContent() {
  // Local state for authentication modal (open + mode)
  const [authModal, setAuthModal] = useState({ open: false, mode: "login" });

  // Firebase authentication: gives you the current logged-in user
  const { user } = useAuth();

  // Open the auth modal (login or signup)
  const openAuth = (mode = "login") => setAuthModal({ open: true, mode });

  // Close the auth modal
  const closeAuth = () =>
    setAuthModal((prev) => ({ open: false, mode: prev.mode }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Navbar receives the user and a callback to open login/signup modal */}
      <Navbar onOpenAuth={openAuth} user={user} />

      <main>
        {/* Hero section with “Get Started” button → opens signup modal */}
        <Hero onGetStarted={() => openAuth("signup")} />

        {/* Features section is wrapped in an id for navbar anchor scrolling */}
        <div id="features">
          <Features />
        </div>

        <Testimonials />

        {/* Contact section for navbar → contact link */}
        <section id="contact" className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
            <p className="mt-4 text-gray-600">
              Questions, suggestions, or want to collaborate? Drop a message and
              we'll get back to you.
            </p>

            {/* Contact form component */}
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />

      {/* Authentication Modal (login / signup) */}
      <AuthModal
        open={authModal.open}
        mode={authModal.mode}
        onClose={closeAuth}
      />
    </div>
  );
}


/* ----------------------------------------------------------
   AppWrapper → Wrap AppContent inside Firebase AuthProvider
----------------------------------------------------------- */
export default function AppWrapper() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}


/* ----------------------------------------------------------
   ContactForm Component
   Simple contact form with local state + fake submit delay
----------------------------------------------------------- */
function ContactForm() {
  // Form submitting animation state
  const [submitting, setSubmitting] = useState(false);

  // Shows "Thank you" message after submit
  const [done, setDone] = useState(false);

  // Form input states
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // For updating form values
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    // Fake submit with loading animation
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setForm({ name: "", email: "", message: "" });
    }, 800);
  }

  // Success message UI
  if (done) {
    return (
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h4 className="font-semibold text-lg text-blue-700">
          Thanks — we got it!
        </h4>
        <p className="text-gray-600 mt-2">
          We'll respond to your message soon.
        </p>
      </div>
    );
  }

  // Main form UI
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
