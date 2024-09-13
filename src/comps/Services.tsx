import React from "react";
import Slider from "react-slick";
import data from "../data/Services.json";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Services = () => {
  return (
    <section id="services" className="w-full p-[4rem] pt-[7rem] bg-slate-900">
      <h2 className="w-full text-center uppercase font-bold text-[6rem] text-violet-500">
        SERVICES
      </h2>
      <div className="slider-container w-full py-[5rem]">
        <Slider {...settings}>
          {data?.map((item: any, index: number) => (
            <div key={index}>
              <div className="w-full bg-transparent px-[2rem] rounded-xl text-white">
                <div className="w-full p-[2rem] bg-slate-950 rounded-xl flex flex-col gap-[2rem] h-[40rem]  ">
                  <h3 className="text-[3rem] font-bold  ">
                    {index + 1 + ") "}
                    {item?.title}
                  </h3>
                  <p className="text-[2rem] font-medium text-violet-400">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
