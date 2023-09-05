import React from "react";

import RountTxt from "../assets/rounded-text.png";
import { AiOutlineArrowRight } from "react-icons/Ai";

import { BsArrowRight } from "react-icons/Bs";

const ProjectBtn = () => {
  return (
    <>
      <div className="ProjectBtn w-max mx-0 lg:mx-0">
        <a href="/gallery" className="flex items-center justify-center">
          <img
            className=" imgProject animate-[spin_3s_linear_infinite] w-full h-full max-w-[100px] md:max-w-[141px] max-h-[100px] md:max-h-[148px]"
            src={RountTxt}
            alt="rounded project text"
          />
          <BsArrowRight className="Arrow absolute text-[white] font-semibold text-4xl" />
        </a>
      </div>
    </>
  );
};

export default ProjectBtn;
