import React from "react";
import AppPromoSwiper from "../Pages/Swipper";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import Remove2 from "../assets/Remove2.png";
import Remove4 from "../assets/Remove4.png";

function MainPage() {
  return (
    <div className="Box">
      <AppPromoSwiper />
      <div className="max-w-4xl mx-auto flex justify-between flex-wrap items-center">
        <div className=" max-w-[440px] w-full  gap-7 items-center   mt-5 bg-white shadow-2xl rounded-2xl p-3.5">
          <h1 className="text-xl font-semibold">Qo'shimcha dars</h1>
          <div className="flex items-center justify-center gap-1 lg:gap-5">
            <div className="flex flex-col items-center text-xs lg:text-base gap-1.5 justify-center ">
              <h3>Pay</h3>
              <button className="bg-gray-200  rounded-xl p-3 cursor-pointer  active:opacity-40">
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col text-xs lg:text-base items-center gap-1.5 justify-center ">
              <h3 >Jum</h3>
              <button className="bg-gray-200 text-xs rounded-xl p-3 cursor-pointer  active:opacity-40">
                <FaPlus />
              </button>
            </div>
            <div className="flex   text-xs lg:text-base flex-col items-center gap-1.5 justify-center ">
              <h3>Shan</h3>
              <button className="bg-gray-200 rounded-xl p-3 cursor-pointer  active:opacity-40">
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col text-xs lg:text-base items-center gap-1.5 justify-center ">
              <h3>Yak</h3>
              <button className="bg-gray-200  rounded-xl p-3 cursor-pointer  active:opacity-40">
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col text-xs lg:text-base items-center gap-1.5 justify-center ">
              <h3 >Dush</h3>
              <button className="bg-gray-200 rounded-xl p-3 cursor-pointer  active:opacity-40">
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col text-xs lg:text-base items-center gap-1.5 justify-center ">
              <h3 >Sesh</h3>
              <button className="bg-gray-200 rounded-xl p-3 cursor-pointer  active:opacity-40">
                <FaPlus />
              </button>
            </div>
            <div className="flex flex-col text-xs lg:text-base items-center gap-1.5 justify-center ">
              <h3 >Chor</h3>
              <button className="bg-gray-200 rounded-xl p-3 cursor-pointer  active:opacity-40">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[440px] w-full flex gap-7 items-center   mt-5 bg-white shadow-2xl rounded-2xl p-3.5">
          <div className="bg-cyan-100 rounded-full object-cover">
            <img src={Remove2} className="w-27" alt="images" />
          </div>
          <div>
            <h1 className="text-gray-400 text-xl">Online kurs boshlanmagan</h1>
            <Link to={"/my-edvensed"} className="flex items-center gap-1 text-blue-500">
              Boshlash
              <BiChevronRight />
            </Link>
          </div>
        </div>

        <div className="max-w-[440px] w-full flex gap-7 items-center   mt-5 bg-white shadow-2xl rounded-2xl p-3.5">
          <div className="bg-lime-200 rounded-full  object-cover">
            <img src={Remove4} className="w-21.5 " alt="images" />
          </div>
          <div>
            <h1 className="text-gray-400 text-xl">Dars topilmadi</h1>
            <Link to={"/my-edvensed"} className="flex items-center gap-1 text-blue-500">
              Boshlash
              <BiChevronRight />
            </Link>
          </div>
        </div>
        <div className="max-w-[440px] w-full flex gap-7 items-center   mt-5 bg-white shadow-2xl rounded-2xl p-3.5">
          <div className="bg-cyan-100 rounded-full object-cover">
            <img src={Remove2} className="w-27" alt="images" />
          </div>
          <div>
            <h1 className="text-gray-400 text-xl">Online kurs boshlanmagan</h1>
            <Link to={"/my-edvensed"} className="flex items-center gap-1 text-blue-500">
              Boshlash
              <BiChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
