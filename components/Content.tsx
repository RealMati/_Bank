import React from "react";
import NavBar from "./NavBar";

const Content = ({
  content,
  title,
}: {
  content: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center h-full">
      <NavBar title={title} />
      <div className="px-8 py-6 bg-slate-100 w-full h-full">{content}</div>
    </div>
  );
};

export default Content;
