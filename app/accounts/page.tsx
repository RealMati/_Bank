import Content from "@/components/Content";
import NavBar from "@/components/NavBar";
import React from "react";
import AccountsContent from "./AccountsContent";

const page = () => {
  return <Content content={<AccountsContent />} title="Accounts" />;
};

export default page;
