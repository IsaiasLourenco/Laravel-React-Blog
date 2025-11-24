import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Carrega usuário do localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    // Atualiza Navbar quando usuário muda
    const handleUserChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("userChanged", handleUserChange);

    return () => {
      window.removeEventListener("userChanged", handleUserChange);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
    window.dispatchEvent(new Event("userChanged")); // atualiza Navbar após logout
  };

  return (
    <nav className="flex justify-between items-center p-3 bg-gray-800 text-white">
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span>Logado como: <b>{user.name}</b></span>
            <button
              onClick={logout}
              className="bg-red-600 px-2 py-1 rounded hover:bg-red-700"
            >
              Log out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
