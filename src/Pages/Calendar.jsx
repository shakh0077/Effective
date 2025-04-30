import { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-2xl shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">&lt;</button>
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={nextMonth} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">&gt;</button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}

        {calendarDays.map((day, idx) => (
          <div
            key={idx}
            className={`h-12 flex items-center justify-center rounded-lg ${day ? "hover:bg-blue-100 cursor-pointer" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
