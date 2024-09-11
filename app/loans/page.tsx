import Content from "@/components/Content";
import NavBar from "@/components/NavBar";
import React from "react";
import LoansContent from "./LoansContent";

const page = () => {
  return <Content content={<LoansContent />} title="Loans" />;
};

export default page;
