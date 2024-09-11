import React, { useState } from "react";
import Content from "@/components/Content";
import SettingContent from "./SettingContent";

export default function Setting() {
  return <Content content={<SettingContent />} title="Setting" />;
}
