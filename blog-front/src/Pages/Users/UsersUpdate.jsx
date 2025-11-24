import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function UsersUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`http://localhost:8000/api/users/${id}`);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          password: ""
        });
      } catch (error) {
        console.error(error);
        alert("User not found!");
        navigate("/users");
      }
    }

    fetchUser();
  }, [id, navigate]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { ...formData };

    if (data.password === "") {
      delete data.password;
    }

    try {
      await axios.put(`http://localhost:8000/api/users/${id}`, data);
      alert("User updated successfully!");
      navigate("/users");
    } catch (error) {
      console.error(error.response?.data || error);
      alert("Error updating user.");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-semibold mb-5 text-center">Update User</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-700 bg-gray-800 text-gray-200 p-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-700 bg-gray-800 text-gray-200 p-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="New Password (optional)"
          className="border border-gray-700 bg-gray-800 text-gray-200 p-2 rounded"
          value={formData.password}
          onChange={handleChange}
        />

        {/* 🔥 BOTÕES PADRONIZADOS */}
        <div className="flex gap-4 mt-4">
          <Link
            to="/users"
            className="inline-block px-4 py-2 text-white border border-gray-600 rounded-md hover:bg-gray-700"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>

      </form>

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
