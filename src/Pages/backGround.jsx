import React from "react";

import topLeftImg from "../assets/top-left-img.png";
import explosion from "../assets/bg-explosion.png";

import ParticlesContainer from "../Pages/ParticlesContainer";

const backGround = () => {
  return (
    <>
      <div className="absolute left-0 top-0 mix-blend-color-dodge z-16 w-[200px] xl:w-[400px] opacity-50">
        <img src={topLeftImg} width={400} height={400} alt="topLeftImg" />
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image  */}
        {/* <div className="bg-none xl:bg-[url(../assets/bg-explosion.png)] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
        {/* <div className={`bg-[${explosion}]`}></div> */}
        <img
          src={explosion}
          alt="Explosion"
          className="w-full h-full absolute mix-blend-color-dodge translate-z-0"
        />

        {/* Particles  */}
        <ParticlesContainer />
      </div>
    </>
  );
};

export default backGround;
