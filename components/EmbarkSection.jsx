import React from "react";
import Image from "next/image";
import Picture7 from "../public/images/img-7.png";
import Link from "next/link";

export default function EmbarkSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-primary overflow-hidden rounded-3xl mx-5 sm:mx-20 lg:mx-40 my-10 lg:my-20 ">
      <div className="w-full lg:w-[50%] relative m_xc">
        <Image
          className="object-contain rounded-3xl"
          src={Picture7}
          alt="screen"
          width={"100%"}
          height={"100%"}
        />
        <div className="absolute w-full lg:w-40 h-20 lg:h-[100%] bottom-0 lg:right-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-primary" />
      </div>
      <div className="w-full lg:w-[50%] bg-primary text-white px-5 lg:px-10 b_wq">
        <h1 className="text-4xl text-center lg:text-start font-bold pb-5 mt-5 lg:mt-0">
          Embark on your weight loss transformation today
        </h1>
        <p className="text-center lg:text-start text-xl lg:pr-10">
          Seize the opportunity to change your life. Take the first step towards
          a healthier, happier you by starting your weight loss journey today
          with SLIMLAB!
        </p>
        <Link href="/getStarted">
          <button className="w-full sm:w-fit text-xl text-primary font-bold bg-white rounded-md px-3 sm:px-8 lg:px-14 py-2 mt-5 mb-10 lg:mb-0">
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
  );
}
