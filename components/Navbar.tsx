import React, { useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoReorderThree } from "react-icons/io5";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-between w-full bg-white drop-shadow-lg sm:drop-shadow-none px-3 sm:px-20 lg:px-36 py-4 sm:py-8 mycstmpding">
      <div className="flex justify-center items-center toggle-x">
        <IoReorderThree
          size={50}
          className="flex sm:hidden text-[#522671] mr-3"
        />
        <h1 className="text-black text-4xl sm:text-5xl font-extrabold">
          slimlab<span className="text-[#522671]">.</span>
        </h1>
      </div>

      <button
        className="text-xs sm:text-xl text-white font-bold bg-[#522671] rounded-md px-3 sm:px-8 lg:px-16 py-0 btn-cutmpad"
        onClick={() => {
          router.push("/getStarted");
        }}
      >
        DO I QUALIFY?
      </button>
    </div>
  );
}

export default Navbar;
