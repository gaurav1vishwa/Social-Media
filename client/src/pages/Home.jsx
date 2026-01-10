import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="p-8">
        <h2 className="text-3xl font-bold">
          Welcome, {user?.name}
        </h2>

        <p className="text-gray-400 mt-2">
          This is your home feed (coming next).
        </p>
      </div>
    </div>
  );
};

export default Home;

