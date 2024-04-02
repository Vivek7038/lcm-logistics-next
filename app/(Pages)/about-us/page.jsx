import ProfileCard from "@/app/_components/ProfileCard";
import TimelineCard from "@/app/_components/TimelineCard";
import Timeline from "@/app/_components/Timeline";
import { Profiledata } from "@/app/data";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import TimeLineParent from "@/app/_components/TimeLineParent";

const Page = () => {
  return (
    <div className="w-[100dvw] h-auto  min-h-[100dvh] flex-col hide-scrollbar  ">
      <div className="bg-[url('../public/banner/newhero.jpg')] bg-cover flex flex-col justify-center pt-[30dvh] min-w-[100dvw] min-h-[80dvh] dark:bg-dark_bg banner-div-new">
        <div className="flex flex-row items-start justify-center">
          <h1 className="md:text-6xl text-4xl text-center text-white font-bold">
            About Us
          </h1>
        </div>
      </div>
      {/*  seperator*/}
      <div className="flex flex-col px-10 md:px-20 w-[100dvw] h-auto min-h-[100dvh] dark:bg-dark_bg dark:text-light_txt">
        {/* about us quote */}
        <div className="w-full flex flex-col px-50 justify-center items-center z-[99]">
          <div className="max-w-[70%] my-5 relative">
            <h1 className="md:text-6xl text-4xl  text-black dark:text-light_txt font-bold mb-6 ">
              Our Misson and Vision
            </h1>
            <div>
              <span className="-top-13 -left-14 md:hidden lg:inline-block absolute lg:top-12 lg:-left-20 z-1 p-0">
                <ImQuotesLeft
                  // color="#83838380"
                  className="text-[#83838380] dark:text-white"
                  style={{ width: "60px", height: "70px" }}
                />
              </span>
              <p className="relative text-black dark:text-light_txt z-[999] p-0 text-wrap">
                To streamline global logistics through innovative solutions,
                ensuring seamless delivery and exceeding customer expectations
                every step of the way. To be the preferred logistics partner
                worldwide, recognized for reliability, efficiency, and a
                commitment to sustainability in all operations.
              </p>
              <span className="-bottom-2 -right-8 md:hidden lg:inline-block  absolute lg:-bottom-2 lg:-right-11 z-1 p-0">
                <ImQuotesRight
                  // color="#05040480"
                  className="text-[#83838380] dark:text-white"
                  style={{ width: "60px", height: "70px" }}
                />
              </span>
            </div>
          </div>
        </div>

        {/* timeline  */}
        <div className="flex flex-col  gap-y-8 gap-x-5 items-start pt-[10dvh] max-w-[100dvw]">
          <h1 className="md:text-6xl text-4xl  text-black dark:text-light_txt font-bold my-3">
            From Routes to Revenue: A Three-Year Overview
          </h1>
          <div className="flex flex-col">{/* <TimelineCard /> */}</div>
        </div>
        <div className="w-full   max-w-[100dvw]">
          {/* <Timeline /> */}
          <TimeLineParent />
        </div>

        {/* team */}
        <div className="flex flex-col  gap-y-8 gap-x-5 items-start pt-[10dvh] max-w-[100dvw]">
          <div className="w-full max-w-[100vw] md:max-w-[70%] ">
            <h1 className="md:text-6xl text-4xl  text-black dark:text-light_txt font-bold my-3">
              Meet The Team
            </h1>
          </div>
          {/* profile cards */}
          <div className="md:grid  xl:grid-cols-3 md:grid-cols-2 gap-5 w-[100%] mt-4 gap-x-2 flex overflow-scroll md:overflow-hidden">
            {Profiledata.map((item, index) => (
              <div
                key={index}
                className={"col-span-1 row-span-1 relative border-0"}
              >
                <ProfileCard item={item} />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
