import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SocialApp</h1>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/profile" className="hover:text-blue-400">
          Profile
        </Link>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

