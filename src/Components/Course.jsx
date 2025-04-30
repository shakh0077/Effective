import React from "react";
import Icons from "../assets/react.svg";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { FaCentercode, FaCode } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Course() {
  return (
    <div className="max-w-[1100px] mx-auto w-full p-5 md:Box  lg:max-w-[1100px]  ">
      <h2 className="text-2xl font-semibold mb-5 ">      <span >
              <Typewriter
                words={['Davom eting...']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span></h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5  p-2 rounded-2xl">
        <div className="flex gap-3  shadow-2xl bg-gray-100 p-2.5 rounded-2xl">
          <img
            src={Icons}
            className="bg-cyan-200 rounded-full w-18 h-18 p-2.5"
            alt="images"
          />
          <div className="flex flex-col ">
            <h2 className="font-semibold text-lg">Front End 1.0</h2>
            <h2>1034</h2>
            <Link to={"/my-front-end"} className="flex items-center gap-1 text-blue-500">
              Kirish <BiChevronRight />
            </Link>
          </div>
        </div>

        <div className="flex gap-3  shadow-2xl bg-gray-100 p-2.5 rounded-2xl">
          <img
            src={Icons}
            className="bg-cyan-200 rounded-full w-18 h-18 p-2.5"
            alt="images"
          />
          <div className="flex flex-col ">
            <h2 className="font-semibold text-lg">
            Programming (Front-end)А</h2>
            <h2>FRONT-1258</h2>
            <Link to={"/my-programing"} className="flex items-center gap-1 text-blue-500">
              Kirish <BiChevronRight />
            </Link>
          </div>
        </div>

        <div className="flex gap-3  shadow-2xl bg-gray-100 p-2.5 rounded-2xl">
          <h3 className="bg-orange-200 flex justify-center items-center text-4xl text-orange-500 rounded-full w-18 h-18 p-2.5"><FaCode/></h3>
          <div className="flex flex-col ">
            <h2 className="font-semibold text-lg">Back-End (Python Basic)</h2>
            <h2>1034</h2>
            <Link to={"/my-python-basic"} className="flex items-center gap-1 text-blue-500">
              Kirish <BiChevronRight />
            </Link>
          </div>
        </div>

        <div className="flex gap-3  shadow-2xl bg-gray-100 p-2.5 rounded-2xl">
        <h3 className="bg-orange-200 flex justify-center items-center text-4xl text-orange-500 rounded-full w-18 h-18 p-2.5"><FaCode/></h3>
          <div className="flex flex-col ">
            <h2 className="font-semibold text-lg">
            Back-End (TG Bot & SQL)</h2>
            <h2>1034</h2>
            <Link to={"/my-tgbot"} className="flex items-center gap-1 text-blue-500">
              Kirish <BiChevronRight />
            </Link>
          </div>
        </div>
      </div>

      <h2 className="text-2xl my-5 font-semibold mb-5"> Tekin Kurslar</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  p-2 rounded-2xl">
        <div className="flex gap-3  shadow-2xl bg-gray-100 p-2.5 rounded-2xl">
        <h3 className="bg-green-200 flex justify-center items-center text-4xl text-green-500 rounded-full w-18 h-18 p-2.5"><FaCentercode  /></h3>
          <div className="flex flex-col ">
            <h2 className="flex items-center text-lg gap-2 font-semibold">
              Beginner + (Online){" "}
              <button className="bg-green-500 text-white font-semibold py-2 px-5 rounded-2xl">
                Free
              </button>
            </h2>
            <h2>1034</h2>
            <Link to={"/my-beginner-online"} className="flex items-center gap-1 text-blue-500">
              Kirish <BiChevronRight />
            </Link>
          </div>
        </div>

        <div className="flex gap-3  shadow-2xl bg-gray-100 p-2.5 rounded-2xl">
        <h3 className="bg-green-200 flex justify-center items-center text-4xl text-green-500 rounded-full w-18 h-18 p-2.5"><FaCentercode  /></h3>

          <div className="flex flex-col ">
            <h2 className="flex items-center text-lg gap-2 font-semibold ">
              Rocket MARS
              <button className="bg-green-500 text-white font-semibold py-2 px-5 rounded-2xl">
                Free
              </button>
            </h2>
            <h2>1034</h2>
            <Link to={"/my-rocked-effective"} className="flex items-center gap-1 text-blue-500">
              Kirish <BiChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
