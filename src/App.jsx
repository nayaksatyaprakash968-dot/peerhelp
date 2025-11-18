import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import AskDoubt from "./pages/AskDoubt";
import Mentors from "./pages/Mentors";
import Notes from "./pages/Notes";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ask" element={<AskDoubt />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Main wrapper with correct top padding equal to navbar height */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-16 flex flex-col transition-colors">
        <Navbar />

        <main className="flex-1 px-4 md:px-8">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
