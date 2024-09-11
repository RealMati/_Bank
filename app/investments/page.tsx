import Content from "@/components/Content";
import NavBar from "@/components/NavBar";
import React from "react";
import InvestmentsContent from "./InvestmentsContent";

const page = () => {
  return <Content content={<InvestmentsContent />} title="Investments" />;
};

export default page;
