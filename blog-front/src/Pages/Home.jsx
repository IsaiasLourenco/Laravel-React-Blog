import { Index as Posts } from "./Posts/IndexPosts.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="my-5 text-xl font-semibold text-center">
        Welcome to my Blog
      </h1>

      <div className="flex justify-center gap-4 my-6">
        <Link
          to="/users"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Ver Usuários
        </Link>
        <Link
          to="/users/create"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Criar Usuário
        </Link>
      </div>

      <Posts />

      <footer className="mt-14 text-sm text-gray-500 text-center">
        ©
        <a
          href="https://www.vetor256.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors ml-1"
        >
          Vetor256.
        </a>{" "}
        {new Date().getFullYear()} - Built for learning and professional growth.
      </footer>
    </div>
  );
}
