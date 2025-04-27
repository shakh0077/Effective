import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Oybek from '../assets/Oybek.png'
import Remove5 from '../assets/Remove5.png'

import 'swiper/css';
import 'swiper/css/pagination';

const AppPromoSwiper = () => {
  return (
    <div className="max-w-4xl mx-auto bg-black text-white rounded-2xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-64"
      >
        <SwiperSlide className="flex flex-col items-center relative justify-center p-6 bg-gradient-to-br from-purple-700 to-blue-500">
          <h1 className="text-2xl font-bold mb-4 text-center">QUEENS GAME SPACE MOBILEDA OYNAYMIZ</h1>
          <img src={Remove5} alt="removeImg" className='-z-20 w-100 absolute top-0 left-5' />
          <div className="flex gap-4 absolute bottom-5 right-5">
            <button className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg">
              <FaApple className="text-xl" />
              <span>IOS</span>
            </button>
            <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg">
              <FaGooglePlay className="text-xl" />
              <span>Android</span>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col items-center  justify-center p-6 bg-gradient-to-br from-blue-700 to-purple-500">

          <p className="italic text-lg mb-4 text-center">MOBIL ILOVANI YANGI VERSIYASINI YUKLAB OLING</p>
          <div className="flex gap-4 absolute bottom-5 right-5 ">
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full animate-bounce">
              Yuklab olish
            </button>
          </div>
        
        </SwiperSlide>
        
        <SwiperSlide className="flex flex-col relative items-center justify-center p-6 bg-gradient-to-br from-blue-700 to-purple-500">
          <p className="italic text-lg mb-4 ml-45 text-center">MOBIL ILOVANI YANGI VERSIYASINI YUKLAB OLING</p>
          <img src={Oybek} alt="images" className='absolute top-0 w-80 -z-10'/>
          <div className="flex gap-4 absolute bottom-5 right-5 ">
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full animate-bounce">
              Yuklab olish
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppPromoSwiper;