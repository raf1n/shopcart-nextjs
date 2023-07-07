import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0  left-0 w-full bg-darkslategray text-white py-4  flex items-center justify-between ">
      <div className="text-4xl font-semibold pl-10">
        <b>shop</b>
        <span className="font-light">cart</span>
      </div>
      <div className="flex flex-row items-start justify-start gap-5">
        <div className="font-medium">About us</div>
        <div className="font-medium">Contact</div>
        <div className="font-medium">Help</div>
      </div>
      <div className="flex flex-row items-center justify-start gap-2 pr-10">
        <div className="font-medium">English</div>
        <img className="w-2.5 h-5" alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default Footer;
