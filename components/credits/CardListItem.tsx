import React from "react";

const CardListItem = ({
  icon,
  type,
  bank,
  no,
  name,
}: {
  icon: string;
  type: string;
  bank: string;
  no: number;
  name: string;
}) => {
  return (
    <div className="flex gap-2 justify-between bg-white p-3 hover:shadow-md rounded-xl cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className="size-11 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
          <img src={icon} alt={"bank"} />
        </div>
        <div>
          <div className="font-medium py-1 ">Card Type</div>
          <div className="text-blue-900  opacity-70">Secondary</div>
        </div>
      </div>
      <div>
        <div className="font-medium py-1">Bank</div>
        <div className="text-blue-900  opacity-70">{bank}</div>
      </div>
      <div className="hidden sm:block">
        <div className="font-medium py-1">Card Number</div>
        <div className="text-blue-900  opacity-70">{no}</div>
      </div>
      <div className="hidden sm:block">
        <div className="font-medium py-1">Naming Card</div>
        <div className="text-blue-900  opacity-70">{name}</div>
      </div>
      <div className="flex items-center p-2 cursor-pointer text-blue-600  hover:text-blue-500">
        <p className="font-medium">View Details</p>
      </div>
    </div>
  );
};

export default CardListItem;
