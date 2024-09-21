import { Course } from "@/shared/types";
import { EyeFilled } from "@ant-design/icons";
import { Card, Image } from "antd";
import React from "react";

interface CourseCardProps {
  course: Course;
  key: string;
}

const { Meta } = Card;

export const CourseCard: React.FC<CourseCardProps> = ({ course, key }) => {
  const actions = [
    <div key={`${key}-student`}>{course.student_count} students</div>,
    <div key={`${key}-lesson`}>{course.lesson_count} Lessons</div>,
    <a
      key={`${key}-slug`}
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
    <div className="container">
      <Card
        key={course.uuid}
        hoverable
        style={{ width: "85%" }}
        cover={
          <Image
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
    </div>
  );
};
