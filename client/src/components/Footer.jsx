import React from "react";

// Using emoji and text instead of image logo

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <div className="flex items-center">
          <span role="img" aria-label="chain" className="text-3xl text-[#2952e3]">🔗</span>
          <span className="text-white text-xl font-bold ml-2">TrustGrid</span>
        </div>
      </div>

 


      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="#" className="text-white text-base text-center mx-2 cursor-pointer">Home</a>
        <a href="#" className="text-white text-base text-center mx-2 cursor-pointer">Donate</a>
        <a href="#services" className="text-white text-base text-center mx-2 cursor-pointer">Services</a>
        <a href="#donations" className="text-white text-base text-center mx-2 cursor-pointer">Latest Donations</a>
      </div>
    </div>

    {/* <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p>
    </div> */}

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@2023 TrustGrid Blockchain Charity Platform 🌍</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
