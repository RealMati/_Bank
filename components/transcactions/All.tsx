import React from "react";
import Image from "next/image";

const All = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 py-1 border-b-[1px] text-blue-600">
        <p className="w-[24%]">Description</p>
        <p className="w-[14%]">Transaction ID</p>
        <p className="w-[12%]">Type</p>
        <p className="w-[11%]">Card</p>
        <p className="w-[15%]">Date</p>
        <p className="w-[13%]">Amount</p>
        <p className="pr-5 w-[11%]">Receipt</p>
      </div>
      <div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 w-[24%]">
            <Image
              src={"/up.png"}
              alt="inc"
              width={25}
              height={10}
              className="w-6 h-6"
            />
            <p className="w-full">Spotify Subscription</p>
          </div>
          <p className="w-[14%]">#8745eq7qe</p>
          <p className="w-[12%]">Shopping</p>
          <p className="w-[11%]">3778 ****</p>
          <p className="w-[15%]">28 Jan, 12:30Am</p>
          <p className="w-[13%]">-$2,500</p>
          <div className="flex justify-center items-center p-1 px-2 rounded-2xl border w-[11%] border-blue-800 text-blue-800 cursor-pointer">
            Download
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
