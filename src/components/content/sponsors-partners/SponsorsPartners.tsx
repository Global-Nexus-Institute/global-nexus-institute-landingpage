import { sampleSponsorPartners } from "@/shared/data";
import React from "react";
import { SponsorsPartnerCard } from "./SponsorsPartnerCard";

export const SponsorsPartners = () => {
  return (
    <div className="flex flex-col w-full space-y-10">
      <h1 className="text-gnblueLight text-4xl ">Our Partners and Sponsors</h1>
      <p className="text-white">
        We collaborate with industry leaders and sponsors to drive innovation
        and excellence in education. Their support and resources are integral to
        our mission, enabling us to offer cutting-edge programs and
        opportunities. Together, we shape the future and advance the goals of
        our learners.
      </p>
      <div className="flex md:grid md:grid-cols-3 gap-2 overflow-scroll">
        {sampleSponsorPartners.map((data, index) => (
          <SponsorsPartnerCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};
