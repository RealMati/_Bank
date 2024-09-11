import MasterCredit from "@/components/credits/MasterCredit";
import Section from "@/components/Section";
import React from "react";
import AddCredit from "../../components/credits/AddCredit";
import CardList from "../../components/credits/CardList";
import CardSetting from "../../components/credits/CardSetting";
import CardStat from "../../components/credits/CardStat";

const CreditsContent = () => {
  return (
    <div>
      <div>
        <Section title="My Cards" content={<MasterCredit />} bg={false} />
      </div>
      <div className="flex">
        <div className="w-1/3">
          <Section title="Card Expense Statistics" content={<CardStat />} />
        </div>
        <div className="w-2/3">
          <Section title="Card List" content={<CardList />} bg={false} />
        </div>
      </div>
      <div className="flex">
        <div className="w-2/3">
          <Section title="Add New Card" content={<AddCredit />} />
        </div>
        <div className="w-1/3">
          <Section title="Card Setting" content={<CardSetting />} />
        </div>
      </div>
    </div>
  );
};

export default CreditsContent;
