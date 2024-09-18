import { Course } from "@/shared/types";
import { EyeFilled } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

interface CourseCardProps {
  course: Course;
  key: string;
}

const { Meta } = Card;

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const actions = [
    <div>{course.student_count} students</div>,
    <div>{course.lesson_count} Lessons</div>,
    <a
      href={`https://globalnexusinstitute.illumidesk.com/courses/${course.slug}`}
      target="_blank"
    >
      View{" "}
      <span>
        <EyeFilled key="view" title={course.slug} />
      </span>
    </a>,
  ];
  return (
    <Card
      hoverable
      style={{ width: "85%" }}
      cover={
        <img
          alt={course.slug}
          src={course.main_image}
          width="100%"
          height={"10%"}
        />
      }
      className="sm:h-[300px] md:h-[400px] lg:h-auto"
      actions={actions}
    >
      <Meta
        title={course.name}
        description={
          <div className="flex h-[30%] md:h-full">
            <p className="text-sm">{course.short_intro}</p>
          </div>
        }
      />
    </Card>
  );
};
