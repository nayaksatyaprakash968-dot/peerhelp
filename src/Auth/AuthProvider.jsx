import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

// Provides authentication state to the whole app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to login/logout automatically
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook for easy usage
export function useAuth() {
  return useContext(AuthContext);
}
