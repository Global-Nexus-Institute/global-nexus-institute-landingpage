import { sampleSponsorPartners } from "@/shared/data";
import React from "react";
import { SponsorsPartnerCard } from "./SponsorsPartnerCard";

export const SponsorsPartners = () => {
  return (
    <div className="flex flex-col w-full space-y-10  md:w-[88%] border">
      <h1 className="text-gnblueLight text-4xl">Our Partners and Sponsors</h1>

      <div className="flex h-[30%] w-full  bg-gradient-to-b from-gnpink to-gnpingdark">
        <div className="flex w-full justify-center md:items-center  text-[0.8rem] md:text-[1.5rem] text-center text-white md:px-100">
          We collaborate with industry leaders and sponsors to drive innovation
          and excellence in education. Their support and resources are integral
          to our mission, enabling us to offer cutting-edge programs and
          opportunities. Together, we shape the future and advance the goals of
          our learners.
        </div>
      </div>

      <div className="flex md:grid md:grid-cols-3 gap-4 scrollbar-hidden overflow-scroll md:overflow-hidden">
        {sampleSponsorPartners.map((data, index) => (
          <SponsorsPartnerCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};
