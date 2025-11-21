import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold mb-3">Welcome to PeerHelp!</h1>

        <p className="mb-4 text-gray-600">
          Logged in as: <span className="font-medium">{user?.email}</span>
        </p>

        <button
          onClick={logout}
          className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
