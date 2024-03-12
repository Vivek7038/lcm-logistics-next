import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Timeline from "./Timeline";
import TimelineCard from "./TimelineCard";
import { TimeLineData } from "../data";
const TimeLineParent = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {/* <!-- Item #2 --> */}
        {TimeLineData.map((item, index) => (
          <div
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            key={index}
          >
            {/* <!-- Icon --> */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border dark:border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span key={index} className="text-black">
                {index % 2 === 0 ? (
                  <LocalShippingIcon style={{ transform: "scaleX(-1)" }} />
                ) : (
                  <LocalShippingIcon />
                )}
              </span>
            </div>
            {/* <!-- Card --> */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-dark_bg p-4 rounded  dark:border-slate-200 dark:shadow text-black dark:border-0">
              <div className="border-[2px] border-[#B1C2F3] flex flex-col sm:flex-row justify-between px-6 rounded-[12px] gap-x-2 dark:bg-dark_bg ">
                <div className="border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-black py-7 my-2">
                  <h1 className="font-bold text-3xl md:text-5xl text-center sm:text-start dark:text-light_txt px-2">
                    {item.date}
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-between py-4 px-2">
                  <h1 className="text-md text-[#838383] text-wrap text-center">
                    Delivery made:{item.Delivery}
                  </h1>
                  <h1 className="text-md text-[#838383] text-wrap text-center">
                    revenue : {item.revenue}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLineParent;
