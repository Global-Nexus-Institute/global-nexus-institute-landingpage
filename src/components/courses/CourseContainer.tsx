import React, { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";

import { Course } from "@/shared/types";
import { sampleFeaturedCourses } from "@/shared/data";
import Search from "antd/es/input/Search";
import { Button, Spin } from "antd";
import { useCourses } from "@/shared/hooks/courses/courses.hooks";
import { useAppSelector } from "@/lib/store/store.hooks";
import { RootState } from "@/lib/store/store";

export default function CourseContainer() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;

  const { courses: courseList, loading } = useAppSelector((store: RootState) => store.courses);

  const { getCourses } = useCourses();

  useEffect(() => {
    // Simulate data fetching
    getCourses();
    setCourses(sampleFeaturedCourses);
  }, []);

  // Calculate the current courses to display
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courseList ? courseList.slice(indexOfFirstCourse, indexOfLastCourse) : courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Handle page change
  const handleNextPage = () => {
    if (indexOfLastCourse < courses.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col bg-transparent h-[100%] w-full">
      <div className="flex flex-col mx-auto w-[95%] md:w-[95%]">
        {/* Search and Button section */}
        <div className="flex justify-end items-center space-x-2 my-4">
          <div>
            <Search />
          </div>
          {/* Pagination Buttons */}
          <div className="flex justify-center space-x-2 my-4">
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <Button
              onClick={handleNextPage}
              disabled={indexOfLastCourse >= courses.length}
            >
              Next
            </Button>
          </div>
        </div>

        {/* Courses Section */}
        <Spin spinning={loading} size="large" style={{ width: "100%" }} tip="Loading...">
          <div className="flex flex-col md:flex-row justify-center md:flex-wrap w-full gap-2">
          {currentCourses.map((course: Course) => (
            <div className="flex h-[450px] card" key={course.uuid}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        </Spin>
        
      </div>
    </div>
  );
}
