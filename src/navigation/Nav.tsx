import React from "react";

const Nav = () => {
  return (
    <nav className="w-full z-50 bg-slate-950 fixed p-[1rem] flex justify-center gap-[3rem] top-0 left-0 right-0">
      <a href="#home">
        <span className="text-[3rem] text-violet-500 font-bold">Bikram.</span>
      </a>
      <ul className="flex gap-[2rem]">
        <a
          href="#services"
          className="p-[0.5rem] flex flex-col justify-center h-full text-[1.6rem] uppercase font-medium text-white transition-all duration-300 hover:text-red-500"
        >
          SERVICES
        </a>
        <a
          href="#skills"
          className="p-[0.5rem] flex flex-col justify-center h-full text-[1.6rem] uppercase font-medium text-white transition-all duration-300 hover:text-red-500"
        >
          SKILLS
        </a>
        <a
          href="#contact"
          className="p-[0.5rem] flex flex-col justify-center h-full text-[1.6rem] uppercase font-medium text-white transition-all duration-300 hover:text-red-500"
        >
          CONTACT
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
