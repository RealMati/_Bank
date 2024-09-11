import React from "react";

const SettingList = ({
  icon,
  name,
  desc,
}: {
  icon: string;
  name: string;
  desc: string;
}) => {
  return (
    <div className="flex items-center gap-3 m-1">
      <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
        <img src={icon} alt={name} />
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="w-60 text-blue-900 opacity-70">{desc}</p>
      </div>
    </div>
  );
};

export default SettingList;
