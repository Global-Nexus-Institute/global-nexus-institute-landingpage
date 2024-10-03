import { FacebookOutlined, LinkedinOutlined, InstagramFilled, XOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Image } from "antd";
import React from "react";

export default function Footer() {
  return (
    <div className="text-white flex flex-col w-full bg-blue-900/10 mt-10">
      <footer className="flex flex-col h-[300px] w-full mt-1">
        {" "}
        {/* Reduced margin here */}
        <div className="flex flex-col w-full h-full justify-center h-[20%]">
          <div className="md:flex w-full">
            <div className="flex pl-3 gap-4 w-full md:w-[90%]">
              <div className="flex w-[50%] flex justify-center items-center mb-1">
                {" "}
                {/* Reduced margin below logo */}
                <Image
                  src="/assets/images/logo.png"
                  width={"30%"}
                  height={120}
                  alt="logo"
                  className="bg-gray-500 rounded-sm"
                />
              </div>
              <div className="flex w-[20%] flex-col">
                <div className="mb-3">With Global Nexus Institute</div>
                <div className="text-gray-500">
                  Connect with future tech leaders
                </div>
                <div className="text-gray-500">
                  Earn international certifications
                </div>
                <div className="text-gray-500">
                  Master key tech skills of 21st Century
                </div>
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
  );
}
