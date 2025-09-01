import AppPromoSwiper from "../Pages/Swipper";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import Remove2 from "../assets/Remove2.png";
import Remove4 from "../assets/Remove4.png";

const extraDays = [
  { day: "Pay" },
  { day: "Jum" },
  { day: "Shan" },
  { day: "Yak" },
  { day: "Dush" },
  { day: "Sesh" },
  { day: "Chor" },
];

const courseCards = [
  {
    id: 1,
    title: "Online kurs boshlanmagan",
    img: Remove2,
    bg: "bg-cyan-100",
    link: "/my-edvensed",
  },
  {
    id: 2,
    title: "Dars topilmadi",
    img: Remove4,
    bg: "bg-lime-200",
    link: "/my-edvensed",
  },
  {
    id: 3,
    title: "Online kurs boshlanmagan",
    img: Remove2,
    bg: "bg-cyan-100",
    link: "/my-edvensed",
  },
];

function MainPage() {
  return (
    <div className="Box space-y-8">
      {/* Reklama Slayder */}
      <AppPromoSwiper />

      {/* Qo'shimcha darslar */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Qo'shimcha dars card */}
        <div className="bg-white shadow-xl rounded-2xl p-5">
          <h1 className="text-xl font-semibold mb-4">Qo'shimcha dars</h1>
          <div className="flex flex-wrap justify-between gap-3">
            {extraDays.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-xs lg:text-base gap-1"
              >
                <h3>{item.day}</h3>
                <button className="bg-gray-200 rounded-xl p-3 cursor-pointer hover:bg-gray-300 active:opacity-50 transition">
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Kurs cardlari */}
        {courseCards.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-6 bg-white shadow-xl rounded-2xl p-5 hover:shadow-2xl transition"
          >
            <div className={`${card.bg} rounded-full p-3`}>
              <img src={card.img} className="w-20 h-20 object-contain" alt="icon" />
            </div>
            <div>
              <h1 className="text-gray-600 text-lg font-medium">{card.title}</h1>
              <Link
                to={card.link}
                className="flex items-center gap-1 text-blue-600 font-semibold mt-2 hover:underline"
              >
                Boshlash
                <BiChevronRight className="text-xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
