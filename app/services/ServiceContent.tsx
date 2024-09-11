import Service from "@/components/services/Service";
import TagBar from "@/components/services/TagBar";
import React from "react";

const ServiceContent = () => {
  return (
    <div className="text-[#232323] px-8 py-6 bg-slate-100 min-h-[750px] flex flex-col gap-4 w-full">
      <div className="flex gap-4 justify-around">
        <TagBar
          image="/life-insurance.png"
          title="Life Insurance"
          subtitle="Unlimited protection"
        />
        <TagBar
          image="/bag.png"
          title="Shopping"
          subtitle="Buy. Think. Grow."
        />
        <TagBar
          image="/shield.png"
          title="Safety"
          subtitle="We are your allies"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-xl text-[#343C6A] font-semibold">
          Bank Services List
        </h1>
        <div className="flex flex-col gap-4">
          <Service image="/loan.svg" title="Business loans" />
          <Service image="/Group.svg" title="Checking accounts" />
          <Service image="/Group1.svg" title="Saving accounts" />
          <Service image="/user.svg" title="Debit and credit cards" />
          <Service image="/shield.png" title="Life Insurance" />
          <Service image="/loan.svg" title="Business loans" />
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
