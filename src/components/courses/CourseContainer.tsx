import React, { useEffect } from "react";
import { CourseCard } from "./CourseCard";
import { useAppSelector } from "@/lib/store/store.hooks";
import { useCourses } from "@/shared/hooks/courses/courses.hooks";
import { Course } from "@/shared/types";
import { Skeleton } from "antd";
import { RootState } from "@/lib/store/store";

export default function CourseContainer() {
  const { getCourses } = useCourses();
  const { courses, loading } = useAppSelector((state: RootState) => state.courses);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="bg-transparent p-3">
      <div className="flex items-center flex-col px-3 md:grid md:grid-cols-3 gap-2">
        <Skeleton loading={loading}>
          {courses.map((course: Course) => (
            <CourseCard key={course.uuid} course={course} />
          ))}
        </Skeleton>
      </div>
    </div>
  );
}
