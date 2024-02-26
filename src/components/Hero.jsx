import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
function Hero() {
  
  const [Hover,setIsHover]=useState(false);
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen pt-1">
      <div className="textstructur mt-36 px-14">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((items, index) => (
          <div className="masker" key={index}>
            <div className="flex items-center gap-3 overflow-hidden">
                {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className="w-[9.5vw] h-[6vw] mt-3 bg-slate-600 rounded-lg overflow-hidden"> <img className="w-full h-full" src="src/assets/images/image01.jpg" alt="Loading..." /></motion.div>)}
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
            <button onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className={`border tracking-tight border-black py-2 px-4 uppercase rounded-full cursor-pointer transition ease-linear duration-200 ${ Hover ?`bg-black text-white`:`bg-[#F1F1F1]`} `} type="button">Start the project</button>
            <div className={`btn cirlce w-8 h-8 border border-black rounded-full flex items-center justify-center cursor-pointer transition ease-in duration-200 ${ Hover ?`bg-black text-white`:`bg-[#F1F1F1]`} `}><GoArrowUpRight /></div>
        </div>
        
      </div>
    </div>
  );
}
export default Hero;
