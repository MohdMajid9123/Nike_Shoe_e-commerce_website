import React from "react";
import Clip from "./utile/Clip";
import Social from "./utile/Social";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className=" relative h-auto w-auto flex flex-col   ">
        <div className=" bg-theme clip-path md:h-[65vh] h-[95vh]  w-auto absolute top-0 left-0 right-0 opacity-100 z-10  "></div>
        <div className=" relative opacity-100 z-20 grid items-center justify-items-center nike-container ">
          <div className=" grid items-center mt-28 md:mt-24 ">
            <h1 className=" text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200  ">
              {title}
            </h1>
            <h1 className=" text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200  ">
              {subtitle}
            </h1>
            <button
              type="button"
              className="m-auto button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5 w-96 lg:w-80 md:w-64 sm:w-60"
            >
              {btntext}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[36vh] lg:top-[31vh] left-[11%] xl:left-0 w-auto h-auto ">
              {videos?.map((val, i) => (
                <Clip key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>
            <div className=" grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3 ">
              {sociallinks.map((val, i) => (
                <Social key={i} icon={val.icon} />
              ))}
            </div>
          </div>
          <div>
            <img
              src={img}
              alt="hero img"
              className=" w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill  "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
