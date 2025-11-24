import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", formData);

      // 🔥 Salva token e usuário no localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // 🔥 Dispara evento para atualizar Navbar sem precisar de F5
      window.dispatchEvent(new Event("userChanged"));

      alert("Usuário Logado!");
      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Erro ao logar.");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-semibold mb-5 text-center">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="inline-block px-4 py-2 text-black border border-gray-100 rounded-md hover:bg-gray-200"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="inline-block px-4 py-2 text-black border border-gray-100 rounded-md hover:bg-gray-200"
          onChange={handleChange}
        />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Entrar
        </button>
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
        </a>{" "}
        {new Date().getFullYear()} - Built for learning and professional growth.
      </footer>
    </div>
  );
}
