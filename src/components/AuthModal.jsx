// // src/components/AuthModal.jsx
// import React, { useEffect, useState } from "react";
// import { X, Eye, EyeOff } from "lucide-react";

// /**
//  * Props:
//  *  - open: boolean
//  *  - mode: "login" | "signup"
//  *  - onClose: () => void
//  */
// export default function AuthModal({ open = false, mode = "login", onClose = () => {} }) {
//   const [visible, setVisible] = useState(false);
//   const [authMode, setAuthMode] = useState(mode); // local mode toggle
//   const [processing, setProcessing] = useState(false);
//   const [done, setDone] = useState(false);

//   // form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     setAuthMode(mode);
//     setDone(false);
//     setForm({ name: "", email: "", password: "" });
//     setVisible(false);
//     setProcessing(false);
//   }, [open, mode]);

//   // prevent background scroll when modal open
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => (document.body.style.overflow = "");
//   }, [open]);

//   if (!open) return null;

//   function change(e) {
//     setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
//   }

//   function switchMode(m) {
//     setAuthMode(m);
//     setForm({ name: "", email: "", password: "" });
//     setDone(false);
//   }

//   function submit(e) {
//     e.preventDefault();
//     if (!form.email || !form.password || (authMode === "signup" && !form.name)) {
//       alert("Please fill required fields.");
//       return;
//     }
//     setProcessing(true);
//     // fake processing
//     setTimeout(() => {
//       setProcessing(false);
//       setDone(true);
//     }, 700);
//   }

//   return (
//     <div className="fixed inset-0 z-60 flex items-center justify-center">
//       {/* backdrop */}
//       <div className="absolute inset-0 bg-black/40" onClick={onClose} />

//       <div className="relative bg-white w-full max-w-md mx-4 rounded-2xl shadow-xl p-6 transform transition-all">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-semibold">
//             {done ? "Success!" : authMode === "login" ? "Log in to PeerHelp" : "Create your account"}
//           </h3>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => switchMode(authMode === "login" ? "signup" : "login")}
//               className="text-sm text-gray-600 hover:text-gray-800"
//             >
//               {authMode === "login" ? "Sign up" : "Log in"}
//             </button>
//             <button onClick={onClose} aria-label="close">
//               <X />
//             </button>
//           </div>
//         </div>

//         {done ? (
//           <div className="text-center py-6">
//             <p className="text-green-600 font-semibold mb-3">
//               {authMode === "login" ? "Logged in" : "Account created"} successfully.
//             </p>
//             <p className="text-gray-600 mb-6">This is a demo flow; integrate your auth backend to persist accounts.</p>
//             <div className="flex justify-center">
//               <button
//                 onClick={onClose}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-lg"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         ) : (
//           <form onSubmit={submit} className="grid gap-3">
//             {authMode === "signup" && (
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={change}
//                 placeholder="Full name"
//                 className="px-3 py-2 rounded-lg border"
//                 autoComplete="name"
//               />
//             )}

//             <input
//               name="email"
//               value={form.email}
//               onChange={change}
//               placeholder="Email address"
//               className="px-3 py-2 rounded-lg border"
//               type="email"
//               autoComplete="email"
//             />

//             <div className="relative">
//               <input
//                 name="password"
//                 value={form.password}
//                 onChange={change}
//                 placeholder="Password"
//                 className="px-3 py-2 rounded-lg border w-full pr-10"
//                 type={visible ? "text" : "password"}
//                 autoComplete={authMode === "login" ? "current-password" : "new-password"}
//               />
//               <button
//                 type="button"
//                 onClick={() => setVisible((v) => !v)}
//                 className="absolute right-2 top-1/2 -translate-y-1/2"
//                 aria-label="toggle password"
//               >
//                 {visible ? <EyeOff /> : <Eye />}
//               </button>
//             </div>

//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" />
//                 <span className="text-gray-600">Remember me</span>
//               </label>

//               <button
//                 type="button"
//                 className="text-blue-600 hover:underline"
//                 onClick={() => alert("Forgot password flow - implement backend to reset password.")}
//               >
//                 Forgot?
//               </button>
//             </div>

//             <div className="pt-2">
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
//                 disabled={processing}
//               >
//                 {processing ? (authMode === "login" ? "Logging in..." : "Creating...") : (authMode === "login" ? "Log in" : "Create account")}
//               </button>
//             </div>

//             <div className="text-center text-sm text-gray-500 pt-2">
//               By continuing you agree to our Terms & Privacy.
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


// new //
// src/components/AuthModal.jsx
// Updated: provides AuthProvider + useAuth named exports and default AuthModal component

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase"; // your firebase auth instance

/* ---------------------------
   Auth Context & Provider
   - Exposes: user, signup, login, logout
----------------------------*/
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Subscribe to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Sign up with email & password
  async function signup(email, password, extra = {}) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    // Optionally set displayName or other profile fields
    if (extra.displayName) {
      try {
        await updateProfile(cred.user, { displayName: extra.displayName });
        // update local user state to include displayName
        setUser({ ...cred.user, displayName: extra.displayName });
      } catch (err) {
        // non-fatal; user was created
        console.warn("Profile update failed:", err);
      }
    }
    return cred;
  }

  // Login with email & password
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout
  function logout() {
    return signOut(auth);
  }

  const value = { user, signup, login, logout };

  // Do not render children until initial auth state is known
  if (loading) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook to access auth context easily
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

/* ---------------------------
   AuthModal Component (default export)
   - Simple modal UI for login / signup
   - Uses signup/login from context
----------------------------*/
export default function AuthModal({ open, onClose, mode = "login" }) {
  // If modal is closed, render nothing
  if (!open) return null;

  const { signup, login } = useAuth(); // must be used inside AuthProvider
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    // e.preventDefault();
    // setError("");
    // setLoading(true);


    // try {
    //   if (mode === "login") {
    //     await login(form.email, form.password);
    //   } else {
    //     // pass displayName using extra param
    //     await signup(form.email, form.password, { displayName: form.name });
    //   }
    //   // success — close modal
    //   onClose && onClose();
    // } catch (err) {
    //   // firebase error messages are verbose; you can map codes to friendly text if wanted
    //   setError(err.message || "Authentication failed");
    //   console.error("Auth error:", err);
    // } finally {
    //   setLoading(false);
    // }
    try {
      setLoading(true);

      // Replace with the actual async auth call used in this file,
      // e.g.:
      // await signInWithEmailAndPassword(auth, email, password);
      // or
      // await createUserWithEmailAndPassword(auth, email, password);
      await doAuthAction();

    } catch (err) {
      let msg = "Something went wrong. Please try again.";

      if (err?.code === "auth/email-already-in-use") {
        msg = "An account already exists with this email.";
      } else if (err?.code === "auth/invalid-email") {
        msg = "Please enter a valid email address.";
      } else if (err?.code === "auth/weak-password") {
        msg = "Password must be at least 6 characters.";
      } else if (err?.code === "auth/user-not-found") {
        msg = "No account found with this email.";
      } else if (err?.code === "auth/wrong-password") {
        msg = "Incorrect password. Try again.";
      }

      setError(msg);
      console.error("Auth Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
        <h2 className="text-lg font-semibold mb-3">
          {mode === "login" ? "Login" : "Create account"}
        </h2>

        {error && (
          <div className="text-sm text-red-600 mb-3">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-3">
          {mode === "signup" && (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name (optional)"
              className="px-3 py-2 border rounded-lg"
            />
          )}

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-3 py-2 border rounded-lg"
            required
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="px-3 py-2 border rounded-lg"
            required
          />

          <div className="flex justify-between items-center mt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-60"
            >
              {loading ? (mode === "login" ? "Logging in..." : "Signing up...") : (mode === "login" ? "Login" : "Sign up")}
            </button>

            <button
              type="button"
              className="text-sm text-gray-600 hover:underline"
              onClick={() => onClose && onClose()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
