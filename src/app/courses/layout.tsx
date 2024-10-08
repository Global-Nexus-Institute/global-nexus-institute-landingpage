import TopMenu from "@/components/navigation/TopMenu";
import React from "react";

const CourseLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="h-full">
      <TopMenu />
      <div>{children}</div>
    </div>
  );
};

export default CourseLayout;
