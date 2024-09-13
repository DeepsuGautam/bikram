import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-wrap justify-evenly text-[2rem] bg-slate-950 p-[4rem] text-white gap-[2rem]">
      <div className="w-full text-center md:w-fit">
        <h2 className="text-[5rem] font-bold text-violet-500">Bikram.</h2>
        Copyright {new Date().getFullYear()}
      </div>

      <div className="flex flex-col text-center gap-[2rem] text-[2rem]">
        <h3 className="font-bold text-violet-500 text-[3rem]">Contact Info</h3>
        <p>+977 9840609269</p>
        <p>karkibikram584@gmail.com</p>
      </div>
      <div className="flex flex-wrap justify-center lg:flex-col gap-[2rem] text-center">
        <h3 className="font-bold w-full text-violet-500 text-[3rem]">
          Social Links
        </h3>
        <a
          href="https://www.facebook.com/bikram.karki.7773631"
          className="w-fit mx-auto"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebook style={{ fontSize: "3rem" }} />
        </a>
        <a
          href="https://www.instagram.com/bikramk_arkii/"
          rel="noreferrer"
          className="w-fit mx-auto"
          target="_blank"
        >
          <FaInstagram style={{ fontSize: "3rem" }} />
        </a>
        <a
          href="hhttps://www.linkedin.com/in/bikram-karki-599a95189/"
          rel="noreferrer"
          className="w-fit mx-auto"
          target="_blank"
        >
          <FaLinkedin style={{ fontSize: "3rem" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
