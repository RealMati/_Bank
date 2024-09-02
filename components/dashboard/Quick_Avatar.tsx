import React from "react";
import Image from "next/image";

const Quick_Avatar = ({
  name,
  position,
}: {
  name: string;
  position: string;
}) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="rounded-full overflow-hidden w-17 h-17 cursor-pointer border border-green-700">
        <Image
          src="https://avatar.iran.liara.run/public/15"
          alt="Profile Picture"
          unoptimized
          width={70}
          height={70}
        />
      </div>
      <h2 className="text-nowrap text-[15px]">{name}</h2>
      <h3 className="font-light text-blue-700 text-sm">{position}</h3>
    </div>
  );
};

export default Quick_Avatar;
