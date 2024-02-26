import React from 'react'

function Cards() {
  const arr=[{image:"https://ochi.design/wp-content/uploads/2022/04/logo001.svg",text:"\u00A9 2023-2024 "},{image:"https://ochi.design/wp-content/uploads/2022/04/logo002.svg",text:"RATING 5.0 ON CLUTCH"},{image:"https://ochi.design/wp-content/uploads/2022/04/logo003.png",text:"BUSINESS BOTCAMP ALUMNI"}];
  return (
    <div data-scroll  data-scroll-speed="-.2"  className='w-full flex items-center gap-3 px-8'> 
   {arr.map((items,index)=>( <div key={index} className={`relative w-1/2 h-[55vh] bg-[#004D43] rounded-xl ${index >0 ? `w-1/4 bg-[#212121]` :``}`}>
       <img className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${index===0?`w-1/5 `: index===1 ?`w-5/12 h-1/5`:index===2?`w-1/4`:``}`} src={items.image} alt="loading.." />
       <button className='absolute tracking-tight bottom-5 translate-x-1/56 -translate-y-1/3 ml-8 border-[#CDEA68] border text-[#CDEA68] py-1 px-3 rounded-full'>{items.text}</button>
    </div>))}
    </div>
  )
}

export default Cards