// src/Router/AppRouter.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Home Page */}
        <Route path="/login" element={<Login />} /> {/* Login */}
        <Route path="/signup" element={<Signup />} />{/* Signup */}
      </Routes>
    </BrowserRouter>
  );
}
