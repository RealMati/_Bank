import InvestmentBars from "@/components/investment/InvestmentBars";
import Section from "@/components/Section";
import React from "react";

const InvestmentsContent = () => {
  return (
    <div>
      <div>
        <InvestmentBars />
      </div>
      <div className="flex">
        <div>
          <Section title="Yearly Total Investment" content={<></>} />
        </div>
        <div>
          <Section title="Montly Revenue" content={<></>} />
        </div>
      </div>
      <div className="flex">
        <div>
          <Section title="My Investment" content={<></>} bg={false} />
        </div>
        <div>
          <Section title="Trending Stock" content={<></>} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentsContent;
