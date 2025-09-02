import React from 'react'


function BeginnerOnline() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Beginner Online Kursi</h1>
      <p className="text-lg text-gray-700 mb-4">Ushbu kurs dasturlashni endi boshlayotganlar uchun mo‘ljallangan. Siz HTML, CSS, va JavaScript asoslarini o‘rganasiz va birinchi veb-sahifangizni yaratishni o‘rganasiz.</p>
      <ul className="list-disc pl-6 text-gray-800 mb-6">
        <li>HTML va CSS asoslari</li>
        <li>JavaScript kirish</li>
        <li>Oddiy loyihalar yaratish</li>
        <li>Amaliy mashg‘ulotlar va testlar</li>
      </ul>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Kursga yozilish</button>
        <button className="px-6 py-3 bg-gray-200 text-blue-700 rounded-lg font-semibold hover:bg-gray-300 transition">Demo darsni ko‘rish</button>
      </div>
    </div>
  );
}

export default BeginnerOnline