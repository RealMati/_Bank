import React from "react";
import InvBar from "./InvBar";

const InvestmentBars = () => {
  return (
    <div className="flex gap-2 justify-around">
      <InvBar
        image="/inv/cashbag.png"
        title="Total Invested Amount"
        subtitle="$150,000"
      />
      <InvBar
        image="/inv/number.png"
        title="Number of investments"
        subtitle="1,250"
      />
      <InvBar
        image="/inv/return.png"
        title="Rate of Return"
        subtitle="+5.80%"
      />
    </div>
  );
};

export default InvestmentBars;
