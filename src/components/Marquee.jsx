import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-28 bg-[#004D43] rounded-t-2xl'>
        <div className="border-[#528a82] border-t-2 border-b-2 flex whitespace-nowrap gap-20 overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity , duration:10}} className='text-[437px] uppercase text-white -mt-36 -mb-24 leading-tight font-Founders-Grotesk'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity , duration:10}} className='text-[437px] uppercase text-white -mt-36 -mb-24  leading-tight font-Founders-Grotesk'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity , duration:10}} className='text-[437px] uppercase text-white -mt-36 -mb-24  leading-tight font-Founders-Grotesk'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee