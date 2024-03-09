import Image from "next/image";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
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

  return (
    <main className="min-h-30 max-w-[2500px]  fixed  ml-0 w-[100%] flex justify-center text-white ">
      <div className="flex flex-row  items-center pt-10 gap-5 w-[100%] 2xl:w-[80%] bg-slate-300  justify-between">
        <div className="font-bold text-[18px] flex items-center  ">
          <img src={"./logo.png"} alt={"logo"} className={"h-8 w-8 mr-4"}></img>
            <div className={"text-2xl text-black"}>
          LCM.PVT.LTD
            </div>
        </div>
        <div className="flex flex-row  gap-x-12 cursor-pointer">
          {data.map((item) => (
              <h1><Link href={item.link} >{item.label}</Link></h1>
          ))}
        </div>
        <div className="inline-block md:hidden">
          <MenuIcon />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
