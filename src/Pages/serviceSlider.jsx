import React from "react";

// import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./serviceSlider.css";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

const serviceSlider = () => {
  // data
  const serviceData = [
    {
      icon: <RxCrop />,
      title: "Branding",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <RxPencil2 />,
      title: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <RxDesktop />,
      title: "Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <RxReader />,
      title: "Copywriting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <RxRocket />,
      title: "SEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
        }}
        // slidesPerView={4}
        // grid={{
        //   rows: 2,
        // }}
        // spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        // modules={[Grid, Pagination]}
        className="mySwiper h-[200px] sm:h-[240px] lg:h-[310px] "
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="SwiperMainDiv  bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* icons */}
                <div className="text-4xl text-[#F13024] mb-4">{item.icon}</div>

                {/* title and desc */}
                <div>
                  <div className="text-white">{item.title}</div>
                  <p className="text-white">{item.description}</p>
                </div>

                {/* arrow */}
                <div className="text-3xl mt-2">
                  <RxArrowTopRight />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default serviceSlider;
