"use client";
import { sampleFeaturedCourses } from "@/shared/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Image } from "antd";
import React from "react";

const Course: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  const details = sampleFeaturedCourses.find(
    (course) => course.slug === pathname.split("/")[2],
  );
  return (
    <div>
      <div className="w-full flex bg-white h-[80px] ">
        <div className="pl-3 h-full w-[100px] flex justify-center items-center">
          <Link href={"/#courses"} onClick={() => router.replace("/")}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              className="h-full w-[60px]"
              preview={false}
            />
          </Link>
        </div>
        <div className="flex justify-center items-center self-center w-full">
          Navs
        </div>
      </div>
      <div className="flex h-[400px] w-full bg-gradient-to-r from-gndarkblue to-blue-900 ">
        <div className="pl-3 h-full flex flex-col justify-center basis-1/2">
          <div className="space-y-4">
            <h1 className="text-3xl text-white font-bold">{details?.name}</h1>
            <p className="text-sm px-2 text-white">{details?.short_intro}</p>
            <div className="flex pl-3 space-x-2">
              <button className="bg-blue-900 text-white px-3 py-1 rounded-md w-[100px] h-[50px]">
                Enroll now
              </button>
              <div className="flex  items-center justify-center bg-blue-900 text-white px-3 py-1 rounded-md w-[100px] h-[50px]">
                <Link
                  href={`https://globalnexusinstitute.illumidesk.com/courses/${details?.slug}`}
                  target="_blank"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" h-full w-full bg-cover basis-1/2 opacity-70"
          style={{
            backgroundImage: `url(${details?.main_image})`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default Course;
