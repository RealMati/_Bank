"use client";
import React, { useState } from "react";
import All from "./All";
import Income from "./Income";
import Expense from "./Expense";

const TransactionData = () => {
  const [currentPage, setCurrentPage] = useState<string>("All");

  const Page = () => {
    switch (currentPage) {
      case "All":
        return <All />;
      case "Income":
        return <Income />;
      case "Expense":
        return <Expense />;
      default:
        return <All />;
    }
  };

  function getActiveStyle(tab: string) {
    return tab === currentPage
      ? "text-[#1814F3] border-b-[#1814F3]  border-b-[3px]"
      : "";
  }
  return (
    <div className="rounded-xl bg-slate-100 flex flex-col gap-5">
      <div className="flex gap-16 text-[#718EBF] border-b-[1px]">
        <div
          className={`hover:text-[#4c4cce] ${getActiveStyle(
            "All"
          )} h-8 cursor-pointer`}
          onClick={() => setCurrentPage("All")}
        >
          All Transactions
        </div>
        <div
          className={`hover:text-[#4c4cce] ${getActiveStyle(
            "Income"
          )} h-8 cursor-pointer`}
          onClick={() => setCurrentPage("Income")}
        >
          Income
        </div>
        <div
          className={`hover:text-[#4c4cce] ${getActiveStyle(
            "Expense"
          )} h-8 cursor-pointer`}
          onClick={() => setCurrentPage("Expense")}
        >
          Expense
        </div>
      </div>
      <div className="rounded-xl bg-white px-5 py-4">
        <Page />
      </div>
    </div>
  );
};

export default TransactionData;
