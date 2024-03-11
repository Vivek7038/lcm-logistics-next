import React from "react";

const ProfileCard = ({ item }) => {
  return (
    <div className="w-[355px] h-[410px] relative border-0 rounded-md ">
      <img
        src={item.img}
        alt={"logo"}
        // className="h-50 w-full object-contain"
        className="h-[253px] w-[80%] border rounded-md "
      ></img>
      <h1 className="pt-3  text-xl text-black font-bold dark:text-light_txt">{item.name}</h1>
      <span className="text-md text-grey py-2 ">{item.role}</span>
      <div className="w-full border-b-[1px] border-black my-2"></div>
      <p className="text-md text-grey">{item.desc}</p>
    </div>
  );
};

export default ProfileCard;
