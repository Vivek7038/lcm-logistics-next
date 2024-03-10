"use client";
import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const data = [
  {
    name: "service 1",
    desc: `Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum.
    Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum`,
  },
  {
    name: "service 2",
    desc: `Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum.
    Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum`,
  },
  {
    name: "service 3",
    desc: `Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum.
    Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum`,
  },
  {
    name: "service 4",
    desc: `Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum.
    Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum`,
  },
  {
    name: "service 5",
    desc: `Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum.
    Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum`,
  },
  {
    name: "service 6",
    desc: `Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum.
    Lorem ipsum dolor sit amet consectetur. Tempus lectus sapien tristique mattis augue fames leo euismod. Curabitur dictum quisque arcu posuere vestibulum euismod turpis. Sed consequat velit donec adipiscing a. Euismod feugiat morbi justo id suspendisse neque dis quam. Malesuada morbi diam proin volutpat nulla erat. Curabitur ultrices tortor viverra dignissim commodo. Interdum`,
  },
];
const page = () => {
  const [selectedService, setSelecetedService] = useState(data[0]);
  const handleClick = (index) => {
    setSelecetedService(data[index]);
  };
  return (
    <div className="min-h-fit max-h-screen px-6 flex-col hide-scrollbar md:px-20 top-20 ">
      <div className="flex flex-col md:flex-row gap-y-8 gap-x-5 pt-20">
        <div className="w-full h-100 md:w-[70%] ">
          <img
            src="/warehouse.png"
            alt="banner"
            width={300}
            height={15}
            layout="responsive"
            className="object-contain"
          />
        </div>
        <div className="bg-[#F4F4F4] md:w-[40%] border rounded-lg flex flex-col h-fit max-h-fit pb-2">
          <h1 className="text-[16px] font-bold px-4 py-8">All Serivces</h1>
          <div className="px-8 flex flex-col gap-y-2 py-2">
            {data.map((item, index) => (
              <div
                className="flex flex-row justify-between gap-x-2 max-w-70  border-black border-[2px] p-3 cursor-pointer"
                key={index}
                onClick={() => handleClick(index)}
              >
                <h1 className="font-bold">{item.name}</h1>
                <p
                  className="cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <KeyboardArrowRightIcon />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex md:flex-row ">
        <div className="md:w-[60%]">
          <h1 className="text-[64px] font-bold">Overview</h1>
          <p className="text-justify ">{selectedService.desc}</p>
        </div>
        <div className="bg-[#161616] md:w-[40%] ">dmf d</div>
      </div>
    </div>
  );
};

export default page;
