import Image from "next/image";
import React, { useState } from "react";
import Picture2 from "../public/images/img-2.png";
import Logo6 from "../public/logo/logo-6.png";
import Logo7 from "../public/logo/logo-7.svg";
import Logo8 from "../public/logo/logo-8.svg";
import Logo9 from "../public/logo/logo-9.svg";
import Logo10 from "../public/logo/logo-10.png";
import Slider from "./Slider";
import Link from "next/link";

function TopSecondSection() {
  const [weight, setWeight] = useState([100]);
  return (
    <div className="bg-[#fff]">
      <div className="bg-[#FAF9FD] px-5 sm:px-20 lg:px-36 py-10 lg:py-16 loss-to">
        <div className="flex lg:flex-row flex-col w-full text-black">
          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[55%] lg:text-start text-center">
            <h1 className="text-3xl lg:text-5xl font-extrabold py-8 px-3 lg:px-0">
              {`The Weight Loss Wonder Drug That's Changing Lives!`}
            </h1>
            <p className="text-xl mb-10 their-can">
              Semaglutide for weight loss is a medication that can be prescribed
              to individuals looking to manage their weight effectively. Its
              ability to reduce appetite, increase feelings of fullness, and
              support healthier eating habits has made it a valuable tool in
              weight management for many people. However, its use should always
              be discussed and monitored by a healthcare professional.
            </p>
            <Link href="/getStarted">
              <button className="w-full sm:w-fit text-xl text-white font-bold bg-[#522671] rounded-md px-24 sm:px-8 lg:px-20 py-3 mt-5 sm:mt-0">
                GET STARTED
              </button>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end flex-wrap gap-3 lg:gap-4 w-full lg:w-[45%] mt-10 lg:mt-0 lg:pl-10">
            <div className="flex flex-col lg:justify-center lg:items-center text-center w-[150px] lg:w-[225px] h-[170px] lg:h-[230px] bg-secondary rounded-2xl lg:rounded-3xl px-2 lg:px-5 py-5 average-box">
              <h1 className="text-5xl lg:text-7xl text-primary font-extrabold mb-2">
                15%
              </h1>
              <p className="text-sm lg:text-xl bodx">
                Has an average reduction in body weight
              </p>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-center text-center w-[150px] lg:w-[225px] h-[170px] lg:h-[230px] bg-secondary rounded-2xl lg:rounded-3xl px-2 lg:px-4 pt-5 average-box">
              <h1 className="text-5xl lg:text-7xl text-primary font-extrabold mb-2">
                20%
              </h1>
              <p className="text-sm lg:text-xl bodx">
                Of users have noticed a significant reduction in waist size
              </p>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-center text-center w-[150px] lg:w-[225px] h-[170px] lg:h-[230px] bg-secondary rounded-2xl lg:rounded-3xl px-2 lg:px-5 py-5 average-box">
              <h1 className="text-5xl lg:text-7xl text-primary font-extrabold mb-2">
                94%
              </h1>
              <p className="text-sm lg:text-xl bodx">
                Of people have achieved lasting weight loss
              </p>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-center text-center w-[150px] lg:w-[225px] h-[170px] lg:h-[230px] bg-secondary rounded-2xl lg:rounded-3xl px-2 lg:px-5 py-5 average-box">
              <h1 className="text-5xl lg:text-7xl text-primary font-extrabold mb-2">
                9/10
              </h1>
              <p className="text-sm lg:text-xl bodx">
                Of people who tried Semaglutide says this is effective
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full text-black px-5 sm:px-20 lg:px-36 py-10 lg:py-20">
        <div className="w-full lg:w-[50%] flex justify-center items-center relative mr-0 lg:mr-10">
          <Image
            className="object-contain"
            src={Picture2}
            alt="screen"
            width={"100%"}
            height={"100%"}
          />
          <div className="absolute">
            <Image
              className="object-contain"
              src={Logo6}
              alt="screen"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[50%] mt-7 facts">
          <h1 className="text-3xl lg:text-5xl text-center sm:text-start font-extrabold pb-4">
            The Secret to Effective and Safe Weight Loss!
          </h1>
          <p className="text-xl text-center sm:text-start first-m">
            Clinical trials of Semaglutide for weight loss have shown promising
            results. In fact, it has been found to lead to significant weight
            loss in many individuals.
          </p>
          <div className="flex flex-col justify-center px-2 for-weight-pi">
            <div className="flex py-5">
              <Image
                className="object-contain mr-4"
                src={Logo7}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
              <p className="text-xl">Appetite Suppression</p>
            </div>
            <div className="flex pb-5">
              <Image
                className="object-contain mr-4"
                src={Logo8}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
              <p className="text-xl">Stabilizes Blood Sugar Levels</p>
            </div>
            <div className="flex pb-5">
              <Image
                className="object-contain mr-5"
                src={Logo9}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
              <p className="text-xl">Build Healthy Eating Habits</p>
            </div>
          </div>
          <Link href="/getStarted">
            <button className="w-full sm:w-fit text-xl text-white font-bold bg-[#522671] rounded-md px-3 sm:px-8 lg:px-20 py-3 mt-5 sm:mt-0 get-sxx">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full text-black px-5 sm:px-20 lg:px-36 py-10 lg:py-20 thessss">
        <div className="w-full lg:w-[40%]">
          <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-start pb-5">
            {`There's`} a reason why everyone is talking about{" "}
            <span className=" text-primary border-b border-primary color-x">
              the slimlab program
            </span>
            .<p>It works.</p>
          </h1>
          <p className="text-xl bg-secondary rounded-md lg:mr-5 p-2 slimlab">
            On average, people on the slimlab program lose 15% of their weight
            in a year or less*.
          </p>
        </div>
        <div className="flex flex-col justify-end items-center w-full lg:w-[60%] gap-5 lrm-sm">
          <p className="tracking-widest font-semibold text-lg mt-10 lg:mt-0 vcmcx">
            ENTER YOUR CURRENT WEIGHT
          </p>
          <button className="w-fit text-2xl text-black font-bold bg-white rounded-md border px-20 lg:px-14 py-2">
            {weight[0]}lb
          </button>
          <div className="mr-5 w-[90%] my-5">
            <Slider setWeight={setWeight} weight={weight} />
          </div>
          <div className="w-full lg:w-[50%] bg-secondary p-2 text-center rounded-full">
            <p className="text-sm tracking-widest font-semibold pb-2 pt-4">
              YOUR PREDICTED WEIGHT LOSS
            </p>
            <h1 className="text-5xl lg:text-6xl text-primary font-extrabold mb-2">
              {Math.ceil(weight[0] * 0.2)}lb
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSecondSection;
