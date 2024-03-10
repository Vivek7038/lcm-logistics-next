import ProfileCard from "@/app/_components/ProfileCard";
import React from "react";

const page = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] min-h-[100dvh] flex-col hide-scrollbar  ">
      <div className="bg-[url('../public/Bg-home.png')] bg-cover flex flex-col justify-center pt-[30dvh] min-w-[100dvw] min-h-[80dvh] ">
        <h1 className="md:text-6xl text-4xl text-center text-white font-bold">
          About Us
        </h1>
      </div>
      {/*  seperator*/}
      <div className="flex flex-col px-10 md:px-20 ">
        {/* about us quote */}
        <div className="w-full flex flex-col px-50 justify-center items-center">
          <div className="max-w-[70%] my-5">
            <h1 className="md:text-6xl text-4xl  text-black font-bold mb-6">
              Our Misson and Vision
            </h1>
            <div>
              <p className="relative text-black ">
                Lorem ipsum dolor sit amet consectetur. Lorem in urna euismod
                nec urna pretium purus commodo ultricies. Ultricies sapien enim
                a urna phasellus interdum turpis egestas eget. Diam sit dui ut
                aenean nunc viverra tellus elementum aliquam. Elementum
                tincidunt urna commodo sapien eget elementum
              </p>
            </div>
          </div>
        </div>

        {/* team */}
        <div className="flex flex-col  gap-y-8 gap-x-5 items-start pt-[10dvh] max-w-[100dvw]">
          <div className="w-full max-w-[70%] ">
            <h1 className="md:text-6xl text-4xl  text-black font-bold my-3">
              Meet The Team
            </h1>
            <p className="text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          {/* profile cards */}
          <div className="flex flex-row  flex-wrap md:flex-wrap gap-x-5 max-w-[100dvw]">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
