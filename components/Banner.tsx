import React from "react";

const Banner = () => {
  return (
    <div className="w-full text-[86px] leading-[100px] inline-block">
      <span>
        <span className="font-light">We picked some</span>
        <b className="text-sandybrown">{` `}</b>
      </span>
      <b className="text-sandybrown">
        <span>cool things</span>
        <span>{` `}</span>
      </b>
      <span>
        <span className="font-light">for you!</span>
      </span>
    </div>
  );
};

export default Banner;
