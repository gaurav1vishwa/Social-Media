import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      {/* App Name */}
      <h1 className="text-xl font-bold text-blue-400">
        SocialApp
      </h1>

      {/* Right Side */}
      {user && (
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
