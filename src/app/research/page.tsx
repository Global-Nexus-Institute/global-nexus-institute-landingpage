import React from "react";
import "./research.css";

export default function ResearchPage() {
  return (
    <div className="mt-10 researh-body flex flex-col items-center justify-center">
      <header className="mt-20 font-bold w-full">
        <h1>Research Services at Global Nexus Institute</h1>
      </header>
      <div className="research-container">
        <section>
          <h2>Welcome to Our Research Services</h2>
          <p className="text-white">
            Global Nexus Institute offers a range of research services designed
            to support individuals, businesses, and institutions. From data
            collection and cleaning to data visualization and student advising,
            we provide high-quality, customized solutions for research and
            academic projects.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p className="text-white">
            Our mission is to empower our clients with reliable research
            support, helping them turn data into actionable insights. We are
            dedicated to enhancing research capabilities and providing hands-on
            support to students and organizations across various sectors.
          </p>
        </section>

        <section>
          <h2>Our Research Services</h2>
          <div className="services-grid">
            <div className="service-box">
              <h3>Data Collection</h3>
              <p >
                Comprehensive data gathering services using the latest
                methodologies and tools, ensuring data accuracy and relevance
                for your research goals.
              </p>
            </div>
            <div className="service-box">
              <h3>Data Cleaning</h3>
              <p >
                Professional data cleaning services to prepare your data for
                analysis by handling inconsistencies, filling in missing values,
                and ensuring data integrity.
              </p>
            </div>
            <div className="service-box">
              <h3>Data Visualization</h3>
              <p >
                Custom data visualization solutions to help you communicate your
                findings effectively, using charts, graphs, and interactive
                dashboards.
              </p>
            </div>
            <div className="service-box">
              <h3>Reporting</h3>
              <p >
                In-depth reporting solutions tailored to your research needs,
                providing clear and actionable insights from complex data
                analyses.
              </p>
            </div>
            <div className="service-box full-width-box">
              <h3>Student Support and Advising</h3>
              <p>
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
          <h2>Our Projects</h2>
          <p className="text-white">
            Explore some of our ongoing research projects and how our services
            support impactful outcomes:
          </p>
          <ul className="text-white">
            <li>
              <strong>Healthcare Data Analysis</strong>: Data collection and
              cleaning for predictive analytics to improve healthcare outcomes
              and resource allocation.
            </li>
            <li>
              <strong>Education & AI</strong>: Visualization and advising
              support for students using AI to personalize learning in education
              research projects.
            </li>
            <li>
              <strong>Agricultural Data Insights</strong>: Visualization and
              data cleaning for climate-smart agriculture initiatives and crop
              yield predictions.
            </li>
          </ul>
        </section>

        <section>
          <h2>Collaborate with Us</h2>
          <p className="text-white">
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
