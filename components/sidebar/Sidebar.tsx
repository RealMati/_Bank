"use client";
import React, { useState } from "react";
import MenuIcons from "../icons/MenuIcons";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1];
  const [active, setActive] = useState<string>(currentPath);

  return (
    <div className="flex flex-col p-3 pl-0">
      <div className="flex gap-1 items-center mb-8 self-center">
        <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
        <p className="text-[#343C6A] dark:text-darkText pl-2 md:text-xl md:pl-1 lg:pl-2 lg:text-[21px] text-base xl:text-[21px] md:text-[21px] font-[800] font-mont">
          BankDash.
        </p>
      </div>

      <div onClick={() => setActive("")}>
        <SidebarItem
          icon={<MenuIcons.Homeicon />}
          name="Dashboard"
          destination=""
          active={"" === active}
        />
      </div>
      <div onClick={() => setActive("transactions")}>
        <SidebarItem
          icon={<MenuIcons.Transfericon />}
          name="Transaction"
          destination="transactions"
          active={"transactions" === active}
        />
      </div>
      <div onClick={() => setActive("accounts")}>
        <SidebarItem
          icon={<MenuIcons.Usericon />}
          name="Accounts"
          destination="accounts"
          active={"accounts" === active}
        />
      </div>
      <div onClick={() => setActive("investments")}>
        <SidebarItem
          icon={<MenuIcons.Investicon />}
          name="Investments"
          destination="investments"
          active={"investments" === active}
        />
      </div>
      <div onClick={() => setActive("credits")}>
        <SidebarItem
          icon={<MenuIcons.CreditCardicon />}
          name="Credit Cards"
          destination="credits"
          active={"credits" === active}
        />
      </div>
      <div onClick={() => setActive("loans")}>
        <SidebarItem
          icon={<MenuIcons.Loanicon />}
          name="Loans"
          destination="loans"
          active={"loans" === active}
        />
      </div>
      <div onClick={() => setActive("services")}>
        <SidebarItem
          icon={<MenuIcons.Serviceicon />}
          name="Services"
          destination="services"
          active={"services" === active}
        />
      </div>
      <div onClick={() => setActive("privileges")}>
        <SidebarItem
          icon={<MenuIcons.Privilegeicon />}
          name="My Privileges"
          destination="privileges"
          active={"privileges" === active}
        />
      </div>
      <div onClick={() => setActive("setting")}>
        <SidebarItem
          icon={<MenuIcons.Settingsicon />}
          name="Setting"
          destination="setting"
          active={"setting" === active}
        />
      </div>
    </div>
  );
};

export default Sidebar;
