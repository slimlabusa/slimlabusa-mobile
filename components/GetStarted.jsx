import React, { useState } from "react";
import { BsFillCircleFill, BsCircle } from "react-icons/bs";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaMale, FaFemale } from "react-icons/fa";
import { LiaTransgenderSolid } from "react-icons/lia";
import Image from "next/image";
import Picture19 from "../public/images/img-19.svg";
import axios from "axios";

export default function GetStarted() {
  const [options, setOptions] = useState([
    {
      option: "Lose Weight",
      select: true,
    },
    {
      option: "Help get insurance to cover GLP-1 Medication",
      select: false,
    },
    {
      option: "Increase confidence about my appearance",
      select: false,
    },
    {
      option: "Increase my ability to be active",
      select: false,
    },
    {
      option: "None of the above",
      select: false,
    },
  ]);
  const [gender, setGender] = useState("men");
  const [page, setPage] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleOptionClick = (index) => {
    const updatedOptions = [...options];
    updatedOptions.forEach((option) => (option.select = false));
    updatedOptions[index].select = true;
    setOptions(updatedOptions);
  };

  const handlePageThree = () => {
    if (firstName !== "") {
      setPage(4);
    }
  };

  const handlePageFour = () => {
    if (email !== "") {
      setPage(5);
    }
  };

  const handlePageFive = () => {
    axios.post("/api/shopify-api", {
      customer: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: "customer_password",
        password_confirmation: "customer_password",
        metafields: [
          {
            key: "gender",
            namespace: "custom",
            value: JSON.stringify([gender]),
            type: "list.single_line_text_field",
          },
          {
            key: "height",
            namespace: "custom",
            value: height,
            type: "number_decimal",
          },
          {
            key: "weight",
            namespace: "custom",
            value: weight,
            type: "number_decimal",
          },
        ],
      },
    });
    if (height > 0 && weight > 0) {
      setPage(6);
    }
  };

  return (
    <div className="bg-white text-black px-5 sm:px-20 lg:px-40">
      <div className="flex justify-between relative py-10">
        <h1 />
        <h1 className=" text-xl font-medium text-center pl-5">GOALS</h1>
        <h1 className="text-xl font-medium text-center">
          {page > 5 ? 5 : page}/5
        </h1>
      </div>
      <div className=" pb-10">
        <div className="flex items-center justify-between border-2 border-gray-400 rounded-full h-3">
          <BsFillCircleFill size={25} className="text-[#841CCD]" />
          <BsFillCircleFill
            size={25}
            className={`${page >= 2 ? "text-[#841CCD]" : "text-gray-300"}`}
          />
          <BsFillCircleFill
            size={25}
            className={`${page >= 3 ? "text-[#841CCD]" : "text-gray-300"}`}
          />
          <BsFillCircleFill
            size={25}
            className={`${page >= 4 ? "text-[#841CCD]" : "text-gray-300"}`}
          />
          <BsFillCircleFill
            size={25}
            className={`${page >= 5 ? "text-[#841CCD]" : "text-gray-300"}`}
          />
        </div>
      </div>

      {page === 1 && (
        <>
          <div>
            <h1 className="lg:block hidden text-4xl sm:text-5xl text-center font-bold pt-6 pb-3">
              What Do You Want More
              <p>Than Anything Right Now?</p>
            </h1>
            <h1 className="block lg:hidden text-4xl sm:text-5xl text-center font-bold pt-6 pb-3">
              What Do You Want More Than Anything Right Now?
            </h1>
            <p className="text-lg text-center">
              (We can help with all of these. For now, pick the most important
              to you.)
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center py-10">
            {options?.map((item, index) => (
              <div
                onClick={() => handleOptionClick(index)}
                className="flex w-full justify-center"
                key={index}
              >
                <div
                  className={`flex items-center w-full lg:w-[50%] border rounded-xl px-4 py-2.5 mb-3 ${
                    item.select
                      ? "bg-primary border-primary text-white"
                      : "bg-white text-black border-gray-400"
                  }`}
                >
                  <div>
                    {item.select ? (
                      <BiSolidCheckCircle size={20} />
                    ) : (
                      <BsCircle size={20} className="text-gray-300" />
                    )}
                  </div>
                  <p className="ml-5 text-lg font-medium">{item.option}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex justify-center py-10">
            <button
              className="w-full sm:w-fit text-xl text-white font-bold bg-[#522671] rounded-md px-3 sm:px-8 lg:px-20 py-2 mt-5 sm:mt-0"
              onClick={() => setPage(2)}
            >
              NEXT
            </button>
          </div>
        </>
      )}

      {page === 2 && (
        <div className="py-20">
          <h1 className="lg:block hidden text-4xl sm:text-5xl text-center font-bold pb-3">
            Limited Time Offer:
            <p>$300 off first month of slimlab</p>
            <p>Weight Loss Program!</p>
          </h1>
          <h1 className="block lg:hidden text-4xl sm:text-5xl text-center font-bold pb-3">
            Limited Time Offer: $300 off first month of slimlab Weight Loss
            Program!
          </h1>
          <p className=" text-lg text-center">
            Claim this one-time offer and begin losing weight right away.
          </p>
          <div className=" flex justify-center py-10">
            <button
              className="w-full sm:w-fit text-xl text-white font-bold bg-[#522671] rounded-md px-3 sm:px-8 lg:px-20 py-2 mt-5 sm:mt-0"
              onClick={() => setPage(3)}
            >
              CONTINUE WITH MY OFFER
            </button>
          </div>
        </div>
      )}

      {page === 3 && (
        <div className="py-10">
          <h1 className="text-4xl sm:text-5xl text-center font-bold pb-3">
            Hello, what’s your name?
          </h1>
          <p className="text-lg text-center">
            Claim this one-time offer and begin losing weight right away.
          </p>
          <div className="flex flex-col items-center justify-center pt-5 pb-20">
            <input
              className="flex items-center w-full lg:w-[50%] border bg-white rounded-xl px-4 py-2.5 mb-5 outline-none"
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="flex items-center w-full lg:w-[50%] border bg-white rounded-xl px-4 py-2.5 mb-3 outline-none"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex justify-between py-10">
            <button
              className="flex w-full sm:w-fit text-xl text-gray-500 font-bold px-3 sm:px-8 lg:px-20 py-2 mt-5 sm:mt-0"
              onClick={() => setPage(2)}
            >
              {`< PREV`}
            </button>
            <button
              className={`${
                firstName === ""
                  ? "text-white bg-gray-300"
                  : "bg-[#522671] text-white"
              }  w-full sm:w-fit text-xl font-bold rounded-md px-3 sm:px-8 lg:px-20 py-2 mt-5 sm:mt-0`}
              onClick={handlePageThree}
              disabled={firstName === ""}
            >
              NEXT
            </button>
          </div>
        </div>
      )}

      {page === 4 && (
        <div className="py-10">
          <h1 className="text-4xl sm:text-5xl text-center font-bold pb-3">
            Great{" "}
            <span className="text-primary">{`${firstName} ${lastName}`}</span>,
            What’s your email?
          </h1>
          <p className="text-lg text-center">
            We’ll use this to send you your recommendation, so you can reference
            it later.
          </p>
          <div className="flex flex-col items-center justify-center pt-5 pb-20">
            <input
              className="flex items-center w-full lg:w-[50%] border bg-white rounded-xl px-4 py-2.5 mb-5 outline-none"
              placeholder="Email Address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between py-10">
            <button
              className="flex w-full sm:w-fit text-xl text-gray-500 font-bold px-3 sm:px-8 lg:px-20 py-2 mt-5 sm:mt-0"
              onClick={() => setPage(3)}
            >
              {`< PREV`}
            </button>
            <button
              onClick={handlePageFour}
              className={`${
                email === ""
                  ? "text-white bg-gray-300"
                  : "bg-[#522671] text-white"
              }  w-full sm:w-fit text-xl font-bold rounded-md px-3 sm:px-8 lg:px-20 py-2 mt-5 sm:mt-0`}
              disabled={email === ""}
            >
              SEE IF YOU ARE ELIGIBLE
            </button>
          </div>
        </div>
      )}

{page === 5 && (
        <div className="flex flex-col items-center py-10">
          <h1 className="text-4xl sm:text-5xl text-center font-bold pb-3">
            What’s your Gender and bMI?
          </h1>
          <p className="text-lg text-center w-full lg:w-[60%]">
            We’d love to know so we can create the best personalized plan for
            you. Your gender, height and weight are the building blocks of your
            health journey.
          </p>
          <div className="flex flex-col items-center lg:items-start justify-center pt-5 pb-10">
            <h1 className="text-xl font-bold">Gender:</h1>
            <div className="w-[90%] lg:w-[368px] flex flex-wrap justify-between gap-2 lg:gap-4 mt-4">
              <div
                className={`w-full lg:w-44 flex items-center justify-center lg:justify-start border rounded-lg px-5 py-3 cursor-pointer ad_vss ${
                  gender === "Male" ? "text-white bg-primary" : "text-gray-400"
                }`}
                onClick={() => setGender("Male")}
              >
                <div className="flex items-center just_clas">
                  <FaMale size={50} className="mr-5 started_icon" />
                  <p className="font-semibold">Male</p>
                </div>
              </div>
              <div
                className={`w-full lg:w-44 flex items-center justify-center lg:justify-start border rounded-lg px-5 py-3 cursor-pointer ad_vss ${
                  gender === "Female"
                    ? "text-white bg-primary"
                    : "text-gray-400"
                }`}
                onClick={() => setGender("Female")}
              >
                <div className="flex items-center just_clas">
                  <FaFemale size={50} className="mr-5 started_icon" />
                  <p className=" font-semibold cust_text">Female</p>
                </div>
              </div>
              <div
                className={`w-full lg:w-44 flex items-center justify-center lg:justify-start border rounded-lg px-5 py-3 cursor-pointer ad_vss ${
                  gender === "M>F Transgender"
                    ? "text-white bg-primary"
                    : "text-gray-400"
                }`}
                onClick={() => setGender("M>F Transgender")}
              >
                <div className="flex items-center just_clas">
                  <LiaTransgenderSolid
                    size={50}
                    className="mr-2 started_icon"
                  />
                  <h1 className="font-semibold text-center cust_text">
                    {`M>F`}
                    <p>Transgender</p>
                  </h1>
                </div>
              </div>
              <div
                className={`w-full lg:w-44 flex items-center justify-center lg:justify-start border rounded-lg px-5 py-3 cursor-pointer ad_vss ${
                  gender === "F>M Transgender"
                    ? "text-white bg-primary"
                    : "text-gray-400"
                }`}
                onClick={() => setGender("F>M Transgender")}
              >
                <div className="flex items-center just_clas">
                  <LiaTransgenderSolid
                    size={50}
                    className="mr-2 rotate-90 started_icon"
                  />
                  <h1 className="font-semibold text-center cust_text">
                    {`F>M`}
                    <p>Transgender</p>
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-bold my-4">Height And Weight:</h1>
            <div className="w-[90%] lg:w-[368px] flex flex-wrap justify-between gap-4">
              <div className="w-full lg:w-44 flex items-center justify-center lg:justify-start border text-gray-400 rounded-lg px-2 py-1">
                <input
                  type="text"
                  placeholder="Height"
                  className="bg-white text-black w-full lg:w-28 border-r outline-none"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <p className="font-semibold ml-3">cm</p>
              </div>
              <div className="w-full lg:w-44 flex items-center justify-center lg:justify-start border text-gray-400 rounded-lg px-2 py-1">
                <input
                  type="text"
                  placeholder="Weight"
                  className="bg-white text-black w-full lg:w-28 border-r outline-none"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <p className="font-semibold ml-3">lbs</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between py-10">
            <button
              className="flex w-full sm:w-fit text-xl text-gray-500 font-bold px-3 sm:px-8 lg:px-20 py-2 mt-5 sm:mt-0"
              onClick={() => setPage(4)}
            >
              {`< PREV`}
            </button>
            <button
              onClick={handlePageFive}
              className={`${
                height > 0 && weight > 0
                  ? "bg-[#522671] text-white"
                  : "text-white bg-gray-300"
              }  w-full sm:w-fit text-xl font-bold rounded-md px-3 sm:px-8 lg:px-20 py-2 mt-5 sm:mt-0`}
              disabled={height < 0 && weight < 0}
            >
              NEXT
            </button>
          </div>
        </div>
      )}

      {page === 6 && (
        <div className="flex flex-col items-center py-10">
          <h1 className="lg:block hidden text-4xl sm:text-5xl text-center font-bold pb-3">
            <span className=" text-primary">Congratulations</span>,{" "}
            {`${firstName} ${lastName}`}!<p>Slimlab was created for</p>
            <p>people just like you.</p>
          </h1>
          <h1 className="block lg:hidden text-4xl sm:text-5xl text-center font-bold pb-3">
            <span className=" text-primary">Congratulations</span>,{" "}
            {`${firstName} ${lastName} `} !Slimlab was created for people just
            like you.
          </h1>
          <div className="flex w-[85%] lg:w-[70%] bg-secondary rounded-t-2xl p-5 lg:p-10 mt-10 lg:mt-20">
            <div className="hidden lg:block lg:w-[40%]" />
            <h1 className="w-full lg:w-[55%] text-2xl sm:text-3xl text-center font-bold pb-3">
              Join countless of people who have lost an average of
              <span className="text-primary"> 20% of their body fat</span> with
              the slimlab program
            </h1>
          </div>
          <div className="hidden lg:block relative w-full">
            <div className="absolute -bottom-40 left-28">
              <Image
                className="object-contain"
                src={Picture19}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-[#8C62EC] to-[#B862EC] rounded-3xl px-5 lg:px-10 pt-10 lg:pt-32 pb-10">
            <h1 className="lg:block hidden text-2xl sm:text-3xl font-bold text-white">
              SlimLab is a 6-month plan,
              <p>with 3 ways to pay</p>
            </h1>
            <h1 className="block lg:hidden text-2xl sm:text-3xl font-bold text-white">
              SlimLab is a 6-month plan, with 3 ways to pay
            </h1>
            <div className="mt-10">
              <div className="flex flex-col border-4 border-[#FB897D] bg-white rounded-xl px-3 lg:px-16 py-5 mb-5">
                <div className="flex justify-between text-xl font-semibold">
                  <h1>In-Full</h1>
                  <h1>Pay only $99</h1>
                </div>
                <div className="flex justify-between">
                  <p>Pay $594 today</p>
                  <p>per month</p>
                </div>
              </div>
              <div className="flex flex-col opacity-50 rounded-xl bg-white px-3 lg:px-16 py-5 mb-5">
                <div className="flex justify-between text-xl font-semibold">
                  <h1>Quarterly</h1>
                  <h1>Pay only $116</h1>
                </div>
                <div className="flex justify-between">
                  <p>Pay $348 today</p>
                  <p>per month</p>
                </div>
              </div>
              <div className="flex flex-col opacity-50 rounded-xl bg-white px-3 lg:px-16 py-5 mb-10">
                <div className="flex justify-between text-xl font-semibold">
                  <h1>Monthly</h1>
                  <h1>Pay only $129</h1>
                </div>
                <div className="flex justify-between">
                  <p>Pay $128 today</p>
                  <p>per month</p>
                </div>
              </div>
              <div className=" flex justify-center">
                <button className="border-4 border-white text-white text-3xl font-bold px-8 py-3">
                  SELECT PLAN
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl text-center font-bold pb-3 mt-10 lg:mt-20 mb-5">
            slimlab.
          </h1>
          <div className="flex flex-col lg:flex-row w-full rounded-2xl bg-secondary p-10  lg:p-20 mb-10 lg:mb-20">
            <div className="lg:block hidden w-[50%]" />
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="text-primary">Save $180</span> by paying in full
              today!
            </h1>
            <div className="block lg:hidden -rotate-2">
              <Image
                className="object-contain"
                src={Picture19}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
          <div className="lg:block hidden relative w-full">
            <div className="absolute -bottom-10 -left-3 -rotate-2">
              <Image
                className="object-contain"
                src={Picture19}
                alt="screen"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
