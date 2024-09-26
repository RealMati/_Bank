import React from "react";
import Image from "next/image";
import InvestItem from "./InvestItem";
const Invests = () => {
  return (
    <div className="flex flex-col gap-3">
      <InvestItem
        image="/inv/apple.png"
        company="Apple Store"
        tags="E-commerce"
        amount="$100,000"
        returnVal="+12%"
      />
      <InvestItem
        image="/inv/google.png"
        company="Samsung Mobile"
        tags="E-commerce"
        amount="$120,000"
        returnVal="+14%"
      />
      <InvestItem
        image="/inv/tesla.png"
        company="Tesla  Motors"
        tags="Entertainment"
        amount="$70,000"
        returnVal="+12%"
      />
    </div>
  );
};

export default Invests;
