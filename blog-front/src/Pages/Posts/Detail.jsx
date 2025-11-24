import { Link, useLocation } from "react-router-dom";

export default function Detail() {
    const { state } = useLocation();

    return (
        <div className="space-y-8 text-left">
            <h1 className="mx-auto text-4xl font-bold text-center">
                Details from <br></br> <h2 className="mx-auto text-2xl font-bold text-center">{state.title}</h2>
            </h1>

            <div className="p-5 border rounded-md shadow-sm bg-gray-900">
                <h2 className="text-xl font-bold">By {state.author}</h2>

                <p className="text-gray-600">{state.body}</p>
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
