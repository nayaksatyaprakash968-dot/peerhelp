import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
          PeerHelp
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6">
          {["/", "/ask", "/mentors", "/notes", "/about"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                `text-sm ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300"
                }`
              }
            >
              {["Dashboard", "Ask Doubt", "Mentors", "Notes", "About"][i]}
            </NavLink>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? (
            <Sun size={18} className="text-yellow-300" />
          ) : (
            <Moon size={18} className="text-gray-800" />
          )}
        </button>
      </div>
    </nav>
  );
}
