import React from 'react'
import { Link } from 'react-router-dom';


function Programing() {
  return (
    <>
    <Link to='/' className="text-blue-600 hover:underline ml-10 mt-10 inline-block">Ortga</Link>
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Dasturlash Asoslari</h1>
      <p className="text-lg text-gray-700 mb-4">Dasturlash asoslari kursida siz algoritmlar, dasturlash mantiqi va zamonaviy dasturlash tillari bilan tanishasiz. Kurs davomida siz quyidagilarni o‘rganasiz:</p>
      <ul className="list-disc pl-6 text-gray-800 mb-6">
        <li>Algoritmlar va ularning turlari</li>
        <li>Python va JavaScript asoslari</li>
        <li>Amaliy kod yozish va loyihalar</li>
        <li>Test va topshiriqlar</li>
      </ul>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Kursga yozilish</button>
        <button className="px-6 py-3 bg-gray-200 text-blue-700 rounded-lg font-semibold hover:bg-gray-300 transition">Demo darsni ko‘rish</button>
      </div>
    </div>
    </>
  );
}

export default Programing