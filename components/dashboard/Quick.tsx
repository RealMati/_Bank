import React from "react";
import Image from "next/image";
import Quick_Avatar from "./Quick_Avatar";
import { MdNavigateNext } from "react-icons/md";

const Quick = () => {
  return (
    <div className="py-6 px-5 flex flex-col gap-8">
      <div className="flex gap-4 items-center">
        <div className="flex gap-3 w-[82%] overflow-x-scroll">
          <Quick_Avatar name="Livia Bator" position="CEO" />
          <Quick_Avatar name="Randy Press" position="Designer" />
          <Quick_Avatar name="Eddy Cusuma" position="Director" />
        </div>
        <div className="rounded-full p-4 shadow-xl flex justify-center items-center border-[1px] cursor-pointer w-[18%] aspect-square">
          <MdNavigateNext className="text-3xl text-blue-700 aspect-square" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-light text-slate-700">Write Amount</p>
        <div className="rounded-3xl bg-slate-200 flex justify-between max-w-[65%]">
          <input
            type="text"
            placeholder="0.00"
            className="rounded-3xl px-5 py-2 outline-none max-w-[55%] bg-slate-200"
          />
          <div className="flex items-center p-3 px-8 justify-center gap-2 bg-blue-700 rounded-3xl cursor-pointer">
            <p className="text-white">Send</p>
            <Image src="/send.png" alt="send" width={25} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quick;
