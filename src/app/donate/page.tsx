"use client";
import React from "react";
import "../research/research.css";

export default function DonatePage() {
  return (
    <div className="mt-10 researh-body flex flex-col items-center justify-center">
      <header className="mt-20 font-bold w-full">
        <h1>Support Global Nexus Institute</h1>
      </header>
      <div className="research-container">
        <section>
          <h2 className="text-[2.5em] font-bold">
            About the Funding Global Nexus Institute
          </h2>
          <p className="text-[1.5em] text-white">
            First Fund (GNI), in collaboration with AlX, RDB,  NCC Education, Sand Technologiews and ICT Chamber, proudly
            presents the Heroes of Education Financial Assistantship (HEFA) for
            students who are tackling problems, including food insecurity, in
            their communities. Each year, GNI honors individuals and
            organizations with the Heroes of Education designation for their
            remarkable contributions to advancing education. It is in
            recognition to these people that GNI offers these awards.
          </p>
        </section>

        <section>
          <h2 className="text-[2.5em] font-bold">Background</h2>
          <p className="text-[1.5em] text-white">
            The GNI has been empowering talented and driven individuals through
            scholarships, enabling them to deepen their knowledge and make a
            significant impact within their communities and organizations. In
            partnership with AlX, RDB,  NCC Education, Sand Technologiews and ICT Chamber in , Rwanda, GNI has assisted
            25 qualified applicants who aspire to pursue an MSc in Food Systems
            and Sustainable Agriculture (FSSA). Since AlX, RDB,  NCC Education, Sand Technologiews and ICT Chamber offers
            tuition-free programs, selected candidates will receive support for
            their application or annual administrative fees. We want to support
            more students, so we invite you to donate to this cause.
          </p>
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
              <button>Default Amount</button>
            </div>
            <div className="h-16 text-[1.3em]   flex justify-center items-center p-4 bg-orange-900 text-white font-bold">
              <button>$1000.00</button>
            </div>
            <div className="h-16 text-[1.3em]  flex justify-center items-center p-4 bg-orange-900 text-white font-bold">
              <button>Custom Amount</button>
            </div>
          </div>
          <div className="flex justify-center items-center my-5">
            <button className="bg-orange-900 text-[1.3em] text-white font-bold p-4 capitalize">
              Donate Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
