import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
     <div className="pt-4 md:pt-6 lg:pt-8">

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 min-h-screen bg-gray-50"
      >
      <h1 className="text-4xl font-bold text-gray-800">Welcome to PeerHelp 🚀</h1>
      <p className="text-gray-500 mt-2">Your academic assistant hub</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Ask Doubt Card */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
          <h2 className="text-xl font-semibold text-gray-800">Ask a Doubt</h2>
          <p className="text-gray-500 mt-2">Post questions & get answers.</p>
          <Link
            to="/ask"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
            Ask Now
          </Link>
        </motion.div>

        {/* Mentors */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
          <h2 className="text-xl font-semibold text-gray-800">Mentors</h2>
          <p className="text-gray-500 mt-2">Get guidance from experts.</p>
          <Link
            to="/mentors"
            className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
            >
            Explore
          </Link>
        </motion.div>

        {/* Notes */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
          <h2 className="text-xl font-semibold text-gray-800">Notes</h2>
          <p className="text-gray-500 mt-2">Access shared notes & materials.</p>
          <Link
            to="/notes"
            className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg"
            >
            View Notes
          </Link>
        </motion.div>
      </div>
    </motion.div>
   </div>
  );
}
<div className="pt-8">
  <h1 className="text-3xl font-semibold text-center">Dashboard</h1>
</div>
