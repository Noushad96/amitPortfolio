import React from "react";

import ParticlesContainer from "../Pages/ParticlesContainer";

const contact = () => {
  return (
    <>
      <ParticlesContainer />
      <div className="contactUS  flex items-center h-[80vh]">
        <div className="w-full">
          <div className=" contactUS-Head  text-white text-center text-[32px] font-semibold pb-4">
            Let's <span className="text-[red]">Connect</span>
          </div>
          <div className="contactUS-Body flex flex-col px-[10%] sm:px-[20%] lg:px-[30%]">
            <div className="Name flex  flex-col sm:flex-row pb-2">
              <input
                type="text "
                className="border-[red] mr-0 sm:mr-2 mb-2 sm:mb-0  pl-2 border-2 rounded-lg bg-transparent flex-[1_0_5%] text-white placeholder:text-white  focus:border-[yellow] focus:outline-none"
                placeholder="First Name"
              ></input>
              <input
                type="text "
                className="border-[red] pl-2 border-2 rounded-lg bg-transparent flex-[1_0_5%] placeholder:text-white text-white focus:border-[yellow] focus:outline-none"
                placeholder="Last Name"
              ></input>
            </div>
            <div className="Email pb-2">
              <input
                type="text "
                className="border-[red] pl-2 border-2 rounded-lg bg-transparent w-full placeholder:text-white text-white focus:border-[yellow] focus:outline-none"
                placeholder="Email"
              ></input>
            </div>
            <div className="textArea pb-2">
              <textarea
                type="text "
                className="border-[red] pl-2 border-2 rounded-lg bg-transparent w-full placeholder:text-white text-white focus:border-[yellow] focus:outline-none"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="text-white bg-[red] border-[green] border-2 rounded-lg">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
