"use client";
import { GiRotaryPhone } from "react-icons/gi";
import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { FaqData, data } from "../../data.js";
const Page = () => {
  const [selectedService, setSelecetedService] = useState(data[0]);
  const handleClick = (index) => {
    setSelecetedService(data[index]);
  };
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <div className="w-[100dvw] h-[100dvh] min-h-[100dvh] flex-col hide-scrollbar  ">
      <div className="bg-[url('../public/Bg-home.png')] bg-cover flex flex-col justify-center pt-[30dvh] min-w-[100dvw] min-h-[80dvh] ">
        <h1 className="md:text-6xl text-4xl text-center text-white font-bold">
          {selectedService.name}
        </h1>
        <div className="pt-4 text-white text-center">
          Home {" >>  "}Services
        </div>
      </div>
      {/*  seperator*/}
      <div className="flex flex-col px-10 md:px-20 ">
        <div className="flex flex-col md:flex-row gap-y-8 gap-x-5 items-start pt-[10dvh]">
          <div className="w-full h-100 md:w-[70%] ">
            <img
              src="/warehouse.png"
              alt="banner"
              width={300}
              height={15}
              layout="responsive"
              className="object-contain w-full h-full min-h-full"
            />
          </div>
          <div className="bg-[#F4F4F4] w-full md:w-[40%] border rounded-lg flex flex-col h-fit min-h-full max-h-fit pb-2">
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

        <div className="flex flex-col md:flex-row gap-y-8 gap-x-5 pt-20">
          <div className="w-full h-100 md:w-[70%]">
            <h1 className="md:text-6xl text-4xl font-bold py-10">
              Overview
            </h1>
            <p className="text-justify ">{selectedService.desc}</p>
          </div>
          <div className="bg-black md:w-[40%] border rounded-lg flex flex-col h-fit min-h-full max-h-fit pb-2 ">
            <div className="ml-auto mr-auto flex mt-4 items-center justify-center w-12 h-12 bg-white rounded-full">
              <GiRotaryPhone className="text-black w-6 h-6" />
            </div>
            <div className="mx-auto max-h-50 py-3">
              <p className="text-lg text-white ">Best Logistics services</p>
            </div>
            <div className="mx-auto max-h-50 py-3">
              <p className="text-lg text-white ">666 888 0000</p>
            </div>
            <div className="mx-auto max-h-50 py-3">
              <p className="text-lg text-white ">Call us any time</p>
            </div>
          </div>
        </div>

        {/* faq section */}
        <div className="flex flex-col justify-start w-full md:max-w-[60%] py-10">
          <h1 className="md:text-6xl text-4xl  font-bold">FAQ</h1>
          <p className="w-full md:max-w-[90%] py-7">
            Lorem ipsum dolor sit amet consectetur. Varius risus montes morbi
            ultrices sed ut. Lorem.Lorem ipsum dolor sit amet consectetur.
            Varius risus montes morbi ultrices sed ut. Lorem.
          </p>

          <div className="flex flex-col gap-y-1">
            {FaqData.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                style={{
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{
                        color:
                          expanded === `panel${index}` ? "white" : "initial",
                      }}
                    />
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  style={{
                    backgroundColor:
                      expanded === `panel${index}` ? "black" : "white",
                    borderBottom: "1px solid #ccc",
                    color: expanded === `panel${index}` ? "white" : "initial",
                    padding: "10px", // Add additional styles as needed
                  }}
                >
                  {item.ques}
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "10px", // Add additional styles as needed
                  }}
                >
                  {item.ans}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
