"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "./TimelineCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { TimeLineData } from "../data";
const Timeline = () => {
  return (
    <div>
      <VerticalTimeline lineColor={"black"}>
       {TimeLineData.map((item,index)=>(
               <VerticalTimelineElement
               className='vertical-timeline-element--work  dark:bg-dark_bg '
               contentStyle={{}}
               contentArrowStyle={{}}
               iconStyle={{ background: "white",transform: index % 2 === 0 ? "scaleX(-1)" : "none" }}
               visible={true}
               icon={<LocalShippingIcon />}
               style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "900px", width: "100%" }}
               key={index}
             >
               <TimelineCard item={item}/>
               
             </VerticalTimelineElement>
       ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
