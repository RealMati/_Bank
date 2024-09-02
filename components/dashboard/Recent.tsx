import React from "react";
import Image from "next/image";
import RecentItem from "./RecentItem";

const Recent = () => {
  return (
    <div className=" bg-white rounded-2xl px-4 py-3 w-full flex flex-col gap-1">
      <RecentItem
        icon="/credit.png"
        statement="Deposit from my"
        date="28 January 2024"
        amount="-$850"
      />
      <RecentItem
        icon="/paypal.png"
        statement="Deposit paypal"
        date="18 January 2024"
        amount="+$2500"
      />
      <RecentItem
        icon="/cash.png"
        statement="Jemi Wilson"
        date="19 February 2024"
        amount="+$5400"
      />
    </div>
  );
};

export default Recent;
