// src/components/AuthModal.jsx
import React, { useEffect, useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

/**
 * Props:
 *  - open: boolean
 *  - mode: "login" | "signup"
 *  - onClose: () => void
 */
export default function AuthModal({ open = false, mode = "login", onClose = () => {} }) {
  const [visible, setVisible] = useState(false);
  const [authMode, setAuthMode] = useState(mode); // local mode toggle
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setAuthMode(mode);
    setDone(false);
    setForm({ name: "", email: "", password: "" });
    setVisible(false);
    setProcessing(false);
  }, [open, mode]);

  // prevent background scroll when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  function change(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function switchMode(m) {
    setAuthMode(m);
    setForm({ name: "", email: "", password: "" });
    setDone(false);
  }

  function submit(e) {
    e.preventDefault();
    if (!form.email || !form.password || (authMode === "signup" && !form.name)) {
      alert("Please fill required fields.");
      return;
    }
    setProcessing(true);
    // fake processing
    setTimeout(() => {
      setProcessing(false);
      setDone(true);
    }, 700);
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white w-full max-w-md mx-4 rounded-2xl shadow-xl p-6 transform transition-all">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            {done ? "Success!" : authMode === "login" ? "Log in to PeerHelp" : "Create your account"}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => switchMode(authMode === "login" ? "signup" : "login")}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {authMode === "login" ? "Sign up" : "Log in"}
            </button>
            <button onClick={onClose} aria-label="close">
              <X />
            </button>
          </div>
        </div>

        {done ? (
          <div className="text-center py-6">
            <p className="text-green-600 font-semibold mb-3">
              {authMode === "login" ? "Logged in" : "Account created"} successfully.
            </p>
            <p className="text-gray-600 mb-6">This is a demo flow; integrate your auth backend to persist accounts.</p>
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-3">
            {authMode === "signup" && (
              <input
                name="name"
                value={form.name}
                onChange={change}
                placeholder="Full name"
                className="px-3 py-2 rounded-lg border"
                autoComplete="name"
              />
            )}

            <input
              name="email"
              value={form.email}
              onChange={change}
              placeholder="Email address"
              className="px-3 py-2 rounded-lg border"
              type="email"
              autoComplete="email"
            />

            <div className="relative">
              <input
                name="password"
                value={form.password}
                onChange={change}
                placeholder="Password"
                className="px-3 py-2 rounded-lg border w-full pr-10"
                type={visible ? "text" : "password"}
                autoComplete={authMode === "login" ? "current-password" : "new-password"}
              />
              <button
                type="button"
                onClick={() => setVisible((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2"
                aria-label="toggle password"
              >
                {visible ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-gray-600">Remember me</span>
              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => alert("Forgot password flow - implement backend to reset password.")}
              >
                Forgot?
              </button>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                disabled={processing}
              >
                {processing ? (authMode === "login" ? "Logging in..." : "Creating...") : (authMode === "login" ? "Log in" : "Create account")}
              </button>
            </div>

            <div className="text-center text-sm text-gray-500 pt-2">
              By continuing you agree to our Terms & Privacy.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
