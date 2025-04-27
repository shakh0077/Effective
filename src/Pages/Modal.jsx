import React from "react";
import { BsFire } from "react-icons/bs";

const Modal = () => {
  const days = [
    { name: "Dush", active: true },
    { name: "Sesh", active: true },
    { name: "Chor", active: true },
    { name: "Pay", active: true },
    { name: "Jum", active: false },
    { name: "Shan", active: false },
    { name: "Yak", active: false },
  ];

  return (
    <div className="p-5 max-w-md mx-auto space-y-5 font-sans">
      {/* Sarlavha */}
      <div>
        <h2 className="text-2xl font-bold">Streak</h2>
        <p className="text-gray-500 text-sm">Spacedan har kuni muntazam foydalanib boring</p>
      </div>

      {/* 🔥 Kunlar qatori */}
      <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center">
        {days.map((day, idx) => (
          <div key={idx} className="flex flex-col items-center text-sm font-medium">
            {day.active ? (
              <BsFire className="text-orange-500 text-2xl mb-1" />
            ) : (
              <div className="w-6 h-6 rounded-full bg-gray-300 mb-1"></div>
            )}
            <span className={`${day.active ? "text-black" : "text-gray-400"}`}>{day.name}</span>
          </div>
        ))}
      </div>

      {/* 🏅 Beydjk kartasi */}
      <div className="bg-white border rounded-xl p-4 shadow-sm flex gap-4 items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/4242/4242531.png" alt="badge" className="w-14 h-14" />
        <div>
          <h3 className="font-bold text-gray-800">Beydjik qo‘lg‘a kiriting!</h3>
          <p className="text-sm text-gray-600">
            Spacedan har kuni muntazam ravishda foydalanib streaklar yig‘ing va beydjiklarni qo‘lg‘a kiriting!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
