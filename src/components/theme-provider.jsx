// src/components/theme-provider.jsx
import React from "react";

export default function ThemeProvider({ children }) {
  return <div className="min-h-screen antialiased">{children}</div>;
}
