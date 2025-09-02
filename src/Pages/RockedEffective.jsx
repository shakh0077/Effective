import React from 'react'


function RockedEffective() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Rocket Effective</h1>
      <p className="text-lg text-gray-700 mb-4">Rocket Effective kursi tez va samarali o‘rganish uchun mo‘ljallangan. Bu kursda siz o‘qish, eslab qolish va tez o‘rganish texnikalarini o‘rganasiz.</p>
      <ul className="list-disc pl-6 text-gray-800 mb-6">
        <li>Tez o‘qish texnikalari</li>
        <li>Eslab qolish usullari</li>
        <li>Amaliy mashg‘ulotlar</li>
        <li>Motivatsion darslar</li>
      </ul>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Kursga yozilish</button>
        <button className="px-6 py-3 bg-gray-200 text-blue-700 rounded-lg font-semibold hover:bg-gray-300 transition">Demo darsni ko‘rish</button>
      </div>
    </div>
  );
}

export default RockedEffective