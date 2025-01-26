const Footer = () => {
  return (
    <footer
      className="w-full min-h-[50vh] bg-[#0a0a0a] text-[#f4f4f4] px-4 py-8 flex flex-col items-center justify-center gap-6 font-['Poppins'] rounded-t-[3rem]"
      id="footer"
    >
      {/* Heading */}
      <h2 className="max-w-2xl text-2xl font-bold leading-snug text-center sm:text-3xl lg:text-4xl">
        Let's get in touch and work together
      </h2>

      {/* Description */}
      <p className="max-w-xl text-sm leading-relaxed text-center text-gray-400 sm:text-base">
        Contact me if you want to collaborate, work together, have a
        conversation, or just say hello!
      </p>

      {/* Social Links */}
      <ul className="flex items-center justify-center gap-2">
        <li>
          <a
            className="text-gray-400 hover:text-[#ff8132] transition-all duration-200"
            href="https://www.linkedin.com/in/m-farhan-ramadhan-9b083b266/"
            aria-label="Visit LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            + LinkedIn
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-[#ff8132] transition-all duration-200"
            href="https://instagram.com/farhan_r45"
            aria-label="Visit Instagram Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            + Instagram
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-[#ff8132] transition-all duration-200"
            href="https://github.com/Frhan21"
            aria-label="Visit GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            + GitHub
          </a>
        </li>
        <li>
          <a
            className="text-gray-400 hover:text-[#ff8132] transition-all duration-200"
            href="mailto:frhn.r3@gmail.com"
            aria-label="Send an Email"
          >
            + Email
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
