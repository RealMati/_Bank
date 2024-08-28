"use client";
import React, { useState } from "react";

const SidebarItem = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-3 p-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ fill: isHovered ? "blue" : "white" }}>{icon}</div>

      <p className="text-xl">{name}</p>
    </div>
  );
};

export default SidebarItem;
