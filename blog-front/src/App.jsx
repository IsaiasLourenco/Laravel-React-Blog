import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Create from "./Pages/Posts/Create";
import Update from "./Pages/Posts/Update";
import Detail from "./Pages/Posts/Detail";
import UsersList from "./Pages/Users/UsersList"; 
import UsersCreate from "./Pages/Users/UsersCreate";
import UsersUpdate from "./Pages/Users/UsersUpdate";
import Login from "./Pages/Login";

export default function App() {
  return (
    <>
      {/* Navbar na largura total */}
      <Navbar />

      {/* Conteúdo central */}
      <div className="w-3/5 mx-auto my-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* POSTS */}
          <Route path="posts/create" element={<Create />} />
          <Route path="posts/update/:id" element={<Update />} />
          <Route path="posts/detail/:id" element={<Detail />} />

          {/* USERS */}
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/create" element={<UsersCreate />} />
          <Route path="/users/update/:id" element={<UsersUpdate />} />

          {/* LOGIN */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}
