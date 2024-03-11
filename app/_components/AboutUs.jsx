"use client";
import React from "react";
import { useRouter } from "next/navigation";
const AboutUs = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/about-us");
  };
  return (
    <>
      <div className={"xl:w-[89%]"}>
        <div className={"md:hidden xl:block"}>
          We are logistics company based in{" "}
          <a className={"font-bold italic"}>BANGALORE</a>
        </div>

        <div>
          <p className={"xl:my-12 md:mb-8 md:mt-0"}>
            Established in 2015, LCM stands out as a premier midsize delivery
            and logistics company headquartered in Bangalore. Over the years, we
            have cultivated strong, enduring partnerships with esteemed
            businesses such as ajjp, Jio Mart, Reliance Digital, Indian Posts,
            and more. Our commitment to excellence has propelled us towards
            remarkable annual growth.
          </p>
          <p>
            In addition to our delivery services, we specialize in warehousing
            and proficiently manage various warehouse facilities. With a
            dedicated team of over 60+ employees, we oversee operations for
            businesses under contract, boasting a fleet of 140+ owned vehicles
            and an additional 500+ vehicles available on call.
          </p>
        </div>
        <div className={"w-[100%] my-8 flex justify-between"}>
          <div>
            <p className={"md:text-4xl text-2xl"}>
              <a className={"font-bold md:text-6xl text-3xl"}>15</a>Yrs
            </p>
            <p>Entrepreneurial stint</p>
          </div>
          <div>
            <p className={"md:text-4xl text-2xl"}>
              <a className={"font-bold md:text-6xl text-3xl"}>25</a>k
            </p>
            <p>Serving over pincode</p>
          </div>
        </div>
        <button
          className={"text-white bg-black p-4 rounded-2xl ml-[35%] md:ml-0"}
          onClick={()=>handleClick()}
        >
          Learn more
        </button>
      </div>

      <div className={"h-[100%] mt-4 md:mt-0  relative"}>
        <img
          src={"bubblebg.png"}
          alt={""}
          className={
            "absolute h-40 w-40 -z-10 2xl:bottom-28 md:bottom-12 xl:-right-20 md:right-2 hidden md:block"
          }
        />
        <img src={"./Aboutus_vdo.png"} alt={"img"} />
      </div>
    </>
  );
};

export default AboutUs;
