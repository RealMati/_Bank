import React from "react";
import Image from "next/image";

const RecentItem = ({
  icon,
  statement,
  date,
  amount,
}: {
  icon: string;
  statement: string;
  date: string;
  amount: string;
}) => {
  return (
    <div className="flex p-1 gap-3 rounded-md hover:shadow-md hover:bg-slate-50 cursor-pointer">
      <Image src={icon} alt="credit" width={40} height={40} />
      <div>
        <p className="">{statement}</p>
        <p className="text-sm font-light text-gray-500">{date}</p>
      </div>
      <p
        className={
          amount[0] == "+"
            ? "text-green-500 pl-3"
            : "text-red-500 font-light pl-3"
        }
      >
        {amount}
      </p>
    </div>
  );
};

export default RecentItem;
