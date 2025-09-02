import React from 'react'


function Tgbot() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Telegram Bot Yaratish</h1>
      <p className="text-lg text-gray-700 mb-4">Ushbu kursda siz Telegram botlarni yaratish va ularga dasturlash asoslarini o‘rganasiz. Python va Node.js yordamida oddiy va murakkab botlarni yaratishni o‘rganasiz.</p>
      <ul className="list-disc pl-6 text-gray-800 mb-6">
        <li>Telegram API bilan ishlash</li>
        <li>Python va Node.js uchun kutubxonalar</li>
        <li>Oddiy va murakkab botlar yaratish</li>
        <li>Amaliy loyihalar va testlar</li>
      </ul>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Kursga yozilish</button>
        <button className="px-6 py-3 bg-gray-200 text-blue-700 rounded-lg font-semibold hover:bg-gray-300 transition">Demo darsni ko‘rish</button>
      </div>
    </div>
  );
}

export default Tgbot