import React from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
  //   AiOutlineArrowRight,
} from "react-icons/Ai";

import whatsapp from "../assets/Whatsapp.svg";

const Header = () => {
  return (
    <>
      {/* Home Details */}
      <div className="HomeHeading  flex flex-col sm:flex-row items-center  justify-end ">
        <div className="Name  text-white text-[25px] sm:text-[30px] text-center sm:text-start font-semibold w-[60%] sm:w-[50%]">
          <a href="/">
            Amit <span className="text-[red]"> Kumar</span>
          </a>
        </div>
        <div
          id="Social"
          className="flex text-[25px] sm:text-[30px] items-center justify-center sm:justify-evenly gap-x-4 sm:gap-0 w-[50%] sm:w-[30%] relative z-40 "
        >
          <div className="facebook text-white">
            <a href={"about"} className=" link hover:text-[red] cursor-pointer">
              <AiFillFacebook className="Icon-facebook" />
            </a>
          </div>
          <div className="instagram text-white">
            <a href="/" className="hover:text-[red] cursor-pointer">
              <AiFillInstagram />
            </a>
          </div>
          <div className="whatsapp text-white ">
            {/* <div className="whatsapp w-[25%] sm:w-[10%] bottom-[10px] right-1 fixed"> */}
            <a
              className="link hover:text-[yellow] cursor-pointer "
              href="https://wa.me/918130744861?text=I'm%20interested%20in%20your%20design%20Service%20"
              // href="https://wa.me/919717466958?text=I'm%20interested%20in%20your%20web%20design%20Service%20"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className="Icon-WhatsApp" />
              {/* <img src={whatsapp} alt="whatsapp"></img> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
