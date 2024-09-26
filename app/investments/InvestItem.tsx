import React from "react";
import Image from "next/image";

const InvestItem = ({
  image,
  company,
  tags,
  amount,
  returnVal,
}: {
  image: string;
  company: string;
  tags: string;
  amount: string;
  returnVal: string;
}) => {
  return (
    <div className="flex gap-2 justify-between bg-white p-4 px-6">
      <div className="flex gap-4 items-center w-[40%]">
        <div className="size-10">
          <Image src={image} width={45} height={45} alt={company} />
        </div>
        <div>
          <p className="">{company}</p>
          <p className="text-blue-500 text-sm">{tags}</p>
        </div>
      </div>
      <div className="max-w-[30%]">
        <p>{amount}</p>
        <p className="text-blue-500 text-sm">Investment value</p>
      </div>
      <div className="max-w-[30%]">
        <p>{returnVal}</p>
        <p className="text-blue-500 text-sm">Return Value</p>
      </div>
    </div>
  );
};

export default InvestItem;
