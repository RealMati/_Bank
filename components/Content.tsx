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
    <div className="flex flex-col items-center h-full min-h-screen w-full">
      <NavBar title={title} />
      <div className="px-7 py-4 bg-slate-100 w-full min-h-screen h-fit">
        {content}
      </div>
    </div>
  );
};

export default Content;
