import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Stars from "../Pages/Stars";

const directions = ["Html", "Css", "Python", "C#", "Unity"];

const courses = [
  {
    title: "Front endga Boshlang'ich qadamlar...",
    desc: "Frot end boyicha dasturlash sohasini biz bilan mukammal o'rganing va mustaqil daromadga chiqing.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA"
  },
  {
    title: "Cssga kirish vedeolari",
    desc: "Biz bilan Cssni o'rganing va o'zingiz shaxsiy saytlaringizga dizayn berishingiz mumkin.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA"
  },
  {
    title: "Pythonga kirish darslari...",
    desc: "Biz bilan Paythonni mukammal o'rganing. Darslar juda ham oson siz o'ylaganday. Hoziroq boshlang ....",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA"
  },
  {
    title: "C# ga kirish darlari",
    desc: "C# ayniqsa Windows, .NET platformasi, web (ASP.NET), mobil (Xamarin), va Unity (game) uchun juda foydali.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA"
  },
  {
    title: "Unityga kirish darlari kirib tomosha qilishingiz mumkin.",
    desc: "Unity — o‘yin yaratish uchun eng mashhur va kuchli platformalardan biri bo‘lib, C# dasturlash tili asosida ishlaydi.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA"
  },
  {
    title: "Dasturlash sohasi bo'yicha asosiy chunchalar.",
    desc: "Siz umumiy dasturlash sohasi haqida o‘rganmoqchisiz — bu katta va imkoniyatlarga boy soha.",
    video: "https://www.youtube.com/embed/Mrqg43JTnCA"
  }
];

function Edvensed() {
  return (
    <div className="p-3 md:p-5">
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

        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
          {directions.map((dir, idx) => (
            <Link
              key={idx}
              to=""
              className="py-2 px-3 md:py-3 md:px-5 text-base md:text-xl font-semibold bg-cyan-200 shadow-lg md:shadow-2xl rounded-lg md:rounded-xl"
            >
              <h2>{dir}</h2>
            </Link>
          ))}
        </div>

        <div className="text-xl md:text-2xl font-semibold mb-5">
          <h2>Kurslar...</h2>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {courses.map((course, index) => (
            <div key={index} className="w-full max-w-[320px] rounded-lg shadow-lg">
              <iframe
                className="w-full rounded-t-lg aspect-video"
                src={course.video}
                title={`YouTube Video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="flex p-2 flex-col gap-1 md:gap-2 mt-1 md:mt-2">
                <h3 className="text-base md:text-lg font-semibold">{course.title}</h3>
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
