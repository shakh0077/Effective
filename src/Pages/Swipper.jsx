import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

// 🔥 Reklama uchun rasmlar (unsplash/pexels dan olingan misol links)
const slides = [
  {
    id: 1,
    title: "Frontend Developer bo‘ling!",
    subtitle: "HTML, CSS, JavaScript va React kurslarini boshlang",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    cta: ["IOS", "Android"],
  },
  {
    id: 2,
    title: " AI va ta'limni kashf eting",
    subtitle: " Sun'iy intellekt va ta'limning kelajagi",
    img: "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/c7a05c492d2c4fdb5009d80ce902530e.png",
    cta: [ "Kursni boshlash"],
  },
  {
    id: 3,
    title: " Zamonaviy texnologiyalarni o‘rganing",
    subtitle: "React, Tailwind, Node.js va yana ko‘plab kurslar",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    cta: ["Yuklab olish"],
  },
];

const AppPromoSwiper = () => {
  return (
    <div className="max-w-5xl mx-auto bg-black text-white rounded-2xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-96"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative flex items-center justify-center text-white"
          >
            {/* Background Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 "></div>

            {/* Content */}
            <div className="text-center mt-16 px-6 md:px-12 lg:mt-27 ">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white animate-slideUp">
                {slide.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center gap-4 ">
                {slide.cta.includes("IOS") && (
                  <button className="flex items-center gap-2 bg-gray-900 px-5 py-3 rounded-lg hover:bg-gray-700 transition">
                    <FaApple className="text-xl" /> <span>IOS</span>
                  </button>
                )}
                {slide.cta.includes("Android") && (
                  <button className="flex items-center gap-2 bg-green-600 px-5 py-3 rounded-lg hover:bg-green-500 transition">
                    <FaGooglePlay className="text-xl" /> <span>Android</span>
                  </button>
                )}
                {slide.cta.includes("Kursni boshlash") && (
                  <button className="px-6 py-3  bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition">
                    Kursni boshlash
                  </button>
                )}
                {slide.cta.includes("Yuklab olish") && (
                  <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition">
                    Yuklab olish
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppPromoSwiper;
