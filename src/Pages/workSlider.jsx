import React from "react";

// import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import { useNavigate } from "react-router-dom";
// import { useNavigate, useNavigation } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./serviceSlider.css";

// import {
//   RxCrop,
//   RxPencil2,
//   RxDesktop,
//   RxReader,
//   RxRocket,
//   RxArrowTopRight,
// } from "react-icons/rx";

// import thumb1 from "../assets/thumb1.jpg";
import thumb1 from "./thumb1.jpg";
// import thumb1 from "./service.jsx";

const WorkSlider = () => {
  const navigate = useNavigate();

  // data
  const workSlides = {
    slides: [
      {
        images: [
          {
            title: "Graphic Designing",
            // path: "/thumb1.jpg",
            path: "/assets/thumb1.jpg",
            navi: "/gallery",
          },
          {
            title: "Mock ups",
            // path: "/thumb2.jpg",
            path: "/assets/thumb2.jpg",
            navi: "/gallery",
          },
          {
            title: "Logos",
            // path: "/thumb3.jpg",
            path: "/assets/thumb3.jpg",
            navi: "/gallery",
          },
          {
            title: "Printing Designing",
            // path: "/thumb4.jpg",
            path: "/assets/thumb4.jpg",
            navi: "/gallery",
          },
          // {
          //   title: "Video Editing",
          //   // path: "/thumb4.jpg",
          //   path: "/assets/thumb1.jpg",
          //   navi: "/gallery",
          // },
        ],
      },
      // {
      //   images: [
      //     {
      //       title: "Video Editing",
      //       path: "./assets/thumb4.jpg",
      //       navi: "/gallery",
      //     },
      //     {
      //       title: "Graphic Designing",
      //       path: "./assets/thumb1.jpg",
      //       navi: "/gallery",
      //     },
      //     {
      //       title: "Mock ups",
      //       path: "./assets/thumb2.jpg",
      //       navi: "/gallery",
      //     },
      //     {
      //       title: "Logos",
      //       path: "./assets/thumb3.jpg",
      //       navi: "/gallery",
      //     },
      //     {
      //       title: "Printing Designing",
      //       path: "./assets/thumb4.jpg",
      //       navi: "/gallery",
      //     },
      //   ],
      // },
    ],
  };

  // const galleyFunc = (my) => { navi("")}

  return (
    <>
      <Swiper
        // breakpoints={{
        //   425: { slidesPerView: 4, spaceBetween: 10 },
        //   768: { slidesPerView: 4, spaceBetween: 10 },
        // }}
        slidesPerView={1}
        // grid={{
        //   rows: 2,
        // }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        // modules={[Pagination]}
        modules={[FreeMode, Pagination]}
        // modules={[Grid, Pagination]}
        className="mySwiper  h-auto"
        // className="mySwiper  h-auto sm:h-[480px]"
        // className="mySwiper h-auto sm:h-[200px] lg:h-[280px]"
      >
        {workSlides.slides.map((myslide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer ">
                {/* my {slide.images.path}s */}
                {myslide.images.map((image, index) => {
                  return (
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div
                        className="flex items-center justify-center relative overflow-hidden"
                        // className="rounded"
                        onClick={() => {
                          navigate(image.navi);
                        }}
                      >
                        <img
                          className="rounded"
                          src={image.path}
                          alt={image.title}
                          // width={500}
                          // height={300}
                        />
                        {/* overlay Gradient */}
                        {/* bg-gradient-to-l from-[#e838cc] to-[#4a22bd] opacity-0 hover:opacity-80 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#e838cc] to-[#4a22bd]  opacity-0 hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        {/* bottom-0 translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20 */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:md:-translate-y-16  group-hover:lg:-translate-y-10 transition-all duration-300">
                          {/* title part */}
                          <div>{image.title}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <div className="work_SwiperMainDiv  bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-3 py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div>
              <img src={thumb1} alt="Logo " className="rounded" />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default WorkSlider;
