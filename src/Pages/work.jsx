import React from "react";

import ParticlesContainer from "../Pages/ParticlesContainer";

import thumb from "../assets/thumb1.jpg";

import WorkSlider from "./workSlider";

// display: flex;
//     padding: 0 20%;
//     height: 80vh;
//     align-items: center;

const work = () => {
  return (
    <>
      <ParticlesContainer />
      <div className="myWork flex flex-col lg:flex-row  items-center justify-center h-[80vh] text-center px-[10%] sm:px-[20%] lg:px-[20%]">
        {/* <div className="myWork flex"> */}
        <div className="workLeft text-white lg:flex-[1_0_45%] lg:p-4">
          {/* <div className="workLeft text-white "> */}
          <div className="work-heading text-[32px] lg:text-left font-semibold  ">
            My work <span className="text-[#F13024]">.</span>
          </div>
          <p className="lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            perspiciatis hic veritatis ab?
          </p>
        </div>
        {/* <div className="workRight flex flex-wrap gap-4"> */}
        {/* <div className="workRight text-white   w-[20%] text-left"> */}
        <div className="workRight text-white  w-full lg:max-w-[55%]  ">
          {/* <div className="workRight text-white  w-full lg:max-w-[55%]  text-left"> */}
          <WorkSlider />
          {/* <div className="box w-[45%] flex-[1_0_45%]  ">
            <img src={thumb} alt="" className="rounded-md" />
          </div>
          <div className="box w-[45%] flex-[1_0_45%]  ">
            <img src={thumb} alt="" className="rounded-md" />
          </div>
          <div className="box w-[45%] flex-[1_0_45%]  ">
            <img src={thumb} alt="" className="rounded-md" />
          </div>
          <div className="box w-[45%] flex-[1_0_45%]  ">
            <img src={thumb} alt="" className="rounded-md" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default work;
