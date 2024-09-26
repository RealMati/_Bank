import React from "react";
import Image from "next/image";

const LoanBar = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex gap-4 justify-center items-center bg-white rounded-2xl px-5 py-4 hover:shadow-md">
      <div className="flex justify-center items-center  bg-[#E7EDFF] rounded-full size-14 overflow-hidden">
        <Image src={image} width={56} height={56} alt={title} />
      </div>
      <div className="flex flex-col">
        <p className="text-[#718EBF] text-base text-nowrap">{title}</p>
        <p className="text-lg font-semibold text-nowrap">{subtitle}</p>
      </div>
    </div>
  );
};

export default LoanBar;
