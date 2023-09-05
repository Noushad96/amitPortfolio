import React from "react";

import ParticlesContainer from "../Pages/ParticlesContainer";

import ServiceSlider from "./serviceSlider";

const service = () => {
  return (
    <>
      <ParticlesContainer />
      <div className="myWork flex flex-col gap-8 lg:gap-0 lg:flex-row  items-center justify-center h-[80vh] text-center px-[10%] sm:px-[20%] lg:px-[20%]">
        <div className="workLeft text-white lg:flex-[1_0_45%] lg:p-4">
          <div className="work-heading text-[32px] lg:text-left font-semibold  ">
            My service <span className="text-[#F13024]">.</span>
          </div>
          <p className="lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            perspiciatis hic veritatis ab?
          </p>
        </div>
        <div className="workRight text-white w-full xl:max-w-[65%] text-left">
          <ServiceSlider />
        </div>
      </div>
    </>
  );
};

export default service;
