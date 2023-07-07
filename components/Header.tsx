import React from "react";

const Header = () => {
  return (
    <div className="w-full lg:relative lg:w-auto lg:flex lg:flex-row lg:items-center lg:justify-between text-3xl lg:text-6xl">
      <div className="relative">
        <b>shop</b>
        <span className="font-light">cart</span>
      </div>
      <div className="flex flex-row items-center justify-center text-base">
        <div className="flex flex-row items-center justify-center space-x-2">
          <img className="w-6 h-6" alt="" src="/vector.svg" />
          <div className="font-medium">Sign In</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
