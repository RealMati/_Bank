import React from "react";

const Section = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-lg w-full">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <div className="bg-white rounded-2xl w-full overflow-clip">{content}</div>
    </div>
  );
};

export default Section;
