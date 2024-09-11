import React from "react";
import MasterCard from "../MasterCard";

const MasterCredit = () => {
  return (
    <div className="flex gap-5">
      <MasterCard mode="sky" />
      <MasterCard mode="" />
      <MasterCard mode="light" />
    </div>
  );
};

export default MasterCredit;
