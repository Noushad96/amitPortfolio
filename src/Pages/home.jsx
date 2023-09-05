import React from "react";
import topLeftImg from "../assets/top-left-img.png";
import ProjectBtn from "./projectBtn";
import ParticlesContainer from "../Pages/ParticlesContainer";
import "./home.css";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants.js";

// import { AiFillFacebook, AiFillInstagram } from "react-icons/Ai";

const home = () => {
  return (
    <>
      <div className="absolute left-0 top-0 mix-blend-color-dodge z-16 w-[200px] xl:w-[400px] opacity-50">
        <img src={topLeftImg} width={400} height={400} alt="topLeftImg" />
      </div>

      {/* image */}
      <div className=" image w-[90%] sm:w-[80%] h-full absolute right-0 bottom-0">
        {/* bg image  */}
        <div className="backgroundImg bg-image bg-cover bg-center w-full  h-full absolute mix-blend-color-dodge translate-z-0"></div>

        {/* Home Details */}
        {/* <div className="HomeHeading  flex items-center ">
          <div className="Name  text-white text-[25px] sm:text-[30px] font-semibold w-[60%] sm:w-[50%]">
            Amit <span className="text-[red]"> Kumar</span>
          </div>
          <div
            id="Social"
            className="flex text-[25px] sm:text-[30px] items-center justify-evenly sm:justify-evenly w-[50%] sm:w-[30%] "
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
        </div> */}
        <div className="HomeContent w-full h-[90%]  bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-left lg:text-left flex flex-col justify-center xl:pt-20  h-full container mx-auto">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" text-[white] text-[25px] md:text-[32px] font-semibold"
            >
              Transforming Ideas <br />
              Into <span className="text-[red]">Digital Reality</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[white] max-w-sm xl:max-w-xl  xl:mx-0 mb-10 xl:mb-16  text-xs md:text-sm"
            >
              How to Use Lorem Ipsum. For plaintext Lorem Ipsum, type lorem then
              press the Ctrl-Shift-L keyboard shortcut. The default keyboard
              shortcut is the same for all supported platforms. You can also add
              options to the lorem command with an underscore character followed
              by the option name.
            </motion.p>
            <div className="ProjectBtn ">
              <ProjectBtn />
            </div>
          </div>
        </div>
      </div>
      <ParticlesContainer />
    </>
  );
};

export default home;
