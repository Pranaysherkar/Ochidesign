import React, { useEffect, useState } from "react";

function OchiEye() {
    const[val,setVal]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
         let x= e.clientX;
         let y= e.clientY;
         let delatX= x-window.innerWidth/2;
         let delatY= y-window.innerHeight/2;
         let angle=Math.atan2(delatY,delatX)*(180/Math.PI);
         setVal(angle - 180);
        })
    })
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex gap-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className="eye h-56 w-56 bg-white rounded-full flex items-center justify-center">
                <div className="relative bg-black h-2/3 w-2/3 rounded-full">
                  <h1 className="text-center font-neue-montreal text-white text-3xl mt-14" >Play</h1>
                    <div  style={{transform:`translate(-50%,-50%) rotate(${val}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6">
                    <div className="bg-white h-6 w-6 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="eye h-56 w-56 bg-white rounded-full flex items-center justify-center">
                <div className="relative bg-black h-2/3 w-2/3 rounded-full">
                <h1 className="text-center font-neue-montreal text-white text-3xl mt-14" >Play</h1>
                    <div style={{transform:`translate(-50%,-50%) rotate(${val}deg)`}}  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6">
                    <div className="bg-white h-6 w-6 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OchiEye;
