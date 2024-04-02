"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

const data = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "About Us ",
    link: "/about-us",
  },
  {
    label: "Contact",
    link: "/#Contact",
  },
];
const Navbar = () => {
  const [color, setColor] = useState(true);
  let [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  function toggleDarkMode() {
    setIsChecked((prev) => !prev);
    var body = document.body;

    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
    } else {
      body.classList.add("dark");
    }
  }

  const handleClick = (link) => {
    setOpen(false);
    router.push(link);
  };
  useEffect(() => {
    const changeColor = () => {
      if (typeof window !== "undefined" && window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  return (
    <main
      className={`z-[9999] min-h-26 max-h-18 min-w-[100vw] fixed lg:w-[100vw] text-white ${
        color ? "bg-black bg-opacity-50" : ""
      } backdrop-blur-[5px]  border-0 border-solid border-[rgba(255,255,255,0.75)]`}
    >
      <div className="flex flex-row  items-center  justify-between py-3 px-4  lg:px-20">
        <div className="font-bold text-[18px] flex items-center justify-between">
          <img
            src={"./logo-1.png"}
            alt={"logo"}
            className={"h-14 w-32 pr-2 cursor-pointer"}
            onClick={() => router.push("/")}
          ></img>
          {/* <div
            className={`text-2xl text-black ${
              color ? "text-white" : ""
            } pl-2 cursor-pointer`}
            onClick={() => router.push("/")}
          >
            LCM.PVT.LTD
          </div> */}
        </div>
        <div className="block md:hidden pl-4 ml-auto">
          <label className="flex  items-center cursor-pointer">
            <input
              type="checkbox"
              name="dark-mode"
              id="dark-toggle"
              className="hidden"
              checked={isChecked}
              onChange={toggleDarkMode}
            />
            <div className="toggle">
              <label
                htmlFor="dark-toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <div className="block border-[1px] border-white border-white-900 w-14 h-7 rounded-full"></div>
                  <div
                    className={`dot absolute top-[2.7px]   bg-white w-[23px] h-[23px] rounded-full transition ${
                      isChecked
                        ? 'before:content-["🌛"]'
                        : 'before:content-["☀️"]'
                    } `}
                    style={{
                      transform: isChecked
                        ? "translateX(136%) "
                        : " translateX(8%)",
                      transition: "transform 0.3s ease",
                    }}
                  ></div>
                </div>
              </label>
            </div>
          </label>
        </div>
        <div className=" px-2 z-[999] md:hidden w-18 h-19 flex items-center">
          {open ? (
            <CloseIcon
              onClick={() => setOpen(!open)}
              className=" w-23 h-19"
              style={{ fontSize: "2rem" }}
            />
          ) : (
            <MenuIcon
              onClick={() => setOpen(!open)}
              className=" w-23 h-19"
              style={{ fontSize: "2rem" }}
            />
          )}
        </div>
        <ul
          className={`ml-auto text-center font-bold  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all shadow-xl duration-500 smooth md:hidden ${
            open ? "top-20 " : "top-[-490px] ml-0 pl-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            {data.map((link, index) => (
              <div className="w-full shadow-md " key={index}>
                <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7 ">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-gray-400 duration-500 "
                    onClick={() => handleClick(link.link)}
                  >
                    {link.label}
                  </a>
                </li>
              </div>
            ))}
          </div>
        </ul>
        <div className="ml-auto hidden md:flex flex-row  gap-x-12 cursor-pointer ">
          {data.map((item, index) => (
            <h1 key={index}>
              <Link href={item.link}>{item.label}</Link>
            </h1>
          ))}
        </div>
        <div className="hidden md:block ml-4 pl-12">
          <label className="flex  items-center cursor-pointer">
            <input
              type="checkbox"
              name="dark-mode"
              id="dark-toggle"
              className="hidden"
              checked={isChecked}
              onChange={toggleDarkMode}
            />
            <div className="toggle">
              <label
                htmlFor="dark-toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <div className="block border-[1px] border-white border-white-900 w-16 h-7 rounded-full"></div>
                  <div
                    className={`dot absolute top-[3px]  bg-white w-6 h-6 rounded-full transition ${
                      isChecked
                        ? 'before:content-["🌛"]'
                        : 'before:content-["☀️"]'
                    } `}
                    style={{
                      transform: isChecked
                        ? "translateX(158%) "
                        : " translateX(10%)",
                      transition: "transform 0.3s ease",
                    }}
                  ></div>
                </div>
              </label>
            </div>
          </label>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
