import React from "react";
import LastItem from "./LastItem";

const LastTransaction = () => {
  return (
    <div className="p-4 px-5">
      <LastItem
        image="/cash.png"
        date="25 Jan 2024"
        title="My Balance"
        type="service"
        subtitle="$12,000"
      />
      <LastItem
        image="/tool.png"
        title="Mobile service"
        date="25 Jan 2024"
        type="Shopping"
        subtitle="$2,500"
      />
      <LastItem
        image="/user.png"
        title="Emily Wilson"
        type="Transfer"
        date="24 Jan 2024"
        subtitle="$7500"
      />
    </div>
  );
};

export default LastTransaction;
