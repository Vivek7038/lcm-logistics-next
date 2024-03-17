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
    label: "Abous Us ",
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
      className={`z-[9999] min-h-30  min-w-[100vw] fixed  lg:w-[100vw]  text-white ${
        color ? "bg-black" : ""
      }`}
    >
      <div className="flex flex-row  items-center  justify-between py-7 px-4  lg:px-7">
        <div className="font-bold text-[18px] flex items-center justify-between">
          <img src={"./logo.png"} alt={"logo"} className={"h-8 w-8 pr-2"}></img>
          <div className={`text-2xl text-black ${color ? "text-white" : ""}`}>
            LCM.PVT.LTD
          </div>
        </div>
        <div className={"inline-block md:hidden ml-auto"}>
        <label className="relative items-center cursor-pointer">
        <input
          type="checkbox"
          name="dark-mode"
          id="dark-toggle"
          className="hidden"
          checked={isChecked}
          onChange={toggleDarkMode}
        />
        <div className="toggle">
          <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <div className="block border-[1px] border-white border-white-900 w-14 h-8 rounded-full"></div>
              <div
                className="dot absolute top-1  bg-white w-6 h-6 rounded-full transition"
                style={{
                  transform: isChecked ? 'translateX(100%)' : 'translateX(0%)',
                  transition: 'transform 0.3s ease',
                }}
              ></div>
            </div>
          </label>
        </div>
      </label>
        </div>
        <div className=" z-[999] md:hidden w-12 h-10 text-center ">
          {open ? (
            <CloseIcon onClick={() => setOpen(!open)} className=" w-20 h-15" />
          ) : (
            <MenuIcon onClick={() => setOpen(!open)} className=" w-20 h-15" />
          )}
        </div>
        <ul
          className={`ml-auto text-center font-bold  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 smooth md:hidden ${
            open ? "top-20 " : "top-[-490px] "
          }`}
        >
         <div className="flex flex-col items-center justify-center">
         {data.map((link) => (
            <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
                onClick={() => handleClick(link.link)}
              >
                {link.label}
              </a>
            </li>
          ))}
         </div>
        </ul>
        <div className="ml-auto hidden md:flex flex-row  gap-x-12 cursor-pointer ">
          {data.map((item) => (
            <h1 key={item.name}>
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
          <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <div className="block border-[1px] border-white border-white-900 w-14 h-8 rounded-full"></div>
              <div
                className="dot absolute top-1   bg-white w-6 h-6 rounded-full transition"
                style={{
                  transform: isChecked ? 'translateX(100%)' : ' translateX(0%)',
                  transition: 'transform 0.3s ease',
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
