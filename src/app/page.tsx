"use client";
import CourseContainer from "@/components/courses/CourseContainer";
import {  Carousel, Image } from "antd";
import { carouselData, teamMembers } from "@/shared/data";
import { IntroCard } from "@/components/content/intro/IntroCard";

import { SponsorsPartners } from "@/components/content/sponsors-partners/SponsorsPartners";


export default function Home() {
  return (
    <div className=" w-full h-full overflow-x-hidden">

      <header
        className="mt-20 h-[93vh] w-full flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat  overlay bg-gndarkblue"
        style={{
          backgroundImage: `url(/assets/images/bgimage.jpg)`,
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-[70%] px-10 flex flex-col justify-start items-start">
          <div className="text-[2rem] md:text-[6rem] font-bold bg-gradient-to-r bg-clip-text text-transparent from-gnblueLight to-gnpink">
            Welcome to Global Nexus Institute
            <br />
            {/* Innovation & Excellence */}
          </div>
        </div>

        {/* base section */}
        <div className="flex h-[20%] md:w-[77.5%]  bg-gradient-to-b from-gnpink to-gnpingdark  justify-center items-center">
          {" "}
          {/* Added padding for better spacing */}
          <div className="flex justify-center items-center h-full text-[0.8rem] md:text-[1.5rem] text-center text-white ">
            Gain insights from industry leaders at Global Nexus Institute. Our
            expert-led sessions offer valuable knowledge in Data Science,
            Computer Basics, AI, and Cyber-Security. Enhance your skills and
            stay ahead in your field with us.
            {/* skills for today's competitive job market. */}
          </div>
        </div>
      </header>

      <main className="h-full flex flex-col ">
        <section>
          <div className="h-[400px] bg-gradient-to-r to-gndarkblue from-purple-900 my-10 mx-auto max-w-7xl px-8">
            {/* Carousel info section */}
            <Carousel arrows className="h-[100%]">
              {carouselData.map((item, index) => (
                <IntroCard data={item} key={index} />
              ))}
            </Carousel>
          </div>
        </section>

        {/* Course section */}
        <section className="flex  mx-auto py-10 w-[85%]">
          <div
            className="flex flex-col space-y-100 items-center w-full"
            id="courses"
          >
            <div className="flex flex-col w-full space-y-10  mx-auto px-8 md:px-16 lg:px-90">
              {/* <div className="w-full mx-auto"> */}
              <h1 className="text-gnblueLight text-4xl">
                {" "}
                {/* Centered the text */}
                Our Featured Courses
              </h1>
              <div className="flex h-auto justify-center bg-gradient-to-b from-gnpink to-gnpingdark p-8">
                {" "}
                {/* Added padding for better spacing */}
                <div className="flex w-full justify-center items-center h-full text-[1rem] md:text-[1.5rem] text-center text-white">
                  Global Nexus Institute offers practical courses in Data
                  Science, Artificial Intelligence, Computer Basics,
                  Cyber-Security, SQL for Data Analysis and Business Analytics,
                  allowing students to learn through real-life simulations,
                  gaining essential skills for today&apos;s competitive job
                  market.
                </div>
              </div>
            </div>
            <div className="flex  w-full">
              <CourseContainer />
            </div>
          </div>
        </section>

        {/* Adds */}
        <section
          className="my-10 bg-overlay bg-gndarkblue"
          style={{
            backgroundImage: `url("/assets/images/bg2.jpg")`,
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-center h-[200px] mx-auto w-full px-5">
            {" "}
            {/* Centered with max-width and padding */}
            {/* Carousel info section */}
            <div className="flex flex-col justify-center h-full md:w-[80%]">
              <div className="flex md:text-[2.5rem] font-bold bg-gradient-to-r bg-clip-text text-transparent from-white to-gnblueLight">
                Why is data compared to oil as the key resource for the future?
              </div>
              <div className="w-auto border md:border-none md:text-xl text-sm text-white mt-4">
                <span className="md:border p-3">
                  Global Nexus Institute Values: Innovation & Excellence{" "}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors and Partners */}
        <section className="flex justify-center w-full bg-gradient-to-b from-gnpink to-gndarkblue p-10 md:p-20">
          <SponsorsPartners />
        </section>

        {/* Team section */}
        <section id="team" className="max-h-[800px] overflow-y-scroll scrollbar-hidden">
          <div className="flex flex-col items-center" id="team">
            <h1 className="text-center text-gnblueLight text-4xl my-10">
              Our Team
            </h1>
            <div className="md:grid md:grid-cols-4 gap-4 flex-col justify-center w-[77%]">
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
        <section className="my-10 ">
          <div className=" items-center flex flex-col">
            <h1 className="text-center text-gnblueLight text-4xl my-10">
              Recent Trends
            </h1>
            <div className="bg-overlay flex flex-col justify-center items-center md:flex-row md:items-center md:space-x-2 gap-2 h-[80%] w-[86%] mt-5">
              <div
                className="flex flex-col pt-2 items-center w-[80%] md:w-[45%] h-auto md:h-full bg-gnpinkdark bg-image overlay"
                style={{
                  backgroundImage: `url(https://dda.co.rw/images/hero_1.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div className="w-[100px] h-[100px] rounded-full mb-2">
                  <Image
                    src="https://dda.co.rw/images/samuelson.jpg"
                    alt="t2"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </div>
                <div className="my-5 text-2xl text-white">Samuelson MUKIZA</div>
                <div className="flex px-3  text-white text-center justify-center italic text-2xl py-3">
                  &lsquo;&lsquo; I am excited to have completed the Python for
                  Data Science course at Global Nexus Institute, gaining
                  invaluable skills. I highly recommend this course to anyone
                  passionate about data science. &rsquo;&rsquo;
                </div>
              </div>
              <div
                className="flex flex-col pt-2 items-center w-full md:w-[45%] h-auto md:h-full bg-gnpinkdark bg-image overlay"
                style={{
                  backgroundImage: `url(https://dda.co.rw/images/hero_1.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div className="w-[100px] h-[100px] rounded-full mb-2">
                  <Image
                    src="https://dda.co.rw/images/ndamije.png"
                    alt="t2"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </div>
                <div className="my-5 text-2xl text-white">Didier Ngamije</div>
                <div className="flex justify-center px-3 w-full text-white text-center italic text-2xl justify-center py-3">
                  &lsquo;&lsquo; Global Nexus Institute&rsquo;s Python for Data
                  Science course has significantly improved My data analysis
                  skills, with knowledgeable and supportive instructors. I
                  highly recommend you to Join Global Nexus Institute
                  courses.&rsquo;&rsquo;
                </div>
              </div>
              {/* <div
              className="flex flex-col pt-2 items-center w-[60%] md:w-[30%] h-auto md:h-full bg-gnpinkdark bg-image overlay"
              style={{
                backgroundImage: `url(https://dda.co.rw/images/hero_1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundBlendMode: "overlay",
              }}
            >
              <div>Person 3</div>
              <div className="w-[100px] h-[100px] rounded-full">
                <Image
                  src="https://dda.co.rw/images/samuelson.jpg"
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
    </div>
  );
}
