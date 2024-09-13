import React from "react";
import data from "../data/Skills.json";
const Skills = () => {
  return (
    <section className="w-full pt-[7rem] p-[4rem] bg-slate-950" id="skills">
      <h2 className="uppercase font-bold w-full text-center text-[6rem] text-white">
        SKILLS
      </h2>
      <div className="w-full flex flex-wrap py-[4rem] gap-[2rem] justify-center">
        {data?.map((item: any, index: number) => (
          <div
            className="w-full sm:max-w-[30rem] flex flex-col gap-[2rem] p-[2rem] rounded-xl text-white transition-all duration-300 hover:text-red-500 shadow-xl bg-slate-900"
            key={index}
          >
            <img
              src={item?.image}
              alt={item?.title}
              className="w-full h-[20rem] object-contain object-center"
            />
            <h3 className="w-full text-center text-[2.5rem] font-bold">
              {item?.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
