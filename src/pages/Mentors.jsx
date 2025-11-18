import { motion } from "framer-motion";

const mentors = [
  { name: "Amit Sharma", skill: "DSA", color: "bg-blue-100" },
  { name: "Priya Verma", skill: "Web Dev", color: "bg-green-100" },
  { name: "Rahul Iyer", skill: "Python", color: "bg-purple-100" },
];

export default function Mentors() {
  return (
    <div className="pt-4 md:pt-6 lg:pt-8">

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 min-h-screen bg-gray-50"
      >
      <h1 className="text-3xl font-bold text-gray-800">Mentors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6">
        {mentors.map((m, index) => (
          <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
            className={`${m.color} p-6 rounded-xl shadow`}
            >
            <h2 className="text-xl font-semibold text-gray-800">{m.name}</h2>
            <p className="text-gray-600 mt-1">{m.skill}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
   </div>
  );
}
