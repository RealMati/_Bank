import Bar from "@/components/charts/bar";
import Line from "@/components/charts/line";
import Pie from "@/components/charts/pie";
import Quick from "@/components/dashboard/Quick";
import Recent from "@/components/dashboard/Recent";
import MasterCard from "@/components/MasterCard";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <NavBar title="Overview" />
      <div className="bg-slate-100 p-8">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 w-[65%]">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold text-gray-700">My Cards</h1>
              <h2 className="text-base font-semibold text-gray-700">See All</h2>
            </div>
            <div className="flex gap-8">
              <MasterCard mode="normal" />
              <MasterCard mode="light" />
            </div>
          </div>
          <div className="w-[35%] flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-gray-700">
              Recent Transactions
            </h1>
            <Recent />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[65%]">
            <Section title="Weekly Activity" content={<Bar />} />
          </div>
          <div className="w-[35%]">
            <Section title="Expense Statistics" content={<Pie />} />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-[39%]">
            <Section title="Quick Transfer" content={<Quick />} />
          </div>
          <div className="w-[61%]">
            <Section title="Balance History" content={<Line />} />
          </div>
        </div>
      </div>
    </main>
  );
}
