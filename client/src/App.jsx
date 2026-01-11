import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // ❗ If not logged in → show Auth page ONLY
  if (!user) {
    return <AuthPage />;
  }

  //  Logged in → show routes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;

