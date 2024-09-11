"use client";
import { ListItemIcon } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const SidebarItem = ({
  icon,
  name,
  destination,
  active,
}: {
  icon: React.ReactNode;
  name: string;
  destination: string;
  active: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const textColor = active ? "text-[#1e40af]" : "text-[#6d6c6c]";
  const border = active ? "border-l-[6px] border-[#1e40af]" : "";

  return (
    <Link href={`/${destination}`} className="flex">
      <div className={`${border} rounded-l-full rotate-180`}></div>
      <div
        id="menuItem"
        className={`flex items-center gap-5 rounded- p-1 py-3 ${textColor} border- pl-8 group hover:text-blue-500 cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ListItemIcon
          sx={{
            minWidth: "auto",
            color:
              active && !isHovered ? "#1e40af" : isHovered ? "blue" : "#6d6c6c",
            scale: 0.92,
          }}
        >
          {icon}
        </ListItemIcon>
        <p className="text-md">{name}</p>
      </div>
    </Link>
  );
};

export default SidebarItem;
