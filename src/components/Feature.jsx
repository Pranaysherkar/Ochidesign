import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

function Feature() {
  const[Hoverd,setIsHoverd]=useState(false);
  return (
    <div className="w-full font-neue-montreal">
      <h1 className="text-[55px] border-b-2 px-12 pt-24 pb-10 border-[#CCCCCD] ">
        Featured projects
      </h1>
      <div className="cards w-full px-10 py-24 flex gap-5">
        <div className="card relative w-1/2 h-[75vh] rounded-md ">
          <h4 className="text-lg pb-5">• FYDE</h4>
          <h1 className="absolute z-10 top-1/2 left-full -translate-y-1/2 -translate-x-1/2 tracking-tighter text-8xl font-extrabold text-[#CDEA68] ">
            {"FYDE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-[95%] pb-7">
          <img
            className="w-full h-full object-cover hover:scale-90 rounded-lg" 
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            alt=""
            />
            </div>
        </div>
        <div className="card relative w-1/2 h-[75vh] rounded-md">
          <h4 className="text-lg pb-5">• VISE</h4>
          <h1 className="absolute top-1/2 rght-full -translate-y-1/2 -translate-x-1/2  tracking-tighter  text-8xl font-extrabold text-[#CDEA68]">
            {"VISE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-[95%] pb-7">
          <img
            className="w-full h-full  object-cover hover:scale-90 rounded-lg "
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt=""
            />
            </div>
        </div>
      </div>
      <div className="cards w-full px-10 py- flex gap-5">
        <div className="card relative w-1/2 h-[75vh] rounded-md ">
          <h4 className="text-lg pb-5">• TRAWA</h4>
          <h1 className="absolute z-10 top-1/2 left-full -translate-y-1/2 -translate-x-1/2 tracking-tighter text-8xl font-extrabold text-[#CDEA68] ">
            {"TRAWA".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-[95%] pb-7">
          <img
            className="w-full h-full object-cover hover:scale-90 rounded-lg" 
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
            alt=""
            />
            </div>
        </div>
        <div className="card relative w-1/2 h-[75vh] rounded-md">
          <h4 className="text-lg pb-5">• PREMIUM BLEND</h4>
          <h1 className="absolute top-1/2 rght-full -translate-y-1/2 -translate-x-1/2  tracking-tighter  text-8xl font-extrabold text-[#CDEA68]">
            {"PREMIUM BLEND".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="w-full h-[95%] pb-7">
          <img
            className="w-full h-full  object-cover hover:scale-90 rounded-lg "
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            alt=""
            />
            </div>
        </div>
      </div>
      <div className="my-20 pt-5 flex items-center justify-center">
         <div
            onMouseEnter={() => setIsHoverd(true)}
            onMouseLeave={() => setIsHoverd(false)}
            className={`button bg-black text-white w-64 h-14 flex justify-between items-center p-2 rounded-full ${
              Hoverd ? `bg-zinc-800 ` : ``
            }`}
          >
            <h3 className="uppercase px-1">View all case Studies</h3>
            <span
              className={`bg-white text-black flex items-center justify-center w-[3vw] h-[3vw] rounded-full scale-[.2] transition ease-linear duration-100 ${
                Hoverd ? `text-black scale-[1]` : ``
              }`}
            >
              <GoArrowUpRight />
            </span>
          </div>
          </div>
    </div>
  );
}

export default Feature;
