import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  async function handleDelete(id) {
    const confirmation = confirm("Are you sure you want to delete this user?");
    if (!confirmation) return;

    try {
      const response = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      alert("User deleted!");
      // atualiza lista sem reload
      setUsers(users.filter(user => user.id !== id));

    } catch (error) {
      console.error(error);
      alert("Error deleting user!");
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Lista de Usuários</h2>

      <table className="w-full border text-left">
        <thead className="bg-gray-900">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Nome</th>
            <th className="p-3">Email</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">
                Nenhum usuário encontrado
              </td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id} className="border-b">
                <td className="py-2">{String(user.id).padStart(3, "0")}</td>
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>

                <td className="py-2 flex gap-3">

                  {/* BOTÃO EDIT */}
                  <Link
                    to={`/users/update/${user.id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                  {/* BOTÃO DELETE */}
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
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
