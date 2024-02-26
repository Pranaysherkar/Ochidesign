import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

function Client() {
  const [Hover1, SetHover1] = useState(false);
  const [Hover2, SetHover2] = useState(false);
  return (
    <div data-scroll  data-scroll-speed=".1"  className="font-neue-montreal w-full min-h-screen">
      <h1 className="text-[55px] border-b-2 px-12 pt-7 pb-10 border-[#CCCCCD]">
        Clients' reviews
      </h1>
      <div className="w-full px-12 mt-3 flex items-start gap-48 capitalize">
        <h4 className="text-lg w-8/12">Karman Ventures</h4>
        <div className="w-48">
          <h4 className="text-lg">Services:</h4>
          <div className=" mt-20">
            <div className="flex gap-3 mb-3">
              <button
                onMouseEnter={() => SetHover1(true)}
                onMouseLeave={() => SetHover1(false)}
                className={`capitalize text-lg border border-black rounded-full w-36 h-8 transition ease-linear duration-150 ${
                  Hover1 ? `bg-black text-white` : `bg-[#F1F1F1]`
                } `}
              >
                Investor deck
              </button>
              <div
                className={`text-3xl rounded-full bg-black text-white w-8 h-8 flex items-center justify-center transition ease-linear duration-150 ${
                  Hover1 ? `scale-100` : `scale-0`
                }`}
              >
                {" "}
                <GoArrowUpRight />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onMouseEnter={() => SetHover2(true)}
                onMouseLeave={() => SetHover2(false)}
                className={`capitalize text-lg border border-black rounded-full w-32 h-8 transition ease-linear duration-150 ${
                  Hover2 ? `bg-black text-white` : `bg-[#F1F1F1]`
                } `}
              >
                Sales deck
              </button>
              <div
                className={`text-3xl rounded-full bg-black text-white w-8 h-8 flex items-center justify-center transition ease-linear duration-150 ${
                  Hover2 ? `scale-100` : `scale-0`
                }`}
              >
                {" "}
                <GoArrowUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="text-lg">William Barnes</h4>
          <div className="w-28 h-28 mt-20 mb-8 rounded-lg overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt="loading.."
            />
          </div>
          <p className="text-lg ">
            They were transparent about the time and the stages of the project.
            The end product is high quality, and I feel confident about how they
            were handholding the client through the process. I feel like I can
            introduce them to someone who needs to put a sales deck together
            from scratch, and they would be able to handhold the client
            experience from 0 to 100 very effectively from story to design. 5/5
          </p>
        </div>
        <h4 className="text-lg opacity-25">READ</h4>
      </div>
      <div className="w-full bg-[#F1F1F1] my-20 border-[#CCCCCD] border-t">
        {[
          { work: "Planetly", name: "Nina Walloch" },
          { work: "Workiz Easy", name: "Tomer Levy" },
          { work: "Premium Blend", name: "Ellen Kim" },
          { work: "Hypercare Systems", name: "Brendan Goss" },
          { work: "Officevibe", name: "Raff Labrie" },
          { work: "Orderlion", name: "Stefan Strohmer" },
          { work: "Black Book", name: "Jaci Smith" },
          { work: "Trawa Energy", name: "David Budde" },
        ].map((items, index) => (
          <div key={index}className="border-[#CCCCCD] border-b w-full">
            <div
              className="w-full h-16 flex items-center justify-between px-16 text-lg"
            >
              <h4 className="w-44">{items.work}</h4>
              <h4 className="w-44 ">{items.name}</h4>
              <h4>READ</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;
