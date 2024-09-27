"use client";
import TopMenu from "@/components/navigation/TopMenu";
import CourseContainer from "@/components/courses/CourseContainer";
import { Button, Carousel, Image } from "antd";
import { carouselData, teamMembers } from "@/shared/data";
import { IntroCard } from "@/components/content/intro/IntroCard";
import Link from "next/link";
import { SponsorsPartners } from "@/components/content/sponsors-partners/SponsorsPartners";
import {
  FacebookOutlined,
  InstagramFilled,
  LinkedinOutlined,
  XOutlined,
} from "@ant-design/icons";

export default function Home() {
  return (
    <div className="w-full">
      <header
        className="h-[100vh] w-full bg-cover overlay bg-gndarkblue"
        style={{
          backgroundImage: `url(/assets/images/bgimage.jpg)`,
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
        }}
      >
        <TopMenu />
        <div className="h-[70%] px-10 flex flex-col justify-start items-start">
          <div className="text-[2rem] md:text-[6rem] font-bold bg-gradient-to-r bg-clip-text text-transparent from-gnblueLight to-gnpink">
           Welcome to Global Nexus Institute<br />
                  {/* Innovation & Excellence */}
          </div>
        </div>


        <div className="flex h-[21%] justify-center  bg-gradient-to-b from-gnpink to-gnpingdark">
          <div className="flex w-[80%] justify-center md:items-center h-full text-[0.8rem] md:text-[1.5rem] text-center text-white md:px-10">
            Gain insights from industry leaders at Global Nexus Institute. Our
            expert-led sessions offer valuable knowledge in Data Science,
            Computer Basics, AI, and Cyber-Security. Enhance your skills and
            stay ahead in your field with us.
          </div>
        </div>
      </header>
      <main className="h-full flex flex-col ">
        <section>
          <div className=" h-[400px] bg-gradient-to-r  to-gndarkblue from-purple-900 my-10 ">
            {/* Carousel info section */}
            <Carousel arrows className="h-[100%]">
              {carouselData.map((item, index) => (
                <IntroCard data={item} key={index} />
              ))}
            </Carousel>
          </div>
        </section>

        {/* Course section */}
        <section className="flex container mx-auto py-10 w-full">
          <div className="flex flex-col space-y-100 items-center w-full" id="courses">
            <div className="flex flex-col w-full space-y-10 container mx-auto px-8 md:px-16 lg:px-90">
            {/* <div className="w-[100%] mx-auto"> */}
              <h1 className="text-gnblueLight text-4xl">  {/* Centered the text */}
                Our Featured Courses
              </h1>
              <div className="flex h-auto justify-center bg-gradient-to-b from-gnpink to-gnpingdark p-8"> {/* Added padding for better spacing */}
                <div className="flex w-full justify-center md:items-center h-full text-[1.5rem] md:text-[1.5rem] text-center text-white">
                  Global Nexus Institute offers practical courses in Data Science, Artificial Intelligence,
                  Computer Basics, Cyber-Security, SQL for Data Analysis and Business Analytics,
                  allowing students to learn through real-life simulations, gaining essential
                  skills for today's competitive job market.
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full">
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
          <div className="h-[200px] mx-auto w-full max-w-screen-xl px-5"> {/* Centered with max-width and padding */}
            {/* Carousel info section */}
            <div className="flex flex-col justify-center h-full">
              <div className="flex md:text-[2.5rem] font-bold bg-gradient-to-r bg-clip-text text-transparent from-white to-gnblueLight">
                Why is data compared to oil as the key resource for the future?
              </div>
              <div className="w-auto md:text-xl text-white mt-4">
                <span className="border p-3">
                  Global Nexus Institute Values: Innovation & Excellence{" "}
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* Sponsors and Partners */}
        <section className="bg-gradient-to-b from-gnpink to-gndarkblue p-10">
          <SponsorsPartners />
        </section>

        {/* Team section */}
        <section>
          <div className="flex flex-col items-center" id="team">
            <h1 className="text-center text-gnblueLight text-4xl my-2">
              Our Team
            </h1>
            <div className="md:grid md:grid-cols-3 gap-3 flex-col justify-center w-[78%]">
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
            <div className="bg-overlay flex flex-col justify-center items-center md:flex-row md:items-center md:space-x-2 gap-2 h-[80%] w-[86%] mt-5">
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
                  &lsquo;&lsquo; I am excited to have completed the Python for
                  Data Science course at Global Nexus Institute, gaining
                  invaluable skills. I highly recommend this course to anyone
                  passionate about data science. &rsquo;&rsquo;
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
        <footer className="flex flex-col h-[300px] w-full mt-1"> {/* Reduced margin here */}
          <div className="flex flex-col w-full h-full justify-center h-[20%]">
            <div className="md:flex w-full">
              <div className="flex pl-3 gap-4 w-full md:w-[90%]">
                <div className="flex w-[50%] flex justify-center items-center mb-1"> {/* Reduced margin below logo */}
                  <Image
                    src="/assets/images/logo.png"
                    width={"25%"}
                    height={100}
                    alt="logo"
                    className="bg-gray-500 rounded-sm"
                  />
                </div>
                <div className="flex w-[20%] flex-col">
                  <div className="mb-3">With Global Nexus Institute</div>
                  <div className="text-gray-500">Connect with future tech leaders</div>
                  <div className="text-gray-500">Earn international certifications</div>
                  <div className="text-gray-500">Master key tech skills of 21st C</div>
                </div>
                <div className="flex w-[10%] flex-col">
                  <div className="mb-3">WHAT WE DO</div>
                  <div className="text-gray-500">Training</div>
                  <div className="text-gray-500">Consultancy</div>
                  <div className="text-gray-500">Recent Trends</div>
                </div>
                <div className="flex w-[10%] flex-col">
                  <div className="mb-3">COMPANY</div>
                  <div className="text-gray-500">About Us</div>
                  <div className="text-gray-500">Events</div>
                  <div className="text-gray-500">Careers</div>
                </div>
                <div className="flex flex-col w-[15%] md:pr-5 ">
                  <div className="mb-3">FOLLOW US ON SOCIAL MEDIA</div>
                  <div className="flex space-x-2">
                    <Link
                      href={
                        "https://www.facebook.com/profile.php?id=61560364154598 "
                      }
                      className="text-gray-500 text-2xl"
                    >
                      <FacebookOutlined />
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/company/global-nexus-institute/?viewAsMember=true "
                      }
                      className="text-gray-500 text-2xl"
                    >
                      <LinkedinOutlined />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/globalnexusinstitute/ "}
                      className="text-gray-500 text-2xl"
                    >
                      <InstagramFilled />
                    </Link>
                    <Link
                      href={"https://x.com/GlobalNexusInt"}
                      className="text-gray-500 text-2xl"
                    >
                      <XOutlined />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[25%] px-5 flex justify-center space-x-3 text-gndarkblue text-md font-bold px-3 items-center gap-3 overflow-x-auto">
              <div className="flex p-1 text-white text-xs md:text-sm">
                Email: info@globalnexus.co.rw
              </div>
              <div className="flex p-2 text-white text-xs md:text-sm">
                Location: Norrsken, KN 78 St, Kigali, Rwanda
              </div>
              <div className="flex p-2 text-white text-xs md:text-sm">
                Phone: +250787406140
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="flex h-[100px] justify-center items-center bg-gradient-to-b from-gnpink to-gnpingdark text-white">
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
