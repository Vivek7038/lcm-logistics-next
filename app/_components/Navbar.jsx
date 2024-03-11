"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
const data = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Discover",
    link: "/discover",
  },
  {
    label: "Special Deals ",
    link: "/",
  },
  {
    label: "Contact",
    link: "/",
  },
];
const Navbar = () => {
  const [color, setColor] = useState(true);
  let [open, setOpen] = useState(false);
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
      <div className="flex flex-row  items-center  justify-between py-7 px-10">
        <div className="font-bold text-[18px] flex items-center justify-between">
          <img src={"./logo.png"} alt={"logo"} className={"h-8 w-8 pr-2"}></img>
          <div className={`text-2xl text-black ${color ? "text-white" : ""}`}>
            LCM.PVT.LTD
          </div>
        </div>
        <div className="z-[999] md:hidden">
         {open ?
          <CloseIcon
          onClick={() => setOpen(!open)}
          className=" w-20 h-15"
          />  :
         <MenuIcon onClick={() => setOpen(!open)} 
         className=" w-20 h-15"
         />
        } 
        </div>
        <ul
          className={`text-center font-bold  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:hidden ${
            open ? "top-20 " : "top-[-490px] "
          }`}
        >
          {data.map((link) => (
            <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex flex-row  gap-x-12 cursor-pointer ">
          {data.map((item) => (
            <h1 key={item.name}>
              <Link href={item.link}>{item.label}</Link>
            </h1>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
