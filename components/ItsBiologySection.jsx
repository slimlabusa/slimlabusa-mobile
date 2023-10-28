import React from "react";
import Image from "next/image";
import Picture8 from "../public/images/img-8.png";
import Logo11 from "../public/logo/logo-11.png";
import { RiArrowRightLine } from "react-icons/ri";

export default function ItsBiologySection() {
  return (
    <div className="w-full bg-gradient-to-t from-[#DFD1FF] to-secondary lg:to-secondary lg:from-transparent text-black px-5 sm:px-20 lg:px-36 pt-8 lg:pt-20 mmmc_c">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center w-full lg:w-[50%] text-center lg:border-b lg:border-r border-primary px-5 lg:px-10 py-10">
          <h1 className="w-80 text-4xl font-bold pb-5 biologyx">
            It’s about <span className="text-primary">biology,</span> not
            willpower
          </h1>
          <p className="text-xl diets">
            Traditional diets don’t work because nearly 70% of weight is
            genetically determined. Through medication you can work with your
            body rather than against it - to create safe and long lasting weight
            loss results.
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-[50%] lg:border-b border-primary lg:px-10 pb-10">
          <Image
            className="object-contain"
            src={Picture8}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className="flex flex-wrap v_shx">
        <div className="flex flex-col w-[160px] lg:w-[25%] lg:border-b lg:border-r border-primary p-3 lg:p-10 bxss">
          <Image
            className="object-contain"
            src={Logo11}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <h1 className="text-base lg:text-2xl font-bold text-primary pt-2 pb-5 lg:pr-5 pr-0 mb-auto my-4 lg:my-2">
            15% Weight Lost on Average
          </h1>
          <button className="flex items-center text-base font-bold text-primary lg:mt-auto">
            <p className="mr-3 lg:text-lg text-base Now-sx">Start Now</p>
            <RiArrowRightLine size={25} />
          </button>
        </div>
        <div className="flex flex-col w-[160px] lg:w-[25%] lg:border-b lg:border-r border-primary p-3 lg:p-10 bxss">
          <Image
            className="object-contain"
            src={Logo11}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <h1 className="text-base lg:text-2xl font-bold text-primary pt-2 pb-5 mb-auto my-4 lg:my-2">
            Doctor-Prescribed GLP-1 Medication
          </h1>
          <button className="flex items-center text-base font-bold text-primary lg:mt-auto">
            <p className="mr-3 lg:text-lg text-base Now-sx">Start Now</p>
            <RiArrowRightLine size={25} />
          </button>
        </div>
        <div className="flex flex-col w-[160px] lg:w-[25%] lg:border-b lg:border-r border-primary p-3 lg:p-10 bxss">
          <Image
            className="object-contain"
            src={Logo11}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <h1 className="text-base lg:text-2xl font-bold text-primary pt-2 pb-5 mb-auto my-4 lg:my-2">
            Personalized Diet Program
          </h1>
          <button className="flex items-center text-base font-bold text-primary lg:mt-auto">
            <p className="mr-3 lg:text-lg text-base Now-sx">Start Now</p>
            <RiArrowRightLine size={25} />
          </button>
        </div>
        <div className="flex flex-col w-[160px] lg:w-[25%] lg:border-b border-primary px-3 py-3 lg:px-6 lg:py-10 bxss">
          <Image
            className="object-contain"
            src={Logo11}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <h1 className="text-base lg:text-2xl font-bold text-primary pt-2 pb-5 mb-auto my-4 lg:my-2">
            1:1 Dietician Telehealth Coaching
          </h1>
          <button className="flex items-center text-base font-bold text-primary lg:mt-auto">
            <p className="mr-3 lg:text-lg text-base Now-sx">Start Now</p>
            <RiArrowRightLine size={25} />
          </button>
        </div>
      </div>
      <p className="py-10 text-xs">
        Take precaution with, and read all warnings concerning, GLP-1s, as they
        may cause serious side effects, including a risk of thyroid c-cell
        tumors. Do not use if you or your family have a history of a type of
        thyroid cancer called MTC (medullary thyroid carcinoma) or MEN 2
        (multiple endocrine neoplasia syndrome).
      </p>
    </div>
  );
}
