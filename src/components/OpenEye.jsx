import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

function OpenEye() {
  const [Hoverd, setIsHoverd] = useState(false);
  const [Hoverd2, setIsHoverd2] = useState(false);
  const [val, setVal] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      let delatX = x - window.innerWidth / 2;
      let delatY = y - window.innerHeight / 2;
      let angle = Math.atan2(delatY, delatX) * (180 / Math.PI);
      setVal(angle - 180);
    });
  });
  return (
    <div className="relative bg-[#CDEA68] w-full py-28 rounded-xl">
      <div className="w-full text-center ">
        <h1 className=" text-[15vw] font-bold font-Founders-Grotesk leading-[.7]">
          READY
        </h1>
        <h1 className=" text-[15vw] font-bold font-Founders-Grotesk leading-[.7]">
          TO START
        </h1>
        <h1 className=" text-[15vw] font-bold font-Founders-Grotesk leading-[.7]">
          THE PROJECT?
        </h1>
      </div>
      <div className="absolute flex gap-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="eye h-44 w-44 bg-white rounded-full flex items-center justify-center">
          <div className="relative bg-black h-2/3 w-2/3 rounded-full">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${val}deg)` }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6"
            >
              <div className="bg-white h-6 w-6 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="eye h-44 w-44 bg-white rounded-full flex items-center justify-center">
          <div className="relative bg-black h-2/3 w-2/3 rounded-full">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${val}deg)` }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6"
            >
              <div className="bg-white h-6 w-6 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full font-neue-montreal">
        <div className="mt-10 flex items-center justify-center">
          <div
            onMouseEnter={() => setIsHoverd(true)}
            onMouseLeave={() => setIsHoverd(false)}
            className={`button bg-black text-white w-60 h-14 flex justify-between items-center p-2 rounded-full ${
              Hoverd ? `bg-zinc-800 ` : ``
            }`}
          >
            <h3 className="uppercase px-2">Satrt the project</h3>
            <span
              className={`bg-white text-black flex items-center justify-center w-[3vw] h-[3vw] rounded-full scale-[.2] transition ease-linear duration-100 ${
                Hoverd ? `text-black scale-[1]` : ``
              }`}
            >
              <GoArrowUpRight />
            </span>
          </div>
        </div>

        <h4 className="uppercase text-center my-5">or</h4>
        <div className="flex items-center justify-center">
          <div
            onMouseEnter={() => setIsHoverd2(true)}
            onMouseLeave={() => setIsHoverd2(false)}
            className={`text-black border border-black w-60 h-14 flex justify-between items-center p-2 rounded-full transition ease-out duration-100 ${
              Hoverd2 ? `bg-zinc-800  text-white` : ``
            }`}
          >
            <h3 className="uppercase px-2">hello@ochi.design</h3>
            <span
              className={`bg-black text-black flex items-center justify-center w-[3vw] h-[3vw] rounded-full scale-[.2] transition ease-linear duration-100 ${
                Hoverd2 ? `bg-white text-black scale-[1]` : ``
              }`}
            >
              <GoArrowUpRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenEye;
