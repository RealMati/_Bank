import React from "react";
import AccBar from "./AccBar";

const AccountBars = () => {
  return (
    <div className="flex gap-2 justify-around">
      <AccBar image="/inv/cashbag.png" title="My Balance" subtitle="$12,000" />
      <AccBar image="/inv/number.png" title="Income" subtitle="$5,250" />
      <AccBar image="/inv/return.png" title="Expense" subtitle="$3,460" />
      <AccBar image="/bag.png" title="Total Savings" subtitle="$7,960" />
    </div>
  );
};

export default AccountBars;
