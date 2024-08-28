import React from "react";
import MenuIcons from "../icons/MenuIcons";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <SidebarItem icon={<MenuIcons.Homeicon />} name="Dashboard" />
      <SidebarItem icon={<MenuIcons.Transfericon />} name="Transaction" />
      <SidebarItem icon={<MenuIcons.Usericon />} name="Accounts" />
      <SidebarItem icon={<MenuIcons.Investicon />} name="Investments" />
      <SidebarItem icon={<MenuIcons.CreditCardicon />} name="Credit Cards" />
      <SidebarItem icon={<MenuIcons.Loanicon />} name="Loans" />
      <SidebarItem icon={<MenuIcons.Serviceicon />} name="Services" />
      <SidebarItem icon={<MenuIcons.Privilegeicon />} name="My Privileges" />
      <SidebarItem icon={<MenuIcons.Settingsicon />} name="Setting" />
    </div>
  );
};

export default Sidebar;
