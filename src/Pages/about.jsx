import React, { useState } from "react";

import ParticlesContainer from "../Pages/ParticlesContainer";

import thumb from "../assets/thumb1.jpg";
// import myCircle from "../assets/circles.png";

import CircleBottom from "../Pages/CircleBottom";
import {
  SiAdobephotoshop,
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const about = () => {
  const [index, setIndex] = useState(0);

  // Data

  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <SiNextdotjs />,
            <SiFramer />,
            <FaWordpress />,
          ],
        },
        {
          title: "UI/UX Design",
          icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
        },
      ],
    },
    {
      title: "awards",
      info: [
        {
          title: "Webby Awards - Honoree",
          stage: "2011 - 2012",
        },
        {
          title: "Adobe Design Achievement Awards - Finalist",
          stage: "2009 - 2010",
        },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "UX/UI Designer - XYZ Company",
          stage: "2012 - 2023",
        },
        {
          title: "Web Developer - ABC Agency",
          stage: "2010 - 2012",
        },
        {
          title: "Intern - DEF Corporation",
          stage: "2008 - 2010",
        },
      ],
    },
    {
      title: "credentials",
      info: [
        {
          title: "Web Development - ABC University, LA, CA",
          stage: "2011",
        },
        {
          title: "Computer Science Diploma - AV Technical Institute",
          stage: "2009",
        },
        // {
        //   title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        //   stage: "2006",
        // },
      ],
    },
  ];

  return (
    <>
      <ParticlesContainer />
      <CircleBottom />
      <div className="About h-[80vh] flex flex-col lg:flex-row lg:gap-x-4 mt-5 lg:mt-20  px-[10%] sm:px-[20%] ">
        <div className="left-about ">
          <div className="left-heading text-white font-semibold text-[30px] lg:text-[40px]  normal-case">
            Captivating
            <span className="text-[red] normal-case"> stories </span> birth
            magnificent designs
          </div>
          <div className="left-paga text-[#c5c1c1] text-[15px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            adipisci qui tempore facere sequi voluptatum omnis. Optio
            praesentium accusantium perferendis! .
          </div>
          <div className="left-exp hidden lg:flex items-center justify-between mt-6">
            <div className="exp-year grid ">
              <span className="text-[#e22424fd] text-[30px] font-semibold text-left">
                10+
              </span>
              <span className="text-white text-[15px]">
                Years of Experience
              </span>
            </div>
            <div className="Satisfied-Client grid">
              <span className="text-[#e22424fd] text-[30px] font-semibold text-left">
                250+
              </span>
              <span className="text-white text-[15px]">Satisfied Clients </span>
            </div>
            <div className="exp-finished-work grid">
              <span className="text-[#e22424fd] text-[30px] font-semibold text-left">
                500+
              </span>
              <span className="text-white text-[15px]">
                {" "}
                Finished Projects{" "}
              </span>
            </div>
            <div className="exp-awards grid">
              <span className="text-[#e22424fd] text-[30px] font-semibold text-left">
                5
              </span>
              <span className="text-white text-[15px]"> Winning Awards</span>
            </div>
          </div>
        </div>
        <div className="right-about container mt-6 lg:mt-0 mx-auto h-full flex flex-col items-center  gap-x-6 text-white">
          <div className="flex flex-col w-full xl:max-w-[100%] lg:h-[400px]">
            <div className="aboutDataHead flex gap-x-4 xl:gap-x-8 lg:mx-auto xl:mx-0 mb-4 ">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={` ${
                      index === itemIndex &&
                      `text-[red]  after:!w-[100%] after:bg-[red] after:transition-all after:duration-500 `
                    } skillsData cursor-pointer capitalize xl:text-lg relative after:w-2 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {/* title  */}
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="aboutDataBody ">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className=" title-Body capitalize leading-6"
                  >
                    {/* title Body  */}
                    <div>{item.title}</div>
                    <div className="icons lg:hidden flex gap-4">
                      {item.icons}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div className="right-about flex flex-wrap gap-4"> */}
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

export default about;
