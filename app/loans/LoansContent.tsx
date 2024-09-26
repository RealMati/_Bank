import LoanBar from "@/components/loans/LoanBar";
import LoanContent from "@/components/loans/LoanContent";
import React from "react";

const LoansContent = () => {
  return (
    <div className="text-[#232323] px-8 py-6 bg-slate-100 min-h-[750px] flex flex-col gap-3 w-full">
      <div className="flex gap-4 justify-around">
        <LoanBar image="/user.png" title="Personal Loans" subtitle="$50,000" />
        <LoanBar image="/bag.png" title="Corporate Loans" subtitle="$100,000" />
        <LoanBar
          image="/increase.png"
          title="Business Loans"
          subtitle="$500,000"
        />
        <LoanBar
          image="/tool.png"
          title="Custom Loans"
          subtitle="Choose Money"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-xl text-[#343C6A] font-semibold">
          Active Loans Overview
        </h1>
        <div className="flex flex-col gap-4">
          <LoanContent />
        </div>
      </div>
    </div>
  );
};

export default LoansContent;
