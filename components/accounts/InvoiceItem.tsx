import React from "react";
import Image from "next/image";

const InvoiceItem = ({
  image,
  title,
  subtitle,
  amount,
}: {
  image: string;
  title: string;
  subtitle: string;
  amount: string;
}) => {
  return (
    <div className="flex justify-between items-center p-1 pb-2 border-b-2 border-slate-100">
      <div className="flex gap-4">
        <div className="flex justify-center items-center  bg-[#E7EDFF] rounded-full size-14 overflow-hidden">
          <Image src={image} width={56} height={56} alt={title} />
        </div>
        <div className="flex flex-col">
          <p>{title}</p>
          <p className="text-slate-400">{subtitle}</p>
        </div>
      </div>
      <p className="text-slate-400">{amount}</p>
    </div>
  );
};

export default InvoiceItem;
