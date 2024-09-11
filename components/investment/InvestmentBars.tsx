import React from "react";
import LoanBar from "../loans/LoanBar";

const InvestmentBars = () => {
  return (
    <div className="flex gap-2 justify-around">
      <LoanBar image="" title="Total Invested Amount" subtitle="$150,000" />
      <LoanBar image="" title="Number of investments" subtitle="1,250" />
      <LoanBar image="" title="Rate of Return" subtitle="+5.80%" />
    </div>
  );
};

export default InvestmentBars;
