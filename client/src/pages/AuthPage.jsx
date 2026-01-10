import Register from "./resister";
import Login from "./login";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl p-6">

        {/* REGISTER */}
        <div className="border border-gray-700 rounded-lg">
          <Register />
        </div>

        {/* LOGIN */}
        <div className="border border-gray-700 rounded-lg">
          <Login />
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
