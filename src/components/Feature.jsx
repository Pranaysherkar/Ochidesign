import React from "react";

function Feature() {
  return (
    <div className="w-full font-neue-montreal">
      <h1 className="text-[55px] border-b px-12 pt-24 pb-10 border-[#CCCCCD] ">
        Featured projects
      </h1>
      <div className="cards w-full px-10 py-24 flex gap-10">
        <div className="card relative w-1/2 h-[75vh] bg-red-600 rounded-md ">
          <h4 className="text-lg pb-5">• FYDE</h4>
          <h1 className="absolute z-10 top-1/2 left-full -translate-y-1/2 -translate-x-1/2 tracking-tighter text-8xl font-extrabold text-[#CDEA68] ">
            {"FYDE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <img
            className="w-full h-[95%] object-cover hover:scale-90 rounded-md "
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            alt=""
          />
        </div>
        <div className="card relative w-1/2 h-[75vh] bg-red-600 rounded-md">
          <h4 className="text-lg pb-5">• VISE</h4>
          <h1 className="absolute top-1/2 rght-full -translate-y-1/2 -translate-x-1/2  tracking-tighter  text-8xl font-extrabold text-[#CDEA68]">
            {"VISE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <img
            className="w-full h-[95%] object-cover hover:scale-90 rounded-md "
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="cards w-full px-10 py- flex gap-10">
        <div className="card relative w-1/2 h-[75vh] bg-red-600 rounded-md ">
          <h4 className="text-lg pb-5">• FYDE</h4>
          <h1 className="absolute z-10 top-1/2 left-full -translate-y-1/2 -translate-x-1/2 tracking-tighter text-8xl font-extrabold text-[#CDEA68] ">
            {"FYDE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <img
            className="w-full h-[95%] object-cover hover:scale-90 rounded-md "
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
            alt=""
          />
        </div>
        <div className="card relative w-1/2 h-[75vh] bg-red-600 rounded-md">
          <h4 className="text-lg pb-5">• VISE</h4>
          <h1 className="absolute top-1/2 rght-full -translate-y-1/2 -translate-x-1/2  tracking-tighter  text-8xl font-extrabold text-[#CDEA68]">
            {"VISE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <img
            className="w-full h-[95%] object-cover hover:scale-90 rounded-md "
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
