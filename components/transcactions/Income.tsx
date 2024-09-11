import React from "react";

const Income = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 py-1 border-b-[1px]">
        <p className="w-[24%]">Description</p>
        <p className="w-[14%]">Transaction ID</p>
        <p className="w-[12%]">Type</p>
        <p className="w-[11%]">Card</p>
        <p className="w-[15%]">Date</p>
        <p className="w-[13%]">Amount</p>
        <p className="pr-5 w-[11%]">Receipt</p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Income;
