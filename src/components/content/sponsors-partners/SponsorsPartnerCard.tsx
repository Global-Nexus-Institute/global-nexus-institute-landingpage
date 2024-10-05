import { Image } from "antd";
import React from "react";

interface CardProps {
  data: { title: string; imageUrl: string; content: string };
}

export const SponsorsPartnerCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="flex m-6 mx-8 space-x-2">
      <div className="flex h-full w-[45%]">
        <Image
          src={data.imageUrl}
          preview={false}
          width={170}
          height={130}
          className="bg-white"
          alt="sponsor_logo"
        />
      </div>
      <div>
        <div className="w-auto text-lg text-white font-bold">{data.title}</div>
        <div className="w-auto text-sm text-gray-500">{data.content}</div>
      </div>
    </div>
  );
};
