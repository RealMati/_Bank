import React from "react";

const LoanContent = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white px-5 py-4">
      <div className="flex gap-2 py-1 border-b-[1px] text-sky-600">
        <p className="w-[10%]">SL No</p>
        <p className="w-[15%]">Loan Money</p>
        <p className="w-[14%]">Left to repay</p>
        <p className="w-[18%]">Duration</p>
        <p className="w-[13%]">Interest rate</p>
        <p className="w-[17%]">Installment</p>
        <p className="pr-5 w-[13%]">Repay</p>
      </div>
      <div>
        <div className="flex gap-2">
          <p className="w-[10%]">01.</p>

          <p className="w-[15%]">$100,000</p>
          <p className="w-[14%]">$40,500</p>
          <p className="w-[18%]">8 Months</p>
          <p className="w-[13%]">12%</p>
          <p className="w-[17%]">$2,500 / month</p>
          <div className="flex justify-center items-center p-1 px-2 rounded-2xl border w-[13%] border-black hover:border-blue-800 hover:text-blue-800 cursor-pointer">
            Repay
          </div>
        </div>
        <div className="flex gap-2 py-1 border-t-[1px] border-slate-100 mt-3 text-red-500">
          <p className="w-[10%]">Total</p>
          <p className="w-[15%]">$100,000</p>
          <p className="w-[14%]">$40,500</p>
          <p className="w-[18%]"></p>
          <p className="w-[13%]"></p>
          <p className="w-[17%]">$2,500 / month</p>
          <p className="pr-5 w-[13%]"></p>
        </div>
      </div>
    </div>
  );
};

export default LoanContent;
