import { auth } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Sign up user
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login user
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout user
export function logout() {
  return signOut(auth);
}
