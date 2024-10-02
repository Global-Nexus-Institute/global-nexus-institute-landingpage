import React from "react";

export default function Copyright() {
  return (
    <div className="flex h-[100px] justify-center items-center bg-gradient-to-b from-gnpink to-gnpingdark text-white">
      Copyright ©2024 All rights reserved by &nbsp;{" "}
      <a
        href={"https://globalnexusinstitute.illumidesk.com"}
        className="underline"
      >
        {" "}
        Global Nexus Institute Ltd
      </a>
    </div>
  );
}
