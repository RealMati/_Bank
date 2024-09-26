import React from "react";
import Image from "next/image";

const LastItem = ({
  image,
  title,
  subtitle,
  date,
  type,
}: {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  type: string;
}) => {
  return (
    <div className="flex justify-between items-center p-1 pb-2 border-b-2 border-slate-100">
      <div className="flex justify-center items-center  bg-[#E7EDFF] rounded-full size-14 overflow-hidden">
        <Image src={image} width={56} height={56} alt={title} />
      </div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p className="text-slate-400">{date}</p>
      </div>
      <p className="text-slate-400">{type}</p>
      <p className="text-slate-400">1234 ****</p>
      <p className="text-slate-400">Pending</p>
      <p className="text-red-500">{subtitle}</p>
    </div>
  );
};

export default LastItem;
