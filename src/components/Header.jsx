import React from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  //   AiOutlineArrowRight,
} from "react-icons/Ai";

const Header = () => {
  return (
    <>
      {/* Home Details */}
      <div className="HomeHeading  flex flex-col sm:flex-row items-center  justify-end">
        <div className="Name  text-white text-[25px] sm:text-[30px] text-center sm:text-start font-semibold w-[60%] sm:w-[50%]">
          Amit <span className="text-[red]"> Kumar</span>
        </div>
        <div
          id="Social"
          className="flex text-[25px] sm:text-[30px] items-center justify-center sm:justify-evenly gap-x-4 sm:gap-0 w-[50%] sm:w-[30%] "
        >
          <div className="facebook text-white">
            <a href={"about"} className=" link">
              <AiFillFacebook className="Icon-facebook" />
            </a>
          </div>
          <div className="instagram text-white">
            <a href="/" className="hover:text-[red]">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
