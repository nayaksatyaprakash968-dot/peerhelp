// import React, { useState } from 'react';
// import { motion } from "framer-motion";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../Firebase/firebase'; 
// // import { useNavigate } from 'react-router-dom'; // You'll need this later for redirecting

// export default function Signup() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     // const navigate = useNavigate(); // Initialize useNavigate here

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         setError(null); // Clear previous errors
        
//         console.log("Attempting signup with:", email); 

//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
//             console.log("SUCCESS! User created:", userCredential.user.uid);
//             // navigate('/dashboard'); // Example: Redirect on success

//         } catch (firebaseError) {
//             console.error("Firebase Sign-up Error:", firebaseError.message);
//             setError(firebaseError.message.replace('Firebase: Error (auth/', '').replace(/\)/g, '')); // Clean up error message for display
//         }
//     };

//     return (
//         <div className="pt-4 md:pt-6 lg:pt-8">

//             <motion.div
//                 initial={{ opacity: 0, scale: 0.93 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35 }}
//                 className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
//             >
//                 {/* Wrap the content in a <form> and add onSubmit */}
//                 <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow max-w-md w-full">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h1>

//                     {/* Display Error Message */}
//                     {error && (
//                         <div className="p-3 bg-red-100 text-red-700 rounded-lg mb-4">
//                             {error}
//                         </div>
//                     )}

//                     <input className="w-full p-3 border rounded-lg mb-4" placeholder="Name" />
                    
//                     {/* Link Email Input */}
//                     <input 
//                         type="email"
//                         className="w-full p-3 border rounded-lg mb-4" 
//                         placeholder="Email" 
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
                    
//                     {/* Link Password Input */}
//                     <input
//                         type="password"
//                         className="w-full p-3 border rounded-lg mb-4"
//                         placeholder="Password (min 6 characters)"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />

//                     {/* The button now triggers the form submission */}
//                     <motion.button
//                         whileHover={{ scale: 1.03 }}
//                         type="submit"
//                         className="w-full bg-green-600 text-white p-3 rounded-lg"
//                     >
//                         Sign Up
//                     </motion.button>
//                 </form>
//             </motion.div>
//         </div>
//     );
// }  


// updation 
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from"../components/icons/FcIcons";

export default function Signup() {
  const { signup, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await signup(email, password);
      navigate("/dashboard"); // Redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-5">Create Account</h2>

        {error && (
          <p className="text-red-600 text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle size={24} /> Sign up with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
