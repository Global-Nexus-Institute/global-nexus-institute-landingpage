"use client";
import React from "react";
import "../research/research.css";
import { List } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export default function DonatePage() {
  const listItems = [
    {
      title: "",
      content:
        "Provide scholarships for talented but underprivileged students.",
    },
    {
      title: "",
      content:
        "Support the creation of state-of-the-art learning environments.",
    },
    {
      title: "",
      content:
        "Help us offer certifications from global institutions, like NCC (UK)",
    },
    {
      title: "",
      content:
        "Every contribution, big or small, helps us build a brighter future for our students",
    },
  ];
  return (
    <div className="mt-10 researh-body flex flex-col items-center justify-center">
      <header className="mt-20 font-bold w-full">
        <h1>Global Nexus Institute - Donate Now</h1>
      </header>
      <div className="research-container">
        <section>
          <h2 className="text-[2.5em] font-bold">
            Empowering Communities Through Tech Education
          </h2>
          <p className="text-[1.5em] text-white">
            Global Nexus Institute is committed to providing accessible,
            high-quality training in Data Science, Artificial Intelligence,
            Cyber-Security, and essential digital skills. Your contribution will
            help us empower underrepresented groups, including women, young
            mothers, and people with disabilities, to thrive in the digital
            economy.
          </p>
        </section>

        <section>
          <h2 className="text-[2.5em] font-bold">Why Donate?</h2>
          <List
            itemLayout="vertical"
            size="small"
            dataSource={listItems}
            renderItem={(item) => (
              <List.Item key={item.title}>
                <span className="text-[1.5em] text-white">
                  <CheckOutlined
                    style={{ color: "#2EB9C2", fontSize: "1em" }}
                  />{" "}
                  {item.content}
                </span>
              </List.Item>
            )}
          />
        </section>

        <section className="flex flex-col w-[100%]">
          <h2 className="text-[2.5em] font-bold">Donate</h2>
          <p className="text-[1.5em] text-white">
            Explore some of our ongoing research projects and how our services
            support impactful outcomes:
          </p>
          <div className="flex bg-white my-2 border w-[250px] items-center h-16">
            <span className="flex text-[1.3em] bg-gray-200 items-center px-4 font-bold h-[100%]  border ">
              $
            </span>
            <input
              className="pl-4 text-[1.3em]  h-[80%] w-[100%]"
              type="number"
              placeholder="500.00"
              name="anount"
            />
          </div>
          <div className="flex gap-2 w-[100%]">
            <div className="h-16 text-[1.3em]   flex justify-center items-center p-4 bg-orange-900 text-white font-bold">
              <button>$100.00</button>
            </div>
            <div className="flex justify-center items-center h-16 text-[1.3em]   p-4 bg-orange-900 text-white font-bold">
              <button>$250.00</button>
            </div>
            <div className="h-16 text-[1.3em]   flex justify-center items-center p-4 bg-orange-900 text-white font-bold">
              <button>$1000.00</button>
            </div>
            <div className="h-16 text-[1.3em]  flex justify-center items-center p-4 bg-orange-900 text-white font-bold">
              <button>Custom Amount</button>
            </div>
            <div className="h-16 text-[1.3em]  flex justify-center items-center p-4 bg-orange-900 text-white font-bold">
              <button className="capitalize">
                Donate Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
