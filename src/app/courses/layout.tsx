import React from "react";

const CourseLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  
  return (
    <div className="h-full">
      <div>{children}</div>
    </div>
  );
};

export default CourseLayout;
