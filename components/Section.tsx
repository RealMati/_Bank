import React from "react";

const Section = ({
  title,
  content,
  bg = true,
}: {
  title: string;
  content: React.ReactNode;
  bg?: boolean;
}) => {
  const back = bg ? "bg-white" : "bg-transparent";
  return (
    <div className="flex flex-col gap-3 px-4 py-3 rounded-lg w-full">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <div className={`${back} rounded-2xl w-full overflow-clip`}>
        {content}
      </div>
    </div>
  );
};

export default Section;
