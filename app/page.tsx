import Bar from "@/components/charts/bar";
import Line from "@/components/charts/line";
import Pie from "@/components/charts/pie";
import Recent from "@/components/dashboard/Recent";
import MasterCard from "@/components/MasterCard";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-100 p-8">
      <div className="flex gap-8">
        <div className="flex flex-col gap-2 w-3/5">
          <div className="flex justify-between">
            <h1>My Cards</h1>
            <h2>See All</h2>
          </div>
          <div className="flex gap-8">
            <MasterCard />
            <MasterCard />
          </div>
        </div>
        <div>
          <h1>Recent Transactions</h1>
          <Recent />
        </div>
      </div>
      <div className="flex gap-3">
        <Section title="Weekly Activity" content={<Bar />} />
        <Section title="Expense Statistics" content={<Pie />} />
      </div>
      <div className="flex gap-3">
        <Section title="Quick Transfer" content={<Bar />} />
        <Section title="Balance History" content={<Line />} />
      </div>
    </main>
  );
}
