import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsCollectionPlayFill, BsFire, BsLightningFill } from "react-icons/bs";
import { GiCancel, GiToken } from "react-icons/gi";
import {
  FaFire,
  FaHome,
  FaRegBell,
  FaBars,
  FaTimes,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { HiVideoCamera } from "react-icons/hi2";
import { TbXboxX } from "react-icons/tb";
import { BiLogIn } from "react-icons/bi";
import Calendar from "../Pages/Calendar";
import { NavLink } from "react-router-dom";

const GlobalLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [calendar, setCalendar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsSidebarOpen(false);
      } else {
        setIsMobile(false);
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

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
    <div>
      <div className="max-w-[1480px] z-50  w-full mx-auto bg-white h-screen flex flex-col overflow-hidden">
        <header className="flex sticky bg-white top-0 z-30 justify-between py-5 px-4 md:px-10 items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-700 text-2xl"
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <Link to={"/main-page"}>
              <h1 className="relative text-2xl lg:text-4xl font-extrabold flex items-center text-blue-600">
                <span className="text-4xl lg:text-5xl font-serif">E</span>
                ffective{" "}
                <span className="absolute top-0 left-29 lg:left-43  text-red-500 text-xl">
                  o
                </span>
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer border p-2  lg:p-2 flex text-blue-500 items-center gap-1.5 rounded-2xl  hover:bg-gray-100"
            >
              <FaFire className="text-amber-400" />3
            </button>

            {isModalOpen && (
              <div
                className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="p-6 max-w-[300px] lg:max-w-[450px] bg-gradient-to-br from-white to-gray-50 rounded-3xl w-full mx-4 space-y-6 font-sans shadow-2xl border border-white/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
                        Streak
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">
                        Spacedan har kuni muntazam foydalanib boring
                      </p>
                    </div>
                    <button
                      className="cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <TbXboxX className="text-2xl text-rose-500 hover:text-rose-600" />
                    </button>
                  </div>

                  {/* Streak Calendar */}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-3 lg:p-4 rounded-2xl border border-white shadow-inner">
                    <div className="grid grid-cols-7 gap-2 justify-items-center">
                      {days.map((day, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center w-full"
                        >
                          <div
                            className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-1 
                ${
                  day.active
                    ? "bg-gradient-to-br from-orange-400 to-rose-500 shadow-lg shadow-orange-200 animate-pulse"
                    : "bg-white/80 border border-gray-200"
                }`}
                          >
                            {day.active ? (
                              <BsFire className="text-white text-sm lg:text-xl" />
                            ) : null}
                          </div>
                          <span
                            className={`text-xs font-medium ${
                              day.active
                                ? "text-gray-800 font-bold"
                                : "text-gray-500"
                            }`}
                          >
                            {day.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Badge Card */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 shadow-md flex gap-4 items-center border border-white/50">
                    <div className="relative">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/4242/4242531.png"
                        alt="badge"
                        className="w-14 h-14 drop-shadow-md"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Beydjik qo'lg'a kiriting!
                        </span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Spacedan har kuni muntazam ravishda foydalanib streaklar
                        yig'ing va beydjiklarni qo'lg'a kiriting!
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>3/7 days</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                        style={{ width: "42%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setCalendar(true)}
              className="flex items-center border  cursor-pointer text-blue-500 gap-1.5 rounded-2xl p-2 lg:p-3 hover:bg-gray-100"
            >
              <GiToken className="text-amber-400" />
              <FaRegCalendarAlt className="text-xl" />
            </button>
            {calendar && (
              <div
                className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
                onClick={() => setIsModalOpen(false)}
              >
                <Calendar />
                <button
                  onClick={() => setCalendar(false)}
                  className=" text-3xl cursor-pointer rounded-full  justify-center text-white absolute top-30 right-2 lg:top-10 lg:right-15 items-center "
                >
                  <GiCancel className="text-3xl text-rose-500 hover:text-rose-600 " />
                </button>
              </div>
            )}
            <button className=" items-center gap-1.5 border lg:p-2 text-blue-500 rounded-2xl p-1 hidden md:flex hover:bg-gray-100">
              <BsLightningFill className="text-amber-400" />
              250
            </button>
            <button className="text-gray-500 hidden md:block text-2xl p-2 rounded-full hover:bg-gray-100">
              <FaRegBell />
            </button>
          </div>
        </header>
        <div className="flex relative flex-1 overflow-hidden z-20">
  <aside
    className={`${isSidebarOpen ? "w-67" : "w-0"} 
    fixed md:relative h-full md:h-auto bg-white z-20 transition-all duration-300 overflow-hidden
    ${isSidebarOpen ? "shadow-md" : ""}`}
  >
    <nav className="mt-4 p-4 flex flex-col gap-3">
      {/* Replace Link with NavLink and use 'end' prop for exact matching */}
      <NavLink
        to="/main-page"
        end
        className={({ isActive }) => 
          `px-5 py-3.5 text-xl font-medium rounded-xl flex items-center gap-3 transition-all duration-200
          ${isActive 
            ? "bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-blue-500 shadow-sm" 
            : "hover:bg-gray-200"
          }`
        }
        onClick={closeSidebar}
      >
        {({ isActive }) => (
          <>
            <FaHome className={`${isActive ? "text-red-600 scale-110" : "text-red-500"} transition-transform duration-200`} />
            {isSidebarOpen && "Asosiy"}
            {isActive && (
              <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            )}
          </>
        )}
      </NavLink>

      <NavLink
        to="/my-courses"
        className={({ isActive }) => 
          `px-5 py-3.5 text-xl font-medium rounded-xl flex items-center gap-3 transition-all duration-200
          ${isActive 
            ? "bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-blue-500 shadow-sm" 
            : "hover:bg-gray-200"
          }`
        }
        onClick={closeSidebar}
      >
        {({ isActive }) => (
          <>
            <BsCollectionPlayFill className={`${isActive ? "text-blue-600 scale-110" : "text-blue-500"} transition-transform duration-200`} />
            {isSidebarOpen && "Kurslarim"}
            {isActive && (
              <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            )}
          </>
        )}
      </NavLink>

      <NavLink
        to="/my-edvensed"
        className={({ isActive }) => 
          `px-5 py-3.5 text-xl font-medium rounded-xl flex items-center gap-3 transition-all duration-200
          ${isActive 
            ? "bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-blue-500 shadow-sm" 
            : "hover:bg-gray-200"
          }`
        }
        onClick={closeSidebar}
      >
        {({ isActive }) => (
          <>
            <HiVideoCamera className={`${isActive ? "text-purple-600 scale-110" : "text-purple-500"} transition-transform duration-200`} />
            {isSidebarOpen && "Video darslar"}
            {isActive && (
              <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            )}
          </>
        )}
      </NavLink>

      <NavLink
        to="/"
        end
        className={({ isActive }) => 
          `px-5 absolute bottom-10 left-5 py-3.5 text-xl font-medium rounded-xl flex items-center gap-3 transition-all duration-200
          ${isActive 
            ? "bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-blue-500 shadow-sm" 
            : "hover:bg-gray-200"
          }`
        }
        onClick={() => {
          closeSidebar();
        }}
      >
        {({ isActive }) => (
          <>
            <BiLogIn className={`${isActive ? "text-red-700 scale-110" : "text-red-600"} transition-transform duration-200`} />
            {isSidebarOpen && "Chiqish"}
            {isActive && (
              <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            )}
          </>
        )}
      </NavLink>
    </nav>
  </aside>

  {isSidebarOpen && isMobile && (
    <div
      className="fixed inset-0 bg-black/50 z-10"
      onClick={toggleSidebar}
    />
  )}

  <main
    className={`${
      isSidebarOpen ? "ml-0" : "ml-0"
    } transition-all duration-300 overflow-hidden`}
  >
    <div className="h-full w-full overflow-auto">
      <Outlet />
    </div>
  </main>
</div>
      </div>
    </div>
  );
};

export default GlobalLayout;
