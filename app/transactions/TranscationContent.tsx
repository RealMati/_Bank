import MasterCard from "@/components/MasterCard";
import Section from "@/components/Section";
import TransactionData from "@/components/transcactions/TransactionData";
import React from "react";

const TranscationContent = () => {
  return (
    <>
      <div className="flex gap-8">
        <div className="flex flex-col gap-2 w-[65%]">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold text-gray-700">My Cards</h1>
            <h2 className="text-base font-semibold text-gray-700 cursor-pointer">
              + Add Card{" "}
            </h2>
          </div>
          <div className="flex gap-8">
            <MasterCard mode="normal" />
            <MasterCard mode="light" />
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-gray-700">My Expense</h1>
          {/* < /> */}
        </div>
      </div>
      <Section title="Recent Transactions" content={<TransactionData />} />
    </>
  );
};

export default TranscationContent;
