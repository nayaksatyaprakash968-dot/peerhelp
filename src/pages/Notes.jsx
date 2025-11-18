import { motion } from "framer-motion";

export default function Notes() {
  return (
   <div className="pt-4 md:pt-6 lg:pt-8">

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 min-h-screen bg-gray-50"
      >
      <h1 className="text-3xl font-bold text-gray-800">Notes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {[1, 2, 3].map((n) => (
          <motion.div
          whileHover={{ scale: 1.04 }}
          key={n}
          className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Subject Note {n}
            </h2>
            <p className="mt-2 text-gray-500">Click to download</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
   </div>
  );
}
