
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Stars from "../Pages/Stars";

// Button nomlari (yo‘nalishlar)
const directions = ["Barchasi", "Html", "Css", "Python", "C#", "Unity"];

// Kurslar ro'yxati
const courses = [
  {
    title: "Front endga Boshlang'ich qadamlar...",
    desc: "Frot end boyicha dasturlash sohasini biz bilan mukammal o'rganing va mustaqil daromadga chiqing.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA",
    category: "Html"
  },
  {
    title: "Cssga kirish vedeolari",
    desc: "Biz bilan Cssni o'rganing va o'zingiz shaxsiy saytlaringizga dizayn berishingiz mumkin.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA",
    category: "Css"
  },
  {
    title: "Pythonga kirish darslari...",
    desc: "Biz bilan Paythonni mukammal o'rganing. Darslar juda ham oson siz o'ylaganday. Hoziroq boshlang ....",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA",
    category: "Python"
  },
  {
    title: "C# ga kirish darlari",
    desc: "C# ayniqsa Windows, .NET platformasi, web (ASP.NET), mobil (Xamarin), va Unity (game) uchun juda foydali.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA",
    category: "C#"
  },
  {
    title: "Unityga kirish darlari kirib tomosha qilishingiz mumkin.",
    desc: "Unity — o‘yin yaratish uchun eng mashhur va kuchli platformalardan biri bo‘lib, C# dasturlash tili asosida ishlaydi.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA",
    category: "Unity"
  },
  {
    title: "Dasturlash sohasi bo'yicha asosiy chunchalar.",
    desc: "Siz umumiy dasturlash sohasi haqida o‘rganmoqchisiz — bu katta va imkoniyatlarga boy soha.",
    video: "https://www.youtube.com/embed/cUz7lqCNn1A",
    category: "Barchasi"
  },
  {
    title: "Css Darsliklari, ",
    desc: "CSS da float hamda clear xususiyiyatlari haqida tanishib chiqamiz. ",
    video: "https://www.youtube.com/embed/TUUQLDLNi4w",
    category: "Css"
  }
];

function Edvensed() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  const filteredCourses =
    selectedCategory === "Barchasi"
      ? courses
      : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="p-3 md:pr-25 pl-5">
      <div className="w-full max-w-[1250px] mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-5">
          <Typewriter
            words={["Yo'nalishlar..."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        {/* Yo'nalish tugmalari */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
          {directions.map((dir, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(dir)}
              className={`py-2 px-3 cursor-pointer md:py-3 md:px-5 text-base md:text-xl font-semibold rounded-lg md:rounded-xl shadow-lg md:shadow-2xl ${
                selectedCategory === dir ? "bg-cyan-400" : "bg-cyan-200"
              }`}
            >
              {dir}
            </button>
          ))}
        </div>

        {/* Kurslar ro'yxati */}
        <div className="text-xl md:text-2xl font-semibold mb-5">
          <h2>Kurslar...</h2>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="w-full max-w-[320px] rounded-lg shadow-lg bg-white"
            >
              <iframe
                className="w-full rounded-t-lg aspect-video"
                src={course.video}
                title={`YouTube Video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="flex p-2 flex-col gap-1 md:gap-2 mt-1 md:mt-2">
                <h3 className="text-base md:text-lg font-semibold">
                  {course.title}
                </h3>
                <h4 className="text-gray-400 text-base">{course.desc}</h4>
                <div className="flex items-center gap-1 md:gap-2 text-amber-400">
                  <Stars />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Edvensed;
