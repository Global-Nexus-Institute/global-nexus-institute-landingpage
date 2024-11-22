"use client";
import React from "react";
import "./research.css";
import { List } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export default function ResearchPage() {
  const listItems = [
    {
      title: "Healthcare Data Analysis",
      content:
        "Data collection and cleaning for predictive analytics to improve healthcare outcomes and resource allocation.",
    },
    {
      title: "Education & AI",
      content:
        "Visualization and advising support for students using AI to personalize learning in education research projects.",
    },
    {
      title: "Agricultural Data Insights",
      content:
        "Visualization and data cleaning for climate-smart agriculture initiatives and crop yield predictions.",
    },
  ];
  return (
    <div className="mt-10 researh-body flex flex-col items-center justify-center">
      <header className="mt-20 font-bold w-full">
        <h1>Research Services at Global Nexus Institute</h1>
      </header>
      <div className="research-container">
        <section>
          <h2 className="text-[2.5em] font-bold">
            Welcome to Our Research Services
          </h2>
          <p className="text-[1.5em] text-white">
            Global Nexus Institute offers a range of research services designed
            to support individuals, businesses, and institutions. From data
            collection and cleaning to data visualization and student advising,
            we provide high-quality, customized solutions for research and
            academic projects.
          </p>
        </section>

        <section>
          <h2 className="text-[2.5em] font-bold">Our Mission</h2>
          <p className="text-[1.5em] text-white">
            Our mission is to empower our clients with reliable research
            support, helping them turn data into actionable insights. We are
            dedicated to enhancing research capabilities and providing hands-on
            support to students and organizations across various sectors.
          </p>
        </section>

        <section>
          <h2 className="text-[2.5em] font-bold">Our Research Services</h2>
          <div className="services-grid">
            <div className="service-box">
              <h3 className="text-[2em] font-bold">Data Collection</h3>
              <p className="text-[1.3em]">
                Comprehensive data gathering services using the latest
                methodologies and tools, ensuring data accuracy and relevance
                for your research goals.
              </p>
            </div>
            <div className="service-box">
              <h3 className="text-[2em] font-bold">Data Cleaning</h3>
              <p className="text-[1.3em]">
                Professional data cleaning services to prepare your data for
                analysis by handling inconsistencies, filling in missing values,
                and ensuring data integrity.
              </p>
            </div>
            <div className="service-box">
              <h3 className="text-[2em] font-bold">Data Visualization</h3>
              <p className="text-[1.3em]">
                Custom data visualization solutions to help you communicate your
                findings effectively, using charts, graphs, and interactive
                dashboards.
              </p>
            </div>
            <div className="service-box">
              <h3 className="text-[2em] font-bold">Reporting</h3>
              <p className="text-[1.3em]">
                In-depth reporting solutions tailored to your research needs,
                providing clear and actionable insights from complex data
                analyses.
              </p>
            </div>
            <div className="service-box full-width-box">
              <h3 className="text-[2em] font-bold">
                Student Support and Advising
              </h3>
              <p className="text-[1.3em]">
                We offer personalized support to students at all stages of their
                research projects, from initial concept development to data
                analysis and reporting. Our advisors provide expert guidance to
                help students meet academic standards and achieve their research
                goals. With our support, students gain confidence and skills to
                excel in their academic and professional journeys.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[2.5em] font-bold">Our Projects</h2>
          <p className="text-[1.5em] text-white">
            Explore some of our ongoing research projects and how our services
            support impactful outcomes:
          </p>
          <List
            itemLayout="vertical"
            size="small"
            dataSource={listItems}
            renderItem={(item) => (
              <List.Item key={item.title}>
                <h3 className="font-bold text-[1.5em] text-white">
                  <span>
                    <CheckOutlined
                      style={{ color: "#2EB9C2", fontSize: "1em" }}
                    />
                  </span>{" "}
                  {item.title}
                </h3>
                <p className="text-[1.3em] indent-1 text-white">{item.content}</p>
              </List.Item>
            )}
          />
        </section>

        <section>
          <h2 className="text-[2.5em] font-bold">Collaborate with Us</h2>
          <p className="text-[1.5em] text-white">
            We welcome partnerships with educational institutions, research
            organizations, and businesses. For collaboration inquiries or to
            learn more about our services, please contact us at{" "}
            <a href="mailto:info@globalnexus.co.rw">
              info@globalnexus.co.rw| +250787406140
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
