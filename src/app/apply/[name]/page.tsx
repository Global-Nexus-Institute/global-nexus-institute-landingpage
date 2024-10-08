"use client";
import React from "react";
import { usePathname } from "next/navigation";
import CourseApplicationForm from "@/components/forms/CourseApplicationForm";
import JobApplicationForm from "@/components/forms/JobApplicationForm";

export default function ApplyPage() {
  const path = usePathname();
  console.log("Pathname ", path.split("/")[2]);
  return (
    <div>
      {path.split("/")[2] === "course" ? (
        <CourseApplicationForm />
      ) : (
        <JobApplicationForm />
      )}
    </div>
  );
}
