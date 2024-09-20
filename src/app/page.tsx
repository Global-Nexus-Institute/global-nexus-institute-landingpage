"use client";
import TopMenu from "@/components/navigation/TopMenu";
import CourseContainer from "@/components/courses/CourseContainer";
import { Button, Carousel, Image } from "antd";
import { carouselData, teamMembers } from "@/shared/data";
import { IntroCard } from "@/components/content/intro/IntroCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <header className="h-[100vh] w-full">
        <TopMenu />
        <div className="h-[70%] px-10 flex flex-col justify-center ">
          <div className="text-[2rem] md:text-[4rem] font-bold bg-gradient-to-r bg-clip-text text-transparent from-gnblueLight to-gnpink">
            Welcome to Global Nexus Institute !! Learn & Earn
          </div>
          <div className="flex gap-2 md:text-[2rem] text-white">
            <div>
              <Button>
                <Link
                  href={"https://form.jotform.com/242266972261561"}
                  target="_blank"
                >
                  Course Application
                </Link>
              </Button>
            </div>
            <div>
              <Button>
                <Link
                  href={"https://form.jotform.com/242267742948569"}
                  target="_blank"
                >
                  Volunteer Application
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex h-[20%] justify-center  bg-gradient-to-b from-gnpink to-gnpingdark">
          <div className="flex w-[80%] justify-center md:items-center h-full text-[0.8em] md:text-[1rem] text-center text-white md:px-10">
            Gain insights from industry leaders at Global Nexus Institute. Our
            expert-led sessions offer valuable knowledge in Data Science,
            Computer Basics, AI, and Cyber-Security. Enhance your skills and
            stay ahead in your field with us.
          </div>
        </div>
      </header>
      <main className="h-full">
        <div className="h-[400px] bg-purple-900 ">
          {/* Carousel info section */}
          <Carousel arrows className="h-[100%]">
            {carouselData.map((item, index) => (
              <IntroCard data={item} key={index} />
            ))}
          </Carousel>
        </div>
        {/* Course section */}
        <div className="h-auto pt-10" id="courses">
          <h1 className="text-gnblueLight text-4xl text-center">
            Our Featured Courses
          </h1>
          <CourseContainer />
        </div>
        {/* Instructor section */}
        <div className="h-auto" id="team">
          <h1 className="text-center text-gnblueLight text-4xl">Our Team</h1>
          <div className="md:grid md:grid-cols-3 gap-2 flex-col justify-center">
            {teamMembers.map(({ names, profileImage, title }, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-white rounded-md h-[200px] py-1"
              >
                <div className="relative h-[40%] flex justify-center w-[99%] bg-gndarkblue rounded-md">
                  <Image
                    src={`${profileImage}`}
                    alt={""}
                    width={100}
                    height={100}
                    className="absolute rounded-full  -bottom-2 border-2 border-white image-cover"
                  />
                </div>

                <div className="flex flex-col justify-center items-center bg-white h-[200px]">
                  <h2>{names}</h2>
                  <h3>{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonals */}
        <div className="h-screen pt-5">
          <h1 className="text-center text-gnblueLight text-4xl">Testimonals</h1>
          <div className="flex flex-col justify-center items-center md:flex-wrap md:space-x-2 gap-2 h-[80%]">
            <div className="flex flex-col pt-2 items-center w-[60%] md:w-[30%] h-auto md:h-full bg-gnpinkdark">
              Person 1
              <div>
                <Image
                  src=""
                  alt=""
                  className="w-[60px] h-[60px] rounded full"
                />
              </div>
            </div>
            <div className="w-[60%] md:w-[30%] h-auto md:h-full bg-gnpinkdark">
              Person 2
            </div>
            <div className="w-[60%] md:w-[30%] h-auto md:h-full bg-gnpinkdark">
              Person 3
            </div>
          </div>
        </div>
      </main>
      <div>
        <footer className="h-screen flex">
          <div className="flex">
            <div>Logo and desc</div>
            <div>Links</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
