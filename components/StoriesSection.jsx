import React, { useRef } from "react";
import Image from "next/image";
import { GrStar } from "react-icons/gr";
import Picture3 from "../public/images/img-3.png";
import Picture4 from "../public/images/img-4.png";
import Picture5 from "../public/images/img-5.png";
import Picture6 from "../public/images/img-6.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

export default function StoriesSection() {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 250;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="flex flex-col items-center text-black bg-white px-5 sm:px-20 lg:px-36 pt-10 lg:pt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center ">
        <div className="w-full lg:w-[65%]">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-start text-black font-bold pb-5 px-5 lg:px-0">
            Thousands Of People Are{" "}
            <span className="text-[#8C62EC]">Losing Weight</span> With The
            Slimlab Program
          </h1>
          <div className="flex mt-5 lg:mt-0">
            <p className="text-lg achievingasa">
              Experience real results! Join the thriving community of thousands
              who are successfully shedding pounds and achieving their weight
              loss goals with SLIMLAB.
            </p>
            <div className="flex lg:hidden flex-col items-center pl-0">
              <h1 className="text-8xl font-bold text-primary">4.8</h1>
              <div className="flex -mt-2">
                <GrStar size={30} className="text-[#FFD600]" />
                <GrStar size={30} className="text-[#FFD600]" />
                <GrStar size={30} className="text-[#FFD600]" />
                <GrStar size={30} className="text-[#FFD600]" />
                <GrStar size={30} className="text-[#FFD600]" />
              </div>
              <p className="text-xl">1,125 Reviews</p>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden flex-col justify-end items-center w-[15%]">
          <h1 className="text-8xl leading-none font-bold text-primary">4.8</h1>
          <div className="flex -mt-2">
            <GrStar size={30} className="text-[#FFD600]" />
            <GrStar size={30} className="text-[#FFD600]" />
            <GrStar size={30} className="text-[#FFD600]" />
            <GrStar size={30} className="text-[#FFD600]" />
            <GrStar size={30} className="text-[#FFD600]" />
          </div>
          <p className="text-xl">1,125 Reviews</p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-scroll overflow-y-hidden flex flex-no-wrap gap-3 lg:gap-5 pb-5 lg:pb-0 mt-10 mb-5 lg:mt-10"
      >
        <Image
          className="object-contain rounded-3xl"
          src={Picture3}
          alt="screen"
          width={"100%"}
          height={"100%"}
        />
        <Image
          className="object-contain rounded-3xl"
          src={Picture4}
          alt="screen"
          width={"100%"}
          height={"100%"}
        />
        <Image
          className="object-contain rounded-3xl"
          src={Picture5}
          alt="screen"
          width={"100%"}
          height={"100%"}
        />
        <Image
          className="object-contain rounded-3xl"
          src={Picture6}
          alt="screen"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="flex w-full lg:hidden justify-around mb-5 b_gs">
        <button
          className="bg-primary text-white rounded-3xl px-3 py-1"
          onClick={handleScrollLeft}
        >
          <FaArrowLeftLong size={35} />
        </button>
        <button
          className="bg-primary text-white rounded-3xl px-3 py-1"
          onClick={handleScrollRight}
        >
          <FaArrowRightLong size={35} />
        </button>
      </div>
      <button className="text-xl tracking-widest text-primary text-center font-bold border-b border-primary mt-5">
        SEE MORE SUCCESS STORIES
      </button>
    </div>
  );
}
