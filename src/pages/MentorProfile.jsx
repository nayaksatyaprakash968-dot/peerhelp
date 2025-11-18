import { useParams, Link } from "react-router-dom";

export default function MentorProfile() {
  const { id } = useParams();

  return (
   <div className="pt-4 md:pt-6 lg:pt-8">

    
    <div className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold text-blue-600">Mentor #{id}</h1>

      <p className="mt-4 text-gray-700">Detailed bio and subjects taught...</p>

      <Link
        to={`/chat/${id}`}
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
        Start Chat
      </Link>
    </div>
   </div> 
  );
}
