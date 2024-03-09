import Image from "next/image";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
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
    <main className="min-h-30 max-w-[2500px] px-10 fixed">
      <div className="flex flex-row justify-between items-center pt-10 gap-5">
        <div className="font-bold text-[18px]">
          <Image className="px-2" src="" alt="" />
          LCM.PVT.LTD
        </div>
        <div className="flex flex-row justify-start gap-x-2 cursor-pointer">
          {data.map((item) => (
            <h1>{item.label}</h1>
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
