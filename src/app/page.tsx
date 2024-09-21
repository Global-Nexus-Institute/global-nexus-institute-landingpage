"use client";
import TopMenu from "@/components/navigation/TopMenu";
import CourseContainer from "@/components/courses/CourseContainer";
import { Button, Carousel, Image } from "antd";
import { carouselData, teamMembers } from "@/shared/data";
import { IntroCard } from "@/components/content/intro/IntroCard";
import Link from "next/link";
import { SponsorsPartners } from "@/components/content/sponsors-partners/SponsorsPartners";
import {
  InstagramFilled,
  LinkedinOutlined,
  XOutlined,
} from "@ant-design/icons";

export default function Home() {
  return (
    <div className="w-full">
      <header className="md:h-[100vh] w-full">
        <TopMenu />
        <div className="h-[70%] px-10 flex flex-col justify-center ">
          <div className=" text-[2rem] md:text-[4rem] font-bold bg-gradient-to-r bg-clip-text text-transparent from-gnblueLight to-gnpink">
            Welcome to Global Nexus Institute !! Learn & Earn
          </div>
          <div className="flex gap-2 md:text-[2vh] text-white ">
            <div className="">
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
          <div className="flex w-[80%] justify-center md:items-center h-full text-[0.8rem] text-center text-white md:px-10">
            Gain insights from industry leaders at Global Nexus Institute. Our
            expert-led sessions offer valuable knowledge in Data Science,
            Computer Basics, AI, and Cyber-Security. Enhance your skills and
            stay ahead in your field with us.
          </div>
        </div>
      </header>
      <main className="h-full">
        <section>
          <div className="h-[400px] bg-purple-900 ">
            {/* Carousel info section */}
            <Carousel arrows className="h-[100%]">
              {carouselData.map((item, index) => (
                <IntroCard data={item} key={index} />
              ))}
            </Carousel>
          </div>
        </section>

        {/* Course section */}
        <section className="flex justify-center overflow-scroll">
          <div
            className="container flex flex-col items-center mt-10"
            id="courses"
          >
            <h1 className="text-gnblueLight text-4xl text-center">
              Our Featured Courses
            </h1>
            <CourseContainer />
          </div>
        </section>

        {/* Adds */}
        <section className="my-5">
          <div className="h-[400px] bg-purple-900 ">
            {/* Carousel info section */}
            <Carousel arrows className="h-[100%]">
              {carouselData.map((item, index) => (
                <IntroCard data={item} key={index} />
              ))}
            </Carousel>
          </div>
        </section>

        {/* Sponsors and Partners */}
        <section className="bg-gradient-to-b from-gnpink to-gndarkblue p-10 ">
          <SponsorsPartners />
        </section>

        {/* Team section */}
        <section>
          <div className="flex flex-col items-center" id="team">
            <h1 className="text-center text-gnblueLight text-4xl my-2">Our Team</h1>
            <div className="md:grid md:grid-cols-3 gap-3 flex-col justify-center w-[90%]">
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
        </section>

        {/* Testimonals */}
        <section className="mt-5 ">
          <div className=" items-center flex flex-col">
            <h1 className="text-center text-gnblueLight text-4xl">
              Testimonals
            </h1>
            <div className="bg-overlay flex flex-col justify-center items-center md:flex-row md:items-center md:space-x-2 gap-2 h-[80%] w-[80%] mt-5">
              <div
                className="flex flex-col pt-2 items-center w-80%] md:w-[45%] h-auto md:h-full bg-gnpinkdark bg-image overlay"
                style={{
                  backgroundImage: `url(https://globalnexus.co.rw/images/hero_1.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div className="w-[100px] h-[100px] rounded-full mb-2">
                  <Image
                    src="https://globalnexus.co.rw/images/samuelson.jpg"
                    alt="t2"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </div>
                <div className="my-5 text-2xl text-white">Samuelson MUKIZA</div>
                <div className="flex px-3 w- text-white text-center justify-center italic text-2xl py-3">
                  “ I am excited to have completed the Python for Data Science
                  course at Global Nexus Institute, gaining invaluable skills. I
                  highly recommend this course to anyone passionate about data
                  science. ”
                </div>
              </div>
              <div
                className="flex flex-col pt-2 items-center w-full md:w-[45%] h-auto md:h-full bg-gnpinkdark bg-image overlay"
                style={{
                  backgroundImage: `url(https://globalnexus.co.rw/images/hero_1.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div className="w-[100px] h-[100px] rounded-full mb-2">
                  <Image
                    src="https://globalnexus.co.rw/images/ndamije.png"
                    alt="t2"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </div>
                <div className="my-5 text-2xl text-white">Didier Ngamije</div>
                <div className="flex justify-center px-3 w-full text-white text-center italic text-2xl justify-center py-3">
                  “ Global Nexus Institute's Python for Data Science course has
                  significantly improved My data analysis skills, with
                  knowledgeable and supportive instructors. I highly recommend
                  you to Join Global Nexus Institute courses.”
                </div>
              </div>
              {/* <div
              className="flex flex-col pt-2 items-center w-[60%] md:w-[30%] h-auto md:h-full bg-gnpinkdark bg-image overlay"
              style={{
                backgroundImage: `url(https://globalnexus.co.rw/images/hero_1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundBlendMode: "overlay",
              }}
            >
              <div>Person 3</div>
              <div className="w-[100px] h-[100px] rounded-full">
                <Image
                  src="https://globalnexus.co.rw/images/samuelson.jpg"
                  alt="t2"
                  className="w-[60px] h-[60px] rounded-full"
                />
              </div>
              <div className="w-full text-white justify-center py-3"></div>
            </div> */}
            </div>
          </div>
        </section>
      </main>
      <div className="text-white flex flex-col w-full bg-blue-900/10 mt-10">
        <footer className="flex  flex-col h-[400px] w-full mt-2">
          <div className="md:flex w-full  h-[80%] ">
            <div className="flex space-x-3 md:w-[50%]">
              <div className="w-[50%] flex justify-center items-center">
                <Image
                  src="/assets/images/logo.png"
                  width={"100%"}
                  height={100}
                  alt="logo"
                  className="bg-gray-500 rounded-sm"
                />{" "}
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-5">
                  Imagine Your Future with Global Nexus
                </h3>
                <p>
                  We bring expertise, experience, and cutting-edge solutions to
                  help organizations navigate their digital transformation
                  journey.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 space-x-md w-full md:w-[50%]">
              <div className="flex flex-col basis-1/4">
                <div className="mb-3">WHAT WE DO</div>
                <div className="text-gray-500">Training</div>
                <div className="text-gray-500">Consultancy</div>
                <div className="text-gray-500">Recent Trends</div>
              </div>
              <div className="flex flex-col basis-1/4">
                <div className="mb-3">COMPANY</div>
                <div className="text-gray-500">About Us</div>
                <div className="text-gray-500">Events</div>
                <div className="text-gray-500">Careers</div>
              </div>
              <div className="flex flex-col basis-1/3 justify-center">
                <div className="mb-3">FOLLOW US ON SOCIAL MEDIA</div>
                <div className="flex space-x-4">
                  <div className="text-gray-500 text-2xl">
                    <LinkedinOutlined />
                  </div>
                  <div className="text-gray-500  text-2xl">
                    <InstagramFilled />
                  </div>
                  <div className="text-gray-500  text-2xl">
                    <XOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[20%] px-10 flex justify-center space-x-10 text-gndarkblue text-md font-bold px-3 items-center gap-3">
            <div className="p-2 bg-white">Email: info@globalnexus.co.rw</div>
            <div className="p-2 bg-white">Location: Kigali Norsken</div>
            <div className="p-2 bg-white">Phone: +250787406140</div>
          </div>
        </footer>
      </div>
      <div className="flex h-[100px] justify-center items-center  bg-gradient-to-b from-gnpink to-gnpingdark text-white">
        Copyright ©2024 All rights reserved by &nbsp;{" "}
        <a
          href={"https://globalnexusinstitute.illumidesk.com"}
          className="underline"
        >
          {" "}
          Global Nexus Institute
        </a>
      </div>
    </div>
  );
}
