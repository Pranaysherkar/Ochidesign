import React from "react";
import { GoArrowUpRight } from "react-icons/go";
function About() {
  return (
    <>
      <div className="bg-[#CDEA68] w-full rounded-t-2xl pt-24 pl-14 pb-12 font-neue-montreal">
        <h1 className="text-[55px] w-[75vw] font-normal leading-[55px]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
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
          <div className="bg-black text-white w-44 h-14 flex justify-between items-center p-2 rounded-full">
            <h3 className="uppercase px-2">read more</h3>
            <span className="bg-white text-black flex w-[.5vw] h-[.5vw] rounded-full hover:justify-center hover:items-center hover:w-[3vw]  hover:h-[3vw] ease-in-out duration-100"><GoArrowUpRight /></span>
          </div>
        </div>
        <div className="w-1/2 h-[70vh] bg-zinc-400 rounded-2xl overflow-hidden">
    <img className="w-full h-full object-cover"  src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
