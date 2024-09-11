import NavBar from "@/components/NavBar";
import React from "react";
import TranscationContent from "./TranscationContent";
import Content from "@/components/Content";

const page = () => {
  return <Content content={<TranscationContent />} title="Transactions" />;
};

export default page;
