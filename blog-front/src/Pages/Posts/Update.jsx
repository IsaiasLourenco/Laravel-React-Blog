import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Update() {
    const location = useLocation();
    const navigateTo = useNavigate();
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);
    const [body, setBody] = useState(location.state.body);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/posts/${location.state.id}`, {
                title,
                author,
                body,
            });
            navigateTo("/");
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-8 text-left">
                <h1 className="mx-auto text-xl">
                    Update {location.state.title}
                </h1>
                <label>
                    Title
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400" />
                </label>
                <label>
                    Author
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-inset ring-gray-400" />
                </label>
                <label>
                    Body
                    <input
                        type="text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-inset ring-gray-400" />
                </label>
            </div>
            <div className="flex gap-4 mt-4">
                <Link
                    to="/"
                    className="inline-block px-4 py-2 mt-4 text-white border rounded-md hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="px-4 py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                >
                    Update Post
                </button>
            </div>
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
        </form>

    )
}