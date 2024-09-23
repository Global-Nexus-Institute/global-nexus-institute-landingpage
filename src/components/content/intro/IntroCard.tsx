import React from "react";

export const IntroCard: React.FC<{ data: any; key: number }> = ({
  data,
  key,
}) => {
  return (
    <div className="md:flex h-[400px]" key={key}>
      <div className="flex flex-col md:basis-2/5 px-3 justify-center h-full">
        <div className=" md:text-[2.5rem] font-bold bg-gradient-to-r bg-clip-text text-transparent from-white to-gnblueLight ">
          {data.title}
        </div>
        <div className="md:text-xl  text-white">{data.description}</div>
      </div>
      <div className="flex basis-3/5 px-3 bg-gndarblue">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={data.videoLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
