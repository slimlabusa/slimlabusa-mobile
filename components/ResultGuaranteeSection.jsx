import Image from "next/image";
import React from "react";
import Logo12 from "../public/logo/logo-12.svg";
import Logo13 from "../public/logo/logo-13.png";
import Logo14 from "../public/logo/logo-14.png";
import Logo15 from "../public/logo/logo-15.png";
import Logo16 from "../public/logo/logo-16.png";
import Logo17 from "../public/logo/logo-17.svg";
import Logo18 from "../public/logo/logo-18.svg";
import Logo19 from "../public/logo/logo-19.svg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

export default function ResultGuaranteeSection() {
  return (
    <div className="bg-gradient-to-t lg:from-white from-transparent lg:to-white to-secondary lg:bg-white text-black px-5 sm:px-20 lg:px-40 py-5 lg:py-20 wmx-x">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-4xl lg:text-5xl font-extrabold pb-5">
            <span className="text-primary">RESULTS GUARANTEED</span>
            <p>OR YOUR MONEY BACK</p>
          </h1>
          <div className="lg:block hidden relative">
            <div className="bg-gradient-to-l from-transparent from-5%  via-[#DFD1FF] to-transparent lg:py-24">
              <Image
                className="object-contain z-20"
                src={Logo12}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <p className=" text-base resultplh">
            We have immense confidence in our Metabolic Reset program, to the
            extent that we offer a money-back guarantee: {`you'll`} achieve a
            minimum weight loss of 10% of your body weight or your investment
            returned (see terms for details).
          </p>
          <div className="block lg:hidden">
            <Image
              className="object-contain z-20"
              src={Logo12}
              alt="screen"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden mt-10 cPcs">
            <div className="bg-[#FFEFAD] text-center text-sm lg:text-base py-2">
              <p>
                Starts at just <span className="font-semibold">$99/mo</span> -
                no insurance needed
              </p>
            </div>

            <h1 className=" text-primary text-2xl font-medium text-center px-10 my-5 bPxxs">
              Unlock the Ultimate Weight Loss Program -{" "}
              <span className="font-bold vCPs">{`It's`} Yours!</span>
            </h1>

            <div className="px-5 pt-2 pb-5">
              <h1 className="font-semibold">{`What's`} in the Package?</h1>
              <div className="mt-3 ml-2 bcmx">
                <p className="flex items-center py-1 text-base">
                  <Image
                    className="object-contain mr-3"
                    src={Logo13}
                    alt="screen"
                    width={"100%"}
                    height={"100%"}
                  />
                  Access to Wegovy® or Ozempic®
                </p>
                <p className="flex items-center py-1 text-base">
                  <Image
                    className="object-contain mr-3"
                    src={Logo14}
                    alt="screen"
                    width={"100%"}
                    height={"100%"}
                  />
                  Insurance coverage support
                </p>
                <p className="flex items-center py-1 text-base">
                  <Image
                    className="object-contain mr-3"
                    src={Logo15}
                    alt="screen"
                    width={"100%"}
                    height={"100%"}
                  />
                  Telehealth doctor appt
                </p>
                <p className="flex items-center py-1 text-base">
                  <Image
                    className="object-contain mr-3"
                    src={Logo16}
                    alt="screen"
                    width={"100%"}
                    height={"100%"}
                  />
                  Dietician guidance
                </p>
                <p className="flex items-center py-1 text-base">
                  <Image
                    className="object-contain mr-3"
                    src={Logo17}
                    alt="screen"
                    width={"100%"}
                    height={"100%"}
                  />
                  Metabolic test
                </p>
                <p className="text-xs italic text-gray-500 ml-8 pr-10 pb-1">
                  Includes custom in-depth metabolic results and type booklet
                </p>
                <p className="flex items-center py-1 text-base">
                  <Image
                    className="object-contain mr-3"
                    src={Logo18}
                    alt="screen"
                    width={"100%"}
                    height={"100%"}
                  />
                  <span className="Weekly">
                    Weekly updated meal plan based on metabolism
                  </span>
                </p>
                <p className="flex items-center py-1 text-base">
                  <Image
                    className="object-contain mr-3"
                    src={Logo19}
                    alt="screen"
                    width={"100%"}
                    height={"100%"}
                  />
                  Daily nutrition curriculum
                </p>
              </div>
              <Link href="/getStarted">
                <button className="flex justify-center w-full text-lg sm:text-lg text-white font-bold bg-[#522671] rounded-md px-3 sm:px-8 lg:px-14 py-5 lg:py-3 mt-5">
                  GET STARTED - $99
                  <MdOutlineArrowRightAlt size={30} />
                </button>
              </Link>
              <p className=" text-center text-xs italic text-gray-500 mt-3 px-5">
                The cost of the SLIMLAB Program does not cover medication
                expenses. However, rest assured, our dedicated insurance
                concierge partners diligently explore all avenues to assist you
                in obtaining the necessary coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="lg:text-center pt-10 lg:pt-20 px-5 lg:px-0 restsss">
        Wegovy is FDA-approved for weight loss. Ozempic is FDA-approved for type
        2 diabetes treatment, but may be prescribed for weight loss.
      </p>
    </div>
  );
}
