import { useParams } from "react-router-dom";

export default function Chat() {
  const { id } = useParams();

  return (
   <div className="pt-4 md:pt-6 lg:pt-8">
      
    <div className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-2xl font-bold text-blue-600">Chat with Mentor #{id}</h1>

      <div className="h-[400px] bg-white border rounded-xl p-4 mt-6 mb-4 overflow-y-auto">
        <p className="text-gray-600 text-center mt-20">Chat messages will appear here…</p>
      </div>

      <input
        type="text"
        placeholder="Type your message..."
        className="w-full border rounded-xl px-4 py-3"
        />
    </div>
   </div>
  );
}
