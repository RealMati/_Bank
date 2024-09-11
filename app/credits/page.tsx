import Content from "@/components/Content";
import NavBar from "@/components/NavBar";
import React from "react";
import CreditsContent from "./CreditsContent";

const page = () => {
  return <Content content={<CreditsContent />} title="Credits" />;
};

export default page;
