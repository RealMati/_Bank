import React from "react";

const TrendingStock = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white px-5 py-4">
      <div className="flex gap-2 py-1 border-b-[1px] text-sky-600">
        <p className="w-[20%]">SL No</p>
        <p className="w-[30%]">Name</p>
        <p className="w-[30%]">Price</p>
        <p className="w-[20%]">Return</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <p className="w-[20%]">01.</p>
          <p className="w-[30%]">Trivago</p>

          <p className="w-[30%]">$40,500</p>

          <p className="w-[20%]">12%</p>
        </div>
        <div className="flex gap-2">
          <p className="w-[20%]">02.</p>
          <p className="w-[30%]">Cannon</p>

          <p className="w-[30%]">$400</p>

          <p className="w-[20%]">12%</p>
        </div>
        <div className="flex gap-2">
          <p className="w-[20%]">03.</p>
          <p className="w-[30%]">Uber</p>

          <p className="w-[30%]">$40,500</p>

          <p className="w-[20%]">12%</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingStock;
