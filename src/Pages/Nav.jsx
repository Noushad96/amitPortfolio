import { React, useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

const myLinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "work", path: "/work" },
  { name: "services", path: "/services" },
  {
    name: "contact",
    path: "/contact",
  },
  //   {
  //     name: "testimonials",
  //     path: "/testimonials",
  //   },
];

const Nav = () => {
  const [currentPath, setCurrentPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    // Access the pathname (path/page) from the location object
    const path = location.pathname;
    // console.warn("path ==>  ", path);
    // console.warn("type path kaa == >", typeof path);

    setCurrentPath(path);
  }, []);

  // console.warn("currentPath==>", currentPath);
  return (
    <>
      <div className="NavBar flex flex-col items-center lg:justify-center gap-y-4 fixed h-max lg:h-fit-content bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full  lg:w-fit lg:h-screen ">
        <div
          className="flex w-full flex-row lg:flex-col items-center justify-between lg:justify-center gap-y-10  px-10 sm:px-28 md:px-40 lg:px-[10px] h-[80px] sm:h-[30px] md:h-[50px] lg:h-[60%] py-8 bg-white/10  text-white text - 3xl
 xl:text-xl  lg:rounded-full font-semibold lg:font-thin"
        >
          <a
            className={`${
              myLinks[0].path === currentPath && "text-[red] font-semibold"
            }  hover:text-[red] transition-all duration-300`}
            href="/"
          >
            Home
          </a>
          <a
            className={`${
              myLinks[1].path === currentPath && "text-[red] font-semibold"
            }  hover:text-[red] transition-all duration-300`}
            href={"about"}
          >
            About
          </a>
          <a
            className={`${
              myLinks[2].path === currentPath && "text-[red] font-semibold"
            }  hover:text-[red] transition-all duration-300`}
            href={"work"}
          >
            work
          </a>
          <a
            className={`${
              myLinks[3].path === currentPath && "text-[red] font-semibold"
            }  hover:text-[red] transition-all duration-300`}
            href={"service"}
          >
            service
          </a>
          <a
            className={`${
              myLinks[4].path === currentPath && "text-[red] font-semibold"
            }  hover:text-[red] transition-all duration-300`}
            href={"contact"}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
