import React from "react";
import data from "../data/Home.json";
import Button1 from "./Button1";
const Home = () => {
  return (
    <section
      id="home"
      className="w-full pt-[7rem] px-[2rem] flex flex-wrap-reverse justify-evenly gap-[2rem] min-h-screen"
    >
      <img
        src={data?.image}
        className="w-full max-w-[60rem] object-contain object-bottom"
        alt={data?.title}
      />
      <div className="w-full max-w-[50rem] text-[2rem] flex flex-col justify-center gap-[1rem] text-white">
        <h1 className="text-[6rem] font-bold uppercase">{data?.title}</h1>
        <h2 className="text-[3rem] font-bold uppercase text-violet-500">
          {data?.profession}
        </h2>
        <p className="font-medium ">{data?.description}</p>
        <br />
        <a href="#services">
            <Button1>
                My Services
            </Button1>
        </a>
      </div>
    </section>
  );
};

export default Home;
