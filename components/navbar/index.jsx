"use client"

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 5); // Menjadi sticky jika scroll lebih dari 5px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offset = -60; // Sesuaikan offset
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Tutup menu setelah klik pada mobile
  };

  const NavItem = ({ id, children }) => (
    <li>
      <button
        className="p-2 transition-all ease-in-out rounded-lg hover:bg-[#ff8132] hover:text-white"
        onClick={() => handleScroll(id)}
        role="button"
      >
        {children}
      </button>
    </li>
  );

  return (
    <>
      <div
        className={`${
          isSticky ? "sticky" : "absolute"
        } flex items-center justify-center mx-auto font-['Poppins'] top-4 left-0 right-0 z-50 h-[65px]`}
      >
        <div className="w-[90%] md:w-[60%] h-[65px] bg-[#0a0a0a] flex items-center justify-between px-4 py-2.5 rounded-full shadow-md">
          <div className="flex flex-col text-[#ffffff] font-bold rounded-full px-3 py-1">
            <span className="flex items-center gap-2 mb-0 text-xl text-[#f4f4f4]">
              <div className="w-2 h-2 rounded-full bg-[#f4f4f4]"></div>M Farhan
              Ramadhan
              <div className="w-2 h-2 rounded-full bg-[#f4f4f4]"></div>
            </span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-[#ffffff] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } absolute top-[50px] left-[70px] w-3/5 md:w-auto bg-[#0a0a0a] flex-col items-center gap-4 p-4 md:static md:flex md:flex-row md:items-center md:justify-center md:p-0 md:gap-[1rem] -z-50 md:z-0`}
          >
            <ul className="text-[#ffffff] text-[16px] flex flex-col md:gap-4 gap-0 items-center md:flex-row">
              <NavItem id="home">Home</NavItem>
              <NavItem id="about">About</NavItem>
              <NavItem id="project">Projects</NavItem>
              <NavItem id="footer">Contact</NavItem>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
