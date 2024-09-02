import React from "react";
import MenuIcons from "../icons/MenuIcons";
import SidebarItem from "./SidebarItem";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex gap-1 items-center mb-8">
        <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
        <p className="text-[#343C6A] dark:text-darkText pl-2 md:text-xl md:pl-1 lg:pl-2 lg:text-[21px] text-base xl:text-[21px] md:text-[21px] font-[800] font-mont">
          BankDash.
        </p>
      </div>
      <SidebarItem
        icon={<MenuIcons.Homeicon />}
        name="Dashboard"
        destination=""
      />
      <SidebarItem
        icon={<MenuIcons.Transfericon />}
        name="Transaction"
        destination="transactions"
      />
      <SidebarItem
        icon={<MenuIcons.Usericon />}
        name="Accounts"
        destination="accounts"
      />
      <SidebarItem
        icon={<MenuIcons.Investicon />}
        name="Investments"
        destination="investments"
      />
      <SidebarItem
        icon={<MenuIcons.CreditCardicon />}
        name="Credit Cards"
        destination="credits"
      />
      <SidebarItem
        icon={<MenuIcons.Loanicon />}
        name="Loans"
        destination="loans"
      />
      <SidebarItem
        icon={<MenuIcons.Serviceicon />}
        name="Services"
        destination="services"
      />
      <SidebarItem
        icon={<MenuIcons.Privilegeicon />}
        name="My Privileges"
        destination="privileges"
      />
      <SidebarItem
        icon={<MenuIcons.Settingsicon />}
        name="Setting"
        destination="setting"
      />
    </div>
  );
};

export default Sidebar;
