"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const RouteLoader: React.FC = () => {
  return (
    <ProgressBar
      options={{ showSpinner: true }}
      color="blue"
      height={"4px"}
    />
  );
};
