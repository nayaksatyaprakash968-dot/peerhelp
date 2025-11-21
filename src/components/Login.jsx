// import { motion } from "framer-motion";

// export default function Login() {
//   return ( 
//   <div className="pt-4 md:pt-6 lg:pt-8">
//     <motion.div
//       initial={{ opacity: 0, scale: 0.93 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.35 }}
//       className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
//       >
//       <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>

//         <input
//           className="w-full p-3 border rounded-lg mb-4"
//           placeholder="Email"
//           />
//         <input
//           type="password"
//           className="w-full p-3 border rounded-lg mb-4"
//           placeholder="Password"
//           />

//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           className="w-full bg-blue-600 text-white p-3 rounded-lg"
//           >
//           Log In
//         </motion.button>
//       </div>
//     </motion.div>
//     </div>
//   );
// }


// update 


import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from"../components/icons/FcIcons";


export default function Login() {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(email, password);
      navigate("/dashboard"); // Redirect after login
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
        <h2 className="text-2xl font-bold text-center mb-5">Login</h2>

        {error && <p className="text-red-600 text-center mb-3">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Login
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
          <FcGoogle size={24} /> Login with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
