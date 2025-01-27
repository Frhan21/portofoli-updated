import React from "react";

const About = () => {
  return (
    <section
      className="w-full h-auto min-h-[800px] font-['Poppins'] px-4 flex items-center justify-center flex-col gap-6 py-10 relative bg-[#121212] rounded-[1.5rem]"
      id="about"
    >
      <h2 className="text-[#f4f4f4] text-[2.5rem] sm:text-[3.5rem] mb-6 text-center">
        <span className="px-4 py-2 bg-[#ff8132] font-bold rounded-xl">
          Here's
        </span>{" "}
        About Me!
      </h2>

      <h3 className="text-[#f4f4f4] text-[1.5rem] sm:text-[2rem] text-center w-[90%] sm:w-[70%]">
        Hi, I'm M Farhan Ramadhan!
      </h3>

      <p className="text-[#9AA6B2] text-[0.9rem] sm:text-md text-center w-[90%] sm:w-[65%] leading-[1.6rem]">
        I’m a web developer passionate about transforming great ideas into real
        digital solutions. With experience in technologies like React.js,
        Laravel, and Tailwind CSS, I create websites and applications that are
        not only visually appealing but also functional and effective.
      </p>

      <a
        href=".../img/CV M FARHAN RAMADHAN.pdf"
        download
        className="px-6 py-3 bg-[#ff8132] rounded-xl text-[#f4f4f4] mt-4 hover:bg-[#0a0a0a] border-2 border-[#ff8132] hover:text-[#ffffff] text-center transition-all duration-300"
      >
        Download my CV
      </a>
    </section>
  );
};

export default About;
