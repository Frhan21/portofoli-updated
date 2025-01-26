import React from "react";

const Hero = () => {
  return (
    <header
      className="flex items-center flex-col justify-center mx-auto font-['Poppins'] bg-[#ffffff] w-full h-screen relative mt-0 top-0 z-0"
      id="home"
    >
      {/* Meta Description */}
      <meta
        name="description"
        content="Hi, I'm M Farhan Ramadhan. I build scalable websites with clean code, innovative designs, and future-ready experiences."
      />
      <div className="text-center text-[#9AA6B2] my-4">
        <p>Hi, I’m M Farhan Ramadhan, Crafting Experiences Through Code.</p>
      </div>
      <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] w-[90%] sm:w-[75%] md:w-[62%] leading-[2.5rem] sm:leading-[3rem] md:leading-[3.5rem] text-center font-bold">
        Clean Code. Scalable Solutions. Future-Ready Websites.
      </h1>
      <p className="w-[90%] sm:w-[80%] md:w-[65%] p-2 my-4 text-center text-[#9AA6B2]">
        I create amazing websites and applications that are future-ready,
        leveraging the latest technologies with a focus on innovation, sleek
        design, and impressive digital experiences.
      </p>
      <div className="flex items-center justify-center gap-[0.5rem] sm:gap-[1rem] flex-wrap">
        <button className="bg-[#ff8132] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[1rem] hover:bg-[#ffffff] border-2 border-[#ff8132] hover:text-[#ff8132] hover:shadow-xl">
          Check my Projects
        </button>
        <button className="bg-[#0a0a0a] border-2 border-[#0a0a0a] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#0a0a0a] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[1rem] hover:shadow-xl">
          <span className="font-bold">Email</span> me
        </button>
      </div>
    </header>
  );
};

export default Hero;
