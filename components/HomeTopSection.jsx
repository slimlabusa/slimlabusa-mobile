import Image from "next/image";
import React, { useRef } from "react";
import Picture1 from "../public/images/img-1.png";
import Logo1 from "../public/logo/logo-1.svg";
import Logo2 from "../public/logo/logo-2.svg";
import Logo3 from "../public/logo/logo-3.svg";
import Logo4 from "../public/logo/logo-4.svg";
import Logo5 from "../public/logo/logo-5.svg";
import Logo20 from "../public/logo/logo-20.svg";
import Layer1 from "../public/layers/layer-1.svg";
import Layer2 from "../public/layers/layer-2.svg";
import Layer3 from "../public/layers/layer-3.svg";
import { FaCheck } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

function TopSection() {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 340;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 340;
    }
  };

  return (
    <div className="bg-white px-5 sm:px-20 lg:px-36 mobile-c">
      <div className="flex justify-center lg:justify-between w-full text-black py-5">
        <div className="flex flex-col justify-center lg:justify-start w-full lg:w-[60%] text-center lg:text-start sm:pr-5">
          <h1 className="text-primary tracking-widest text-lg font-extrabold mt-2 sm:mt-5 FDA">
            THE GAME-CHANGING SOLUTION APPROVED BY THE FDA!
          </h1>
          <h1
            style={{ lineHeight: 1.15 }}
            className="text-4xl sm:text-6xl font-extrabold pt-5 pb-8 px-1 lg:px-0 Fasts"
          >
            No More Diets. No More Gym. A New Way to Fast Weight Loss
          </h1>
          <p className="text-3xl sm:text-5xl font-bold mb-2">
            For only:
            <span className="font-bold text-[#8C62EC] border-b-2 border-[#8C62EC] ml-2 sm:ml-3">
              $99/month
            </span>
          </p>
          <div className="flex flex-col items-start mb-8 pt-5 pr-5 v_xss">
            <h1 className="flex items-center text-start mb-2 lg:mb-5">
              <Image
                className="object-center"
                src={Logo20}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
              <p className="text-sm sm:text-xl font-semibold ml-3 sm:ml-8">
                Lose up to 15% of your body fat in a week
              </p>
            </h1>
            <h1 className="flex items-center text-start mb-2 lg:mb-5">
              <Image
                className="object-center"
                src={Logo20}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
              <p className="text-sm sm:text-xl font-semibold ml-3 sm:ml-8">
                Unlimited Consultations with the best Physicians
              </p>
            </h1>
            <h1 className="flex items-center text-start">
              <Image
                className="object-center"
                src={Logo20}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
              <p className="text-sm sm:text-xl font-semibold ml-3 sm:ml-8">
                Prescription to Semaglutide with 6 weeks of medication
              </p>
            </h1>
          </div>
          <div className="w-full lg:w-[90%] flex flex-col sm:flex-row justify-center items-center sm:items-start">
            <div className="flex">
              <GrStar size={30} className="text-[#FFD600]" />
              <GrStar size={30} className="text-[#FFD600]" />
              <GrStar size={30} className="text-[#FFD600]" />
              <GrStar size={30} className="text-[#FFD600]" />
              <GrStar size={30} className="text-[#FFD600]" />
            </div>
            <p className="text-2xl tracking-wide lg:tracking-widest font-extrabold text-primary mt-2 lg:mt-0 lg:ml-3">
              4.8 OVER 5 STAR REVIEWS
            </p>
          </div>
          <div className="flex">
            <Link
              href="/getStarted"
              className="w-full lg:w-[90%] text-center bg-primary text-white font-extrabold text-3xl rounded-md py-6 my-5"
            >
              GET STARTED
            </Link>
          </div>
          <p className="w-full lg:w-[90%] text-center tracking-widest font-semibold text-sm lg:text-lg vp_x">
            NO HIDDEN FEES. NO INSURANCE REQUIRED
          </p>
        </div>
        <div className="lg:flex hidden justify-end w-[40%]">
          <Image
            className="object-center"
            src={Picture1}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <hr style={{ height: 2 }} className="w-full bg-primary mt-5 lg:mt-16" />
      <div className="pt-8 pb-0 lg:pb-8">
        <h1 className="text-2xl text-center text-black tracking-widest font-extrabold mb-3 lg:mb-0">
          AS SEEN ON
        </h1>
        <div className="flex flex-wrap gap-5 justify-between w-full py-5 px-10 lg:px-20 clients">
          <Image
            className="object-contain"
            src={Logo1}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <Image
            className=" object-contain"
            src={Logo2}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <Image
            className=" object-contain"
            src={Logo3}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <Image
            className=" object-contain"
            src={Logo4}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <Image
            className=" object-contain"
            src={Logo5}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <h1 className="text-black text-3xl lg:text-5xl font-extrabold text-center px-10 py-10 lose-up">
          Lose up to 15% of your body weight in 3 steps
        </h1>
        <div
          ref={scrollRef}
          className="overflow-x-scroll overflow-y-hidden flex justify-between flex-no-wrap pb-5 lg:pb-0 b_sw"
        >
          <div className="min-w-[340px] lg:w-[30%] flex flex-col justify-center items-center c_c">
            <Image
              className="object-contain"
              src={Layer1}
              alt="screen"
              width={"100%"}
              height={"100%"}
            />
            <div className="flex justify-center items-center n-cxs">
              <p className="text-[9rem] leading-none text-primary font-extrabold mr-3 mt-5">
                1
              </p>
              <div className="">
                <h1 className="text-2xl font-bold text-primary">
                  Schedule a consultation
                </h1>
                <p className=" text-xl text-black mt-1">
                  Schedule a consultation with our experts for personalized
                  guidance.
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-[340px] lg:w-[30%] flex flex-col justify-center items-center c_c">
            <Image
              className="object-contain mb-4"
              src={Layer2}
              alt="screen"
              width={"100%"}
              height={"100%"}
            />
            <div className="flex justify-center items-center mt-4 n-cxs">
              <p className="text-[9rem] leading-none text-primary font-bold mr-3 ml-2">
                2
              </p>
              <div className="">
                <h1 className=" text-2xl text-primary font-bold">
                  Get a Prescription
                </h1>
                <p className=" text-xl text-black mt-1">
                  Our team of healthcare experts can assess your unique needs
                  and prescribe Semaglutide.
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-[340px] lg:w-[30%] flex flex-col justify-center items-center c_c">
            <Image
              className="object-contain -pt-14"
              src={Layer3}
              alt="screen"
              width={"100%"}
              height={"100%"}
            />
            <div className="flex justify-center items-center mt-3 n-cxs">
              <p className="text-[9rem] leading-none text-primary font-bold mr-2">
                3
              </p>
              <div className="">
                <h1 className=" text-2xl text-primary font-bold">
                  Purchase Your Meds
                </h1>
                <p className=" text-xl text-black mt-1">
                  Once prescribed, easily purchase your Semaglutide medication
                  through our secure and convenient platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden justify-around b_gs">
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
        <div className="flex flex-col sm:flex-row justify-center items-center py-16 overflow-hidden q_a">
          <p className="text-black text-center sm:text-start text-4xl font-extrabold sm:mr-10 px-5 sm:px-0">
            Want to start losing weight?
          </p>
          <Link href="/getStarted">
            <button className="w-full sm:w-fit text-xl text-white font-bold bg-[#522671] rounded-md px-24 sm:px-8 lg:px-20 py-3 mt-5 sm:mt-0">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
