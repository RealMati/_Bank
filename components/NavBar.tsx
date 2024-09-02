import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <p className="ml-[25%] md:ml-6 font-semibold text-[25px] text-[#343C6A] ">
        {title}
      </p>
      <div className="flex gap-3 items-center pr-4">
        <div className="flex gap-2 items-center pl-4 py-2 bg-[#F5F7FA] rounded-full justify-start text-lg overflow-hidden">
          <IoSearchOutline className="text-[#718EBF]" />
          <input
            type="text"
            placeholder="Search for something"
            className="outline-none text-slate-500 bg-[#F5F7FA] text-base placeholder:text-sm"
          />
        </div>

        <div className="hidden md:block p-3 rounded-full text-xl text-[#FE5C73] bg-[#F5F7FA] cursor-pointer">
          <CiSettings />
        </div>
        <div className="hidden md:block p-3 rounded-full text-xl text-[#FE5C73] bg-[#F5F7FA] cursor-pointer">
          <IoMdNotificationsOutline />
        </div>
        <div className="m-2 rounded-full overflow-hidden w-14 h-14 cursor-pointer  border border-green-700">
          <Image
            src="https://avatar.iran.liara.run/public/15"
            alt="Profile Picture"
            unoptimized
            width={52}
            height={42}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
