import AccountBars from "@/components/accounts/AccountBars";
import DebitChart from "@/components/accounts/DebitChart";
import Invoices from "@/components/accounts/Invoices";
import LastTransaction from "@/components/accounts/LastTransaction";
import MasterCard from "@/components/MasterCard";
import Section from "@/components/Section";
import React from "react";

const AccountsContent = () => {
  return (
    <div className="">
      <AccountBars />
      <div className="flex">
        <div className="w-2/3">
          <Section title="Last Transaction" content={<LastTransaction />} />
        </div>
        <div className="w-1/3 flex flex-col gap-3 px-4 py-3 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold text-gray-700">My Card</h2>
            <h2 className="text-lg font-semibold text-gray-700 cursor-pointer">
              See All
            </h2>
          </div>
          <MasterCard mode="" />
        </div>
      </div>
      <div className="flex">
        <div className="w-2/3">
          <Section title="Debit & Credit Overview" content={<DebitChart />} />
        </div>
        <div className="w-1/3">
          <Section title="Invoices Sent" content={<Invoices />} />
        </div>
      </div>
    </div>
  );
};

export default AccountsContent;
