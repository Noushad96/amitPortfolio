import React from "react";

import myCircle from "../assets/circles.png";

const CircleBottom = () => {
  return (
    <>
      <div className="w-[200px] xl:w-[300px] absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10">
        <img
          className="w-full h-full"
          src={myCircle}
          width={260}
          height={260}
          alt="bottomLeftImgCircle"
        />
      </div>
    </>
  );
};

export default CircleBottom;
