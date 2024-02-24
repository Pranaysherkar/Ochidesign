import React from "react";
import { GoArrowUpRight } from "react-icons/go";
function Hero() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructur mt-36 px-14">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((items, index) => (
          <div className="masker">
            <div className="flex items-center gap-3 overflow-hidden">
                {index === 1 && (<div className="w-[9.5vw] h-[6vw] mt-3 bg-slate-600 rounded-lg overflow-hidden"> <img className="w-full h-full" src="src/assets/images/image01.jpg" alt="Loading..." /></div>)}
            <h1 key={index}className="uppercase leading-[104px] text-[139px] font-Founders-Grotesk font-semibold">
              {items}
            </h1>
            </div>
          </div>
        ))}
      </div>
      <div className=" border-t px-12 py-3 border-neutral-400 mt-24 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <h5 key={index} className="text-lg font-normal leading-4 tracking-tight" >{items}</h5>
        ))}
        <div className="text-base font-normal leading-4  flex items-center gap-2">
            <button className="border tracking-tight border-black py-2 px-4 uppercase rounded-full cursor-pointer hover:bg-black hover:text-white ease-linear duration-200" type="button">Start the project</button>
            <div className="cirlce w-8 h-8 border border-black rounded-full flex items-center justify-center cursor-pointer"><GoArrowUpRight /></div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
