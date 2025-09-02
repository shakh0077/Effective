import React from 'react'


function PythonBasic() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Python Basic</h1>
      <p className="text-lg text-gray-700 mb-4">Python dasturlash tilini o‘rganishni xohlaysizmi? Ushbu kursda siz Python sintaksisi, o‘zgaruvchilar, sikllar, funksiyalar va amaliy loyihalar bilan tanishasiz.</p>
      <ul className="list-disc pl-6 text-gray-800 mb-6">
        <li>Python sintaksisi va asosiy tushunchalar</li>
        <li>O‘zgaruvchilar va ma’lumot turlari</li>
        <li>Sikl va shart operatorlari</li>
        <li>Funksiyalar va modullar</li>
        <li>Amaliy mashg‘ulotlar</li>
      </ul>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Kursga yozilish</button>
        <button className="px-6 py-3 bg-gray-200 text-blue-700 rounded-lg font-semibold hover:bg-gray-300 transition">Demo darsni ko‘rish</button>
      </div>
    </div>
  );
}

export default PythonBasic