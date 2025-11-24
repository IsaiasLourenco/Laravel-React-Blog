import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        This application was built using <span className="font-semibold">Laravel</span> for the backend
        and <span className="font-semibold">React</span> for the frontend. The goal is to create a clean,
        modern and fully functional blog system with user management (CRUD).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Backend</h2>
          <p className="text-gray-600">Laravel API with REST endpoints for posts and users.</p>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Frontend</h2>
          <p className="text-gray-600">React with Axios and React Router for dynamic navigation.</p>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Database</h2>
          <p className="text-gray-600">MySQL integration with migrations and models.</p>
        </div>

      </div>

      <Link
        to="/"
        className="inline-block px-4 py-2 mt-10 text-white border rounded-md hover:bg-gray-200"
      >
        Go Back
      </Link>

      <footer className="mt-14 text-sm text-gray-500 text-center">
        ©
        <a
          href="https://www.vetor256.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors ml-1"
        >
          Vetor256.
        </a>
        {" "}{new Date().getFullYear()} - Built for learning and professional growth.
      </footer>
    </div>
  );
}
