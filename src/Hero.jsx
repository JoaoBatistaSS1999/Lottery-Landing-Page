import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex justify-center bg-[#001535]">
      <div className="max-w-screen-2xl px-3 sm:px-10 min-h-screen bg-[#001535] w-full flex text-white flex-col justify-center gap-4">
        <title className="w-full flex flex-col items-start gap-2 md:gap-3 mt-80 md:mt-0">
          <div className="w-full flex items-center justify-center md:justify-start">
            <h2 className="text-xl md:text-[80px] px-5 py-3 md:py-9 bg-gradient-to-r from-[#17E6FC] to-[#e717e9]  font-bold">
              CHANGE YOUR LIFE
            </h2>
          </div>
          <div className="w-full flex items-center justify-center md:justify-start">
            <h2 className="text-xl md:text-[80px] px-5 py-3 md:py-9 bg-gradient-to-r from-[#17E6FC] to-[#e717e9]  font-bold">
              WITH FEW
            </h2>
          </div>

          <div className="w-full flex items-center justify-center md:justify-start">
            <h2 className="text-xl md:text-[80px] px-5 py-3 md:py-9 bg-gradient-to-r from-[#17E6FC] to-[#e717e9]  font-bold">
              SIMPLE SPINS!
            </h2>
          </div>
          <div className="max-w-screen-md flex justify-center items-center">
            <p className="w-full mt-10 mb-7 text-center sm:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              odit perferendis saepe enim, nemo perspiciatis voluptatum. Cumque,
              officia. Velit perferendis dolores accusamus unde eveniet magnam
              dolorem nulla. Totam, voluptas aliquam?
            </p>
          </div>
        </title>
        <div className="w-full flex justify-center sm:justify-start mb-8">
          <button className="text-sm w-64 h-12 md:w-[400px] md:h-[70px] font-bold sm:text-2xl  rounded-[39px] bg-[#F00FE8] bg-gradient-to-r from-[#13EBFD] ">
            PLAY NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
