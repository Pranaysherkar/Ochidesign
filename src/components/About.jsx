import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
function About() {
  const [Hoverd, setIsHoverd] = useState(false);
  return (
    <div
    >
      <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-28 bg-[#004D43] rounded-t-2xl">
        <div className="border-[#528a82] border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[437px] uppercase text-white -mt-36 -mb-24 pr-5 leading-tight font-Founders-Grotesk"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[437px] uppercase text-white -mt-36 -mb-24 pr-5 leading-tight font-Founders-Grotesk"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[437px] uppercase text-white -mt-36 -mb-24 pr-5 leading-tight font-Founders-Grotesk"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[437px] uppercase text-white -mt-36 -mb-24 pr-5 leading-tight font-Founders-Grotesk"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
      <div  data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full">
        <div className="bg-[#CDEA68] w-full rounded-t-2xl pt-20 pl-14 pb-12 font-neue-montreal">
          <h1 className="text-[55px] w-[75vw] font-normal leading-[55px]">
            Ochi is a strategic partner for fast-growing tech businesses that
            need to raise funds, sell products, explain complex ideas, and hire
            great people.
          </h1>
        </div>
        <div className="main w-full pt-5 py-24 pl-16 text-left border-t border-[#81963e] bg-[#CDEA68] text-[17px] font-normal font-neue-montreal flex justify-between">
          <h3 className=" ">What you can expect:</h3>
          <div className="w-7/12  flex justify-around">
            <div className="w-80">
              <p>
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it's live or digital,
                delivered for one or a hundred people.
              </p>
              <p className="mt-12 ">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
            <div className=" mt-24 mr-8 capitalize">
              <h3>S.</h3>
              <div className="mt-5">
                <h3>instagram</h3>
                <h3>behance</h3>
                <h3>facebook</h3>
                <h3>linkdin</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-[#81963e] bg-[#CDEA68] flex px-12 py-5 justify-between">
          <div className="w-1/2">
            <h1 className="text-[55px] ">Our approach:</h1>
            <div
              onMouseEnter={() => setIsHoverd(true)}
              onMouseLeave={() => setIsHoverd(false)}
              className={`button bg-black text-white w-44 h-14 flex justify-between items-center p-2 rounded-full ${
                Hoverd ? `bg-zinc-800 ` : ``
              }`}
            >
              <h3 className="uppercase px-2">read more</h3>
              <span
                className={`bg-white text-black flex items-center justify-center w-[3vw] h-[3vw] rounded-full scale-[.2] transition ease-linear duration-100 ${
                  Hoverd ? `text-black scale-[1]` : ``
                }`}
              >
                <GoArrowUpRight />
              </span>
            </div>
          </div>
          <div className={`w-1/2 h-[70vh] rounded-2xl overflow-hidden`}>
            <img
              className={`w-full h-full object-cover rounded-2xl transition ease-linear duration-500  ${
                Hoverd ? `scale-95 ` : `scale-100`
              }`}
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
