import React from "react";

const ProfileCard = () => {
  const data = [
    {
      name: "Alen Wallker",
      role: "Product manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi quod",
    },
    {
      name: "Arlene McCoy",
      role: "Product manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi quod",
    },
    {
      name: "Alen Wallker",
      role: "Product manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi quod",
    },
    {
      name: "Alen Wallker",
      role: "Product manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi quod",
    },
    {
      name: "Alen Wallker",
      role: "Product manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi quod",
    },
    {
      name: "Alen Wallker",
      role: "Product manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi quod",
    },
  ];
  return (
    <div className="min-h-40 w-[30%] flex flex-col mb-20 max-w-[100vw]">
      <img
        src={"./BannerServices.jpg"}
        alt={"logo"}
        className="h-50 w-full object-contain"
      ></img>
      <h1 className="pt-3  text-xl text-black font-bold">Alan Walker</h1>
      <span className="text-md text-grey-300 py-2 ">Product Manager</span>
      <div className="w-full border-b-[1px] border-black my-2"></div>
      <p className="text-md text-grey-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi
        quod
      </p>
    </div>
  );
};

export default ProfileCard;
