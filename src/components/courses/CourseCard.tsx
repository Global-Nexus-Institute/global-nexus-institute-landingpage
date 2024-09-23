"use client";
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
    <div className="md:w-80 gap-4 h-full w-full shadow-lg ">
      <div
        className="flex justify-center h-[45%] w-full md:w-80 bg-image bg-cover"
        style={{ backgroundImage: `url(${course.main_image})` }}
      ></div>
      <div className="flex flex-col  h-[55%]">
        <div className="flex pl-3 items-center h-[25%] bg-red font-bold text-xl text-white">
          {course.name}
        </div>

        <div className="flex space-x-2 h-[75%] p-1 ">
          {/* title and desc */}
          {/* actions */}
          <div className="flex flex-col space-y-5 px-1 text-white  justify-center bg-blue-900/10">
            <div className="flex text-xs items-center justify-center h-full border-r-10 pr-4 basis-1/3">
              <span className="">
                {Math.floor(Math.random() * 51) + 50} students
              </span>
            </div>{" "}
            <div className="flex items-center h-full border-r-10 basis-1/3">
              <span className="text-xs">{course.activity_count} activites</span>
            </div>{" "}
            <div className="flex items-center justify-center h-full basis-1/3">
              <span className="text-xs">{course.lesson_count} lessons</span>
            </div>
          </div>
          <div className="flex flex-col justify-between py-2 text-white text-sm">
            <div>{course.short_intro}</div>
            <div className="flex justify-end">
              <span className="bg-blue-900/25 rounded-md p-2">
                <a
                  key={`${key}-slug`}
                  href={`https://globalnexusinstitute.illumidesk.com/courses/${course.slug}`}
                  target="_blank"
                >
                  Explore{" "}
                  <span>
                    <EyeFilled key="view" title={course.slug} />
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <Card
        key={course.uuid}
        hoverable
        style={{ width: "85%", height: "100%", backgroundColor: "darkblue" }}
        cover={
          <Image
            alt={course.slug}
            src={course.main_image}
            width="100%"
            height={"250px"}
          />
        }
        actions={actions}
      >
        <Meta
          className="text-white"
          title={course.name}
          description={
            <div className="flex h-[30%] md:h-full">
              <p className="text-sm">{course.short_intro}</p>
            </div>
          }
        />
      </Card> */}
    </div>
  );
};
