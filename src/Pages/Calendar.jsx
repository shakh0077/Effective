import { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  const startDay = firstDayOfMonth.getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isActiveDate = (day) => {
    return (
      day &&
      activeDate.getDate() === day &&
      activeDate.getMonth() === month &&
      activeDate.getFullYear() === year
    );
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day &&
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const handleDateClick = (day) => {
    if (day) {
      setActiveDate(new Date(year, month, day));
    }
  };

  const generateCalendarDays = () => {
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const dayColors = [
    "bg-gradient-to-br from-blue-100 to-blue-200", 
    "bg-gradient-to-br from-blue-100 to-blue-200",
    "bg-gradient-to-br from-blue-100 to-blue-200", 
    "bg-gradient-to-br from-blue-100 to-blue-200",
    "bg-gradient-to-br from-blue-100 to-blue-200", 
    "bg-gradient-to-br from-blue-100 to-blue-200",
    "bg-gradient-to-br from-blue-100 to-blue-200", 
  ];

  return (
    <div className="max-w-md w-[500px] mx-auto mt-10 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200">
      <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl text-white">
        <button 
          onClick={prevMonth} 
          className="p-2 cursor-pointer hover:bg-white/20 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button 
          onClick={nextMonth} 
          className="p-2 cursor-pointer hover:bg-white/20 rounded-full transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-3 text-center">
        {daysOfWeek.map((day, index) => (
          <div 
            key={day} 
            className={`font-medium text-sm py-2 rounded-lg ${dayColors[index]} text-gray-700`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {calendarDays.map((day, idx) => {
          const dayIndex = (startDay + idx) % 7;
          return (
            <div
              key={idx}
              onClick={() => handleDateClick(day)}
              className={`h-12 flex items-center justify-center rounded-xl transition-all
                ${day ? `cursor-pointer ${dayColors[dayIndex]} hover:brightness-110` : ""}
                ${isToday(day) ? "ring-2 ring-blue-500 ring-offset-2" : ""}
                ${isActiveDate(day) ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold scale-105 shadow-md" : "text-gray-700"}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full text-sm font-semibold">
          {activeDate.toLocaleDateString("default", { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;