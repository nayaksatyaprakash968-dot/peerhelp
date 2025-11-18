import { motion } from "framer-motion";

export default function Signup() {
  return (
    <div className="pt-4 md:pt-6 lg:pt-8">

    <motion.div
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
      >
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h1>

        <input className="w-full p-3 border rounded-lg mb-4" placeholder="Name" />
        <input className="w-full p-3 border rounded-lg mb-4" placeholder="Email" />
        <input
          type="password"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Password"
          />

        <motion.button
          whileHover={{ scale: 1.03 }}
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Sign Up
        </motion.button>
      </div>
    </motion.div>
    </div>
  );
}
