// // src/components/Navbar.jsx
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// /**
//  * Props:
//  *  - onOpenAuth(mode)  -> call with "login" or "signup"
//  */
// export default function Navbar({ onOpenAuth = () => {} }) {
//   const [open, setOpen] = useState(false);

//   // scroll smoothly to id
//   const goTo = (id) => {
//     setOpen(false);
//     const el = document.getElementById(id);
//     if (el) {
//       const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for fixed navbar
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="backdrop-blur-md bg-white/70 border-b shadow-sm fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         <div className="text-2xl font-bold text-blue-700 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
//           PeerHelp
//         </div>

//         {/* Desktop menu */}
//         <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
//           <button onClick={() => goTo("features")} className="hover:text-blue-700">Features</button>
//           <button onClick={() => goTo("contact")} className="hover:text-blue-700">Contact</button>

//           <button
//             onClick={() => onOpenAuth("login")}
//             className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
//           >
//             Login
//           </button>

//           <button
//             onClick={() => onOpenAuth("signup")}
//             className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
//           >
//             Sign Up
//           </button>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setOpen((s) => !s)}
//           className="md:hidden"
//           aria-label="Toggle Menu"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden px-6 pb-4 space-y-3 bg-white shadow">
//           <button onClick={() => goTo("features")} className="w-full text-left py-2">Features</button>
//           <button onClick={() => goTo("contact")} className="w-full text-left py-2">Contact</button>

//           <div className="pt-2 border-t">
//             <button
//               onClick={() => { setOpen(false); onOpenAuth("login"); }}
//               className="w-full text-left py-2"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => { setOpen(false); onOpenAuth("signup"); }}
//               className="w-full text-left py-2 font-semibold text-blue-700"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

///=====       new ======//
// src/components/Navbar.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar({ onOpenAuth }) {
  const { user, signOut } = useAuth();

  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm">
      <Link to="/" className="text-2xl font-bold text-blue-600">PeerHelp</Link>

      <div className="flex gap-4 items-center">
        <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>

        {user ? (
          <>
            <Link to="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Dashboard
            </Link>
            <button onClick={() => signOut()} className="px-4 py-2 border rounded-lg">
              Logout
            </button>
          </>
        ) : (
          <>
       <button onClick={() => onOpenAuth("login")}>Login</button>
       <button onClick={() => onOpenAuth("signup")}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
}
