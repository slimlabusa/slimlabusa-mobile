import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-primary py-10 Cookieas">
      <h1 className="text-6xl font-bold mb-6">
        slimlab<span className="text-[#9754C6]">.</span>
      </h1>
      <p className="text-sm text-center lg:text-base px-1">
        Terms & Conditions | Cookie Policy | Shipping & Returns
      </p>
      <p className="text-sm text-center lg:text-base pt-1">
        Copyright © 2022 SLIMLAB. All Rights Reserved
      </p>
    </div>
  );
}
