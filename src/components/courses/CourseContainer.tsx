import React, { useEffect } from "react";
import { CourseCard } from "./CourseCard";
import { useAppSelector } from "@/lib/store/store.hooks";
import { useCourses } from "@/shared/hooks/courses/courses.hooks";
import { Course } from "@/shared/types";
import { Skeleton } from "antd";
import { RootState } from "@/lib/store/store";
import { sampleFeaturedCourses } from "@/shared/data";

export default function CourseContainer() {
  const { getCourses } = useCourses();
  const { courses: online, loading } = useAppSelector(
    (state: RootState) => state.courses,
  );

  const courses = sampleFeaturedCourses;

  useEffect(() => {
    // getCourses();
  }, [getCourses]);

  return (
    <div className="bg-transparent h-[100%] w-full">
      
      <div className="flex items-center flex-col md:grid md:grid-cols-3 gap-4">
        {/* <Skeleton loading={loading}> */}
        {courses.map((course: Course) => (
          <div className="flex h-[450px] md:w-80 card" key={course.uuid}>
            <CourseCard key={course.uuid} course={course} />
          </div>
        ))}
        {/* </Skeleton> */}
      </div>
    </div>
  );
}
