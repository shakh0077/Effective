import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "./Neon";
import Register from "./Register";
import { useAuth } from "./AuthContext";


const Login = () => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (!user.name || !user.password) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    // Demo: har qanday ism va parolni qabul qiladi
    setLoading(true);
    setTimeout(() => {
      login({ firstName: user.name, lastName: "", email: "", password: user.password });
      setLoading(false);
      navigate("/main-page");
    }, 1200);
  };

  const handleRegister = (form) => {
    register(form);
    setShowRegister(false);
    navigate("/main-page");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen p-5">
        <h1 className="text-4xl absolute top-8 left-8 font-extrabold flex items-center text-white mb-6">
          <span className="text-6xl font-serif">Sh</span>akh Academy
          <span className="text-red-500 text-xl absolute top-2 left-80">o</span>
        </h1>
        {showRegister ? (
          <Register onRegister={handleRegister} />
        ) : (
          <form
            onSubmit={onLogin}
            className="max-w-md mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
              Shakh Academyga Hush Kelibsiz
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Username:
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 shadow-sm"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                  placeholder="Ismingiz"
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password:
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 shadow-sm"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Parolingiz"
                  disabled={loading}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              {loading ? (
                <span className="flex justify-center items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Yuklanmoqda...
                </span>
              ) : (
                "Kirish"
              )}
            </button>
            <div className="mt-4 text-center text-sm text-gray-600">
              Accountingiz yo'qmi?{' '}
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={() => setShowRegister(true)}
              >
                Ro'yxatdan o'tish
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
