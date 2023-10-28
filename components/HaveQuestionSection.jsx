import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function HaveQuestionSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const questionsAnswers = [
    {
      question: "How does Semaglutide help with weight loss?",
      answer: `Semaglutide helps with weight loss by reducing appetite, increasing feelings of fullness, and slowing down gastric emptying. These effects collectively lead to a decrease in calorie intake and promote healthier eating habits.`,
    },
    {
      question: "Is Semaglutide safe for weight loss?",
      answer: `Semaglutide helps with weight loss by reducing appetite, increasing feelings of fullness, and slowing down gastric emptying. These effects collectively lead to a decrease in calorie intake and promote healthier eating habits.`,
    },
    {
      question: "How much weight can I expect to lose with Semaglutide?",
      answer: `Semaglutide helps with weight loss by reducing appetite, increasing feelings of fullness, and slowing down gastric emptying. These effects collectively lead to a decrease in calorie intake and promote healthier eating habits.`,
    },
    {
      question: "Do I need a prescription for Semaglutide for weight loss?",
      answer: `Semaglutide helps with weight loss by reducing appetite, increasing feelings of fullness, and slowing down gastric emptying. These effects collectively lead to a decrease in calorie intake and promote healthier eating habits.`,
    },
    {
      question: "Can I continue taking Semaglutide after I reach goal weight?",
      answer: `Semaglutide helps with weight loss by reducing appetite, increasing feelings of fullness, and slowing down gastric emptying. These effects collectively lead to a decrease in calorie intake and promote healthier eating habits.`,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row text-black bg-[#FAF9FD] px-5 sm:px-20 lg:px-40 py-14 lg:py-20">
      <div className="w-full lg:w-[40%]">
        <h1 className="text-5xl font-bold pb-5 xxxs">
          Have <span className="text-primary">questions?</span>
          <p className="text-5xl font-bold pb-5">
            Get <span className="text-primary">answers.</span>
          </p>
        </h1>
      </div>
      <div className="w-full lg:w-[60%]">
        {questionsAnswers.map((item, index) => (
          <>
            <div className="flex items-center w-full border-b border-[#AED3AE] py-1">
              <h1 className="text-sm lg:text-xl text-primary font-semibold  pl-2 pr-5">
                {item.question}
              </h1>
              <button className="ml-auto p-3" onClick={() => toggleItem(index)}>
                {openItems.includes(index) ? (
                  <AiOutlineMinus size={25} className=" text-primary" />
                ) : (
                  <AiOutlinePlus size={25} className=" text-primary" />
                )}
              </button>
            </div>
            {openItems.includes(index) && (
              <p className="text-sm lg:text-base px-5 lg:px-10 my-3">
                {item.answer}
              </p>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
