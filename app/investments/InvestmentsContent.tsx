import Bar from "@/components/charts/bar";
import Line from "@/components/charts/line";
import InvestmentBars from "@/components/investment/InvestmentBars";
import MonthlyChart from "@/components/investment/MonthlyChart";
import YearlyChart from "@/components/investment/YearlyChart";
import Section from "@/components/Section";
import React from "react";
import Invests from "./Invests";
import TrendingStock from "@/components/investment/trendingStock";

const InvestmentsContent = () => {
  return (
    <div>
      <div>
        <InvestmentBars />
      </div>
      <div className="flex w-full">
        <div className="w-1/2">
          <Section title="Yearly Total Investment" content={<YearlyChart />} />
        </div>
        <div className="w-1/2">
          <Section title="Montly Revenue" content={<MonthlyChart />} />
        </div>
      </div>
      <div className="flex">
        <div className="w-[60%]">
          <Section title="My Investment" content={<Invests />} bg={false} />
        </div>
        <div className="w-[40%]">
          <Section title="Trending Stock" content={<TrendingStock />} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentsContent;
