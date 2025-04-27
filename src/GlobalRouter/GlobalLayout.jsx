import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsCollectionPlayFill, BsFire, BsLightningFill } from "react-icons/bs";
import { GiToken } from "react-icons/gi";
import { FaFire, FaHome, FaRegBell, FaBars, FaTimes } from "react-icons/fa";
import { HiVideoCamera } from "react-icons/hi2";
import { TbXboxX } from "react-icons/tb";

const GlobalLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
              <h1 className="relative text-3xl lg:text-4xl font-extrabold flex items-center text-blue-600">
                Effective{" "}
                <span className="absolute top-0 left-33 lg:left-39  text-red-500 text-xl">
                  o
                </span>
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer border lg:p-2 flex text-blue-500 items-center gap-1.5 rounded-2xl p-1 hover:bg-gray-100"
            >
              <FaFire className="text-amber-400" />3
            </button>

            {isModalOpen && (
              <div
                className="fixed inset-0   bg-black/65 bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="p-5 max-w-[300px] lg:max-w-[450px]  bg-white rounded-2xl  w-full mx-4 space-y-5 font-sans"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">Streak</h2>
                      <p className="text-gray-500 text-sm">
                        Spacedan har kuni muntazam foydalanib boring
                      </p>
                    </div>
                    <button
                      className="cursor-pointer"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <TbXboxX className="text-2xl text-red-600" />
                    </button>
                  </div>

                  <div className="bg-gray-100 p-2 lg:p-4 rounded-2xl flex flex-wrap justify-start mx-auto lg:justify-between items-center ">
                    {days.map((day, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col shadow-md p-2 items-center text-xs font-medium"
                      >
                        {day.active ? (
                          <BsFire className="text-orange-500 text-xs lg:text-2xl mb-1" />
                        ) : (
                          <div className="w-3 h-3  lg:w-6 lg:h-6 rounded-full bg-gray-300 mb-1"></div>
                        )}
                        <span
                          className={
                            day.active ? "text-black" : "text-gray-400"
                          }
                        >
                          {day.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white border rounded-xl p-4 shadow-sm flex gap-4 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4242/4242531.png"
                      alt="badge"
                      className="w-14 h-14"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">
                        Beydjik qo'lg'a kiriting!
                      </h3>
                      <p className="text-sm text-gray-600">
                        Spacedan har kuni muntazam ravishda foydalanib streaklar
                        yig'ing va beydjiklarni qo'lg'a kiriting!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button className="flex items-center border text-blue-500 gap-1.5 rounded-2xl p-1 lg:p-2 hover:bg-gray-100">
              <GiToken className="text-amber-400" />5
            </button>
            <button className=" items-center gap-1.5 border lg:p-2 text-blue-500 rounded-2xl p-1 hidden md:flex hover:bg-gray-100">
              <BsLightningFill className="text-amber-400" />
              250
            </button>
            <button className="text-gray-500 hidden md:block text-2xl p-2 rounded-full hover:bg-gray-100">
              <FaRegBell />
            </button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden z-20">
          <aside
            className={`${isSidebarOpen ? "w-67" : "w-0"} 
          fixed md:relative h-full md:h-auto bg-white z-20 transition-all duration-300 overflow-hidden
          ${isSidebarOpen ? "shadow-md" : ""}`}
          >
            <nav className="mt-4 p-4 flex flex-col ">
              <Link
                to="/main-page"
                className="px-5 py-3.5 text-xl font-medium rounded-xl flex items-center gap-3  hover:bg-gray-200 focus:bg-gradient-to-br from-blue-500 text-gray-900 to-pink-100 focus:text-red-500"
                onClick={closeSidebar}
              >
                <FaHome className="text-red-500" />
                {isSidebarOpen && "Asosiy"}
              </Link>
              <Link
                to="/my-courses"
                className="px-5 py-3.5 text-xl font-medium rounded-xl flex items-center gap-3  hover:bg-gray-200 focus:bg-gradient-to-br from-blue-500 text-gray-900 to-pink-100 focus:text-red-500"
                onClick={closeSidebar}
              >
                <BsCollectionPlayFill className="text-blue-500" />
                {isSidebarOpen && "Kurslarim"}
              </Link>
              <Link
                to="/my-edvensed"
                className="px-5 py-3.5 text-xl font-medium rounded-xl flex items-center gap-3  hover:bg-gray-200 focus:bg-gradient-to-br from-blue-500 text-gray-900 to-pink-100 focus:text-red-500"
                onClick={closeSidebar}
              >
                <HiVideoCamera className="text-purple-500" />
                {isSidebarOpen && "Edvensed"}
              </Link>
            </nav>
          </aside>

          {/* Mobile overlay */}
          {isSidebarOpen && isMobile && (
            <div
              className="fixed inset-0 bg-black/50 z-10"
              onClick={toggleSidebar}
            />
          )}

          {/* Content */}
          <main
            className={` ${
              isSidebarOpen ? "ml-0 " : "ml-0"
            } transition-all duration-300 overflow-hidden`}
          >
            <div className="h-full overflow-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default GlobalLayout;
