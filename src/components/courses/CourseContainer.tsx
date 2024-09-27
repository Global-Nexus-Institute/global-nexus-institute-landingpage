import React, { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";

import { Course } from "@/shared/types";

import { sampleFeaturedCourses } from "@/shared/data";
import Search from "antd/es/input/Search";
import { Button } from "antd";

export default function CourseContainer() {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    // Simulate data fetching
    setCourses(sampleFeaturedCourses);
  }, []);

  return (
    <div className="flex flex-col bg-transparent h-[100%] w-full ">
      <div className="flex justify-end items-center space-x-2 my-4 ">
        <div><Search /></div> <Button>View All</Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center px-2 md:flex-wrap gap-4">
        {courses.map((course: Course) => (
          <div className="flex h-[450px] card" key={course.uuid}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}
