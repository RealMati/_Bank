"use client";
import React, { useState } from "react";
import Edit from "./Edit";
import Preferences from "./Preferences";
import Security from "./Security";

const SettingContent = () => {
  const [currentPage, setCurrentPage] = useState<string>("Edit");

  const Page = () => {
    switch (currentPage) {
      case "Edit":
        return <Edit />;
      case "Preferences":
        return <Preferences />;
      case "Security":
        return <Security />;
      default:
        return <Edit />;
    }
  };

  function getActiveStyle(tab: string) {
    return tab === currentPage
      ? "text-[#1814F3] border-b-[#1814F3]  border-b-[3px]"
      : "";
  }

  return (
    <div className="rounded-xl bg-white px-9 py-6 flex flex-col gap-5">
      <div className="flex gap-16 text-[#718EBF]">
        <div
          className={`hover:text-[#4c4cce] ${getActiveStyle(
            "Edit"
          )} h-8 cursor-pointer`}
          onClick={() => setCurrentPage("Edit")}
        >
          Edit Profile
        </div>
        <div
          className={`hover:text-[#4c4cce] ${getActiveStyle(
            "Preferences"
          )} h-8 cursor-pointer`}
          onClick={() => setCurrentPage("Preferences")}
        >
          Preferences
        </div>
        <div
          className={`hover:text-[#4c4cce] ${getActiveStyle(
            "Security"
          )} h-8 cursor-pointer`}
          onClick={() => setCurrentPage("Security")}
        >
          Security
        </div>
      </div>
      <Page />
    </div>
  );
};

export default SettingContent;
