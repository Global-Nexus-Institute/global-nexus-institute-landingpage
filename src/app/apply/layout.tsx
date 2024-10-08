"use client";
import TopMenu from "@/components/navigation/TopMenu";
import React from "react";

const ApplyLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full">
      <TopMenu />
      <div>{children}</div>
    </div>
  );
};

export default ApplyLayout;
