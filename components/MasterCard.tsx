import React from "react";
import Image from "next/image";

const MasterCard = ({ mode }: { mode: string }) => {
  const gradientClass =
    mode === "light"
      ? "bg-gradient-to-b from-[#ffffff] to-[#ffffff]"
      : "bg-gradient-to-b from-[#4C49ED] to-[#0A06F4]";

  const textColor = mode === "light" ? "text-[#1e293b]" : "text-white";
  const chip = mode === "light" ? "Chip_light.png" : "Chip_Card.png";
  const master = mode === "light" ? "master_light.png" : "master.png";
  const divider = mode === "light" ? "border-t-[1px] border-slate-200" : "";

  return (
    <div
      className={`text-white rounded-2xl w-full ${gradientClass} ${textColor} border-[1px] border-slate-200`}
    >
      <div className="flex justify-between px-5 pt-4 pb-2">
        <div>
          <p className="text-xs">Balance</p>
          <p className="font-semibold">$5,756</p>
        </div>
        <div className="max-h-6">
          <img src={`/${chip}`} alt="chip" />
        </div>
      </div>
      <div className="flex justify-between px-5 py-2 pb-3 pr-7">
        <div>
          <p className={`font-thin  text-[10px]`}>CARD HOLDER</p>
          <p className="font-semibold text-sm lg:text-sm ">Eddy Cusuma</p>
        </div>

        <div>
          <p className={`font-thin  text-[10px]`}>VALID THRU</p>
          <p className="font-semibold text-lg ">12/26</p>
        </div>
      </div>
      <div
        className={`flex justify-between bg-gradient-to-b from-[#ffffff29] to-[#ffffff00] px-5 py-4 pr-6 ${divider}`}
      >
        <p className="font-semibold tracking-wider">3778 **** **** 0974</p>
        <div className="max-h-5">
          <img src={`/${master}`} alt="chip" />
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
