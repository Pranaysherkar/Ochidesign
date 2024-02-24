import React from "react";

function OchiEye() {
  return (
    <div className='w-full h-screen overflow-hidden]'>
      <div className='relative w-full h-full bg-cover bg-center bg-[url("src/assets/images/Ochibg.jpg")]'>
        <div className='absolute flex gap-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className="h-56 w-56 bg-white rounded-full flex items-center justify-center">
                <div className="bg-black h-2/3 w-2/3 rounded-full flex items-center justify-center">
                    <div className="w-full h-6 bg-blue-300">
                    <div className="bg-white h-6 w-6 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="h-56 w-56 bg-white rounded-full flex items-center justify-center">
                <div className="bg-black h-2/3 w-2/3 rounded-full flex items-center justify-center">
                    <div className="w-full h-6 bg-blue-300">
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
