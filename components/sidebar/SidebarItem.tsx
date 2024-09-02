"use client";
import { ListItemIcon } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const SidebarItem = ({
  icon,
  name,
  destination,
}: {
  icon: React.ReactNode;
  name: string;
  destination: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/${destination}`}>
      <div
        id="menuItem"
        className="flex items-center gap-5 p-1 text-[#6d6c6c] group hover:text-blue-500 rounded-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ListItemIcon
          sx={{
            minWidth: "auto",
            color: isHovered ? "blue" : "#6d6c6c",
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
