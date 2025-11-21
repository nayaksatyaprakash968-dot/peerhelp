import React, { useState } from "react";
import { auth } from "./Firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function TestFirebase() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const testSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Success!");
    } catch (err) {
      alert(err.message);
    }
  };

  const testLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Success!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Firebase Test</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={testSignup}>Test Signup</button>
      <button onClick={testLogin}>Test Login</button>
    </div>
  );
}

export default TestFirebase;
