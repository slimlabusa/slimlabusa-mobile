import Link from 'next/link';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

function TableSection() {
  return (
    <div className="sm:flex hidden flex-col justify-center items-center text-black bg-[#FAF9FD] px-5 sm:px-20 lg:px-40 py-20">
      <h1 className="text-4xl lg:text-5xl font-bold text-black text-center pb-5">
        See Why People Choose <span className="text-primary">Slimlab</span> As
        Their Go-To-Choice For <span className="text-primary">Semaglutide</span>
      </h1>
      <div className="w-full mt-5">
        <div className="flex w-full text-center">
          <div className=" w-[35%]" />
          <div className="w-[20%] text-3xl text-black font-bold">
            slimlab.
          </div>
          <div className="w-[20%] text-2xl text-gray-500 font-bold">
            Clinic
          </div>
          <div className="w-[20%] text-2xl text-gray-500 font-bold">
            Other Brands
          </div>
        </div>
        <div className="flex flex-col w-full mt-5">
          <div className="flex w-full text-center text-xl font-bold py-4">
            <div className="w-[35%] text-start pl-10 text-black font-normal">
              Appointment wait time
            </div>
            <div className=" w-[20%] text-primary">1 day</div>
            <div className=" w-[20%] text-gray-500">3 Months</div>
            <div className=" w-[20%] text-gray-500">1 Months</div>
          </div>
          <div className="flex w-full text-center text-xl font-bold bg-white py-4">
            <div className=" w-[35%] text-start pl-10 font-normal">
              Semaglutide cost
            </div>
            <div className=" w-[20%] text-primary">$300</div>
            <div className=" w-[20%] text-gray-500">$2000</div>
            <div className=" w-[20%] text-gray-500">$1500</div>
          </div>
          <div className="flex w-full text-center text-xl font-bold py-4">
            <div className="w-[35%] text-start pl-10 text-black font-normal">
              Average weight loss
            </div>
            <div className=" w-[20%] text-primary">15%</div>
            <div className=" w-[20%] text-gray-500">5-7%</div>
            <div className=" w-[20%] text-gray-500">5-7%</div>
          </div>
          <div className="flex w-full text-center text-lg bg-white font-medium py-4">
            <div className=" w-[35%] text-start pl-10 font-normal">
              Delivered Medication
            </div>
            <div className="flex justify-center w-[20%] text-primary">
              <IoMdCheckmark size={30} />
            </div>
            <div className=" w-[20%] text-gray-500"></div>
            <div className=" w-[20%] text-gray-500"></div>
          </div>
          <div className="flex w-full text-center text-lg font-medium py-4">
            <div className="w-[35%] text-start pl-10 text-black font-normal">
              No Insurance Required
            </div>
            <div className="flex justify-center w-[20%] text-primary">
              <IoMdCheckmark size={30} />
            </div>
            <div className=" w-[20%] text-gray-500"></div>
            <div className=" w-[20%] text-gray-500"></div>
          </div>
          <div className="flex w-full text-center text-lg bg-white font-medium py-4">
            <div className=" w-[35%] text-start pl-10 font-normal">
              24/7 Clinical Support
            </div>
            <div className="flex justify-center w-[20%] text-primary">
              <IoMdCheckmark size={30} />
            </div>
            <div className=" w-[20%] text-gray-500"></div>
            <div className=" w-[20%] text-gray-500"></div>
          </div>
        </div>
      </div>
      <Link href="/getStarted">
        <button className="w-fit text-xs sm:text-xl text-white font-bold bg-[#522671] rounded-md px-3 sm:px-8 lg:px-20 py-3 mt-10">
          GET STARTED
        </button>
      </Link>
    </div>
  );
}

export default TableSection;
