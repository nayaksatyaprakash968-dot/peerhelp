export default function Home() {
  return (
     <div className="pt-4 md:pt-6 lg:pt-8">

    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 px-8 py-20 text-center">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
        Learn Faster. Together.
      </h1>

      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Connect with peers, ask doubts, share notes, collaborate — PeerHelp makes learning simple.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="/ask" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
          Ask a Doubt
        </a>
        <a href="/mentors" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-xl shadow hover:bg-blue-50 transition">
          Browse Mentors
        </a>
      </div>
    </div>
     </div>
  );
}
