import { useState } from "react";
import { motion } from "framer-motion";

export default function AskDoubt() {
  const [question, setQuestion] = useState("");

  return (
   <div className="pt-4 md:pt-6 lg:pt-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 min-h-screen bg-gray-50"
    >
      <h1 className="text-3xl font-bold text-gray-800">Ask a Doubt</h1>

      <div className="mt-6 bg-white p-6 rounded-xl shadow max-w-xl">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Describe your doubt..."
          className="w-full p-4 border rounded-lg resize-none"
          rows={5}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Submit Doubt
        </motion.button>
      </div>
    </motion.div>
  </div>
  );
}
