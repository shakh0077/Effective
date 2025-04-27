import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "./Neon"; // 🎯 Sening animatsiyali fon

const Login = () => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onLogin = (e) => {
    e.preventDefault();

    if (!user.name || !user.password) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    if (
      (user.name === "Oybek" && user.password === "123456") ||
      user.password === "123456"
    ) {
      setLoading(true);

      setTimeout(() => {
        localStorage.setItem("authousToken", JSON.stringify(user));
        setLoading(false);
        navigate("/main-page");
      }, 2000);
    } else {
      alert("Noto‘g‘ri login yoki parol!");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🎨 Orqa fonda animatsiya */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* 🎯 Form qismi old tomonda */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen p-5">
        <h1 className="text-4xl absolute top-8 left-8 font-extrabold flex items-center text-blue-600 mb-6">
          <span className="text-6xl font-serif">
            E
            </span>ffective{" "}
          <span className="text-red-500 text-xl absolute top-2 left-45">o</span>
        </h1>

        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <form onSubmit={onLogin} className="text-black text-center">
            <h2 className="text-2xl font-bold mb-6">Effectivega Hush Kelibsiz</h2>

            <div className="text-start flex flex-col gap-2 mb-4">
              <label htmlFor="name">Username:</label>
              <input
                className="w-full p-3 rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInput}
                placeholder="Ismingiz"
                disabled={loading}
              />
            </div>

            <div className="text-start flex flex-col gap-2 mb-6">
              <label htmlFor="password">Password:</label>
              <input
                className="w-full p-3 rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 shadow-md"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Parolingiz"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white hover:bg-blue-500 font-semibold px-6 py-3 rounded-xl w-full transition duration-300"
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
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Yuklanmoqda...
                </span>
              ) : (
                "Kirish"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
