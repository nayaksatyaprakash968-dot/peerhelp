import { motion } from "framer-motion";

export default function About() {
  return (
  <div className="pt-4 md:pt-6 lg:pt-8">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="p-6 min-h-screen bg-gray-50"
    >
      <h1 className="text-3xl font-bold text-gray-800">About PeerHelp</h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        PeerHelp is a platform designed to connect students, mentors, and learners.
        It helps you clarify doubts, access notes, and get guidance from academic mentors.
      </p>
    </motion.div>
</div>
  );
}
