import React, { useState } from "react";

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.firstName && form.lastName && form.email && form.password) {
      onRegister(form);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-700">Ro'yxatdan o'tish</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Ism:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 shadow-sm"
              placeholder="Ismingiz"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Familiya:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 shadow-sm"
              placeholder="Familiyangiz"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 shadow-sm"
              placeholder="Emailingiz"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Parol:</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border-2 border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 shadow-sm"
              placeholder="Parolingiz"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Ro'yxatdan o'tish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
