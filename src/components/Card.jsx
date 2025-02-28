import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { Icon123, } from '@tabler/icons-react'
import { easeInOut } from 'motion'

function Card() {
  const [open,setopen]=useState("true");
  return (
    <>
    <AnimatePresence>
      { open &&(
    <motion.div
    initial={{
      opacity:0,
      filter:"blur(10px)",
      scale:0.95
    }}
animate={{
  opacity:1,
  filter:"blur(0px)",
  scale:1

}}
    exit={{
      opacity:0,
      scale:0.98,
      filter:"blur(10px)"
    }}
    
      className='shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  w-100 h-[70vh] bg-white rounded-4xl flex flex-col p-7 '>
      <h2 className='text-xl font-bold'>Acernity UI components</h2>
      <div className='mt-5 font-semibold text-neutral-600'>A Collection of Beutifull ui Components lets get into it </div>
      <div className='flex justify-center mt-6'>
        <button onClick={()=>setopen(false)} className='px-6 py-2 bg-white font-bold rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] shadow-gray-300'>
          Acernity
        </button>
      </div>
      <motion.div
      initial={{
        filter:"blur(10px)",
        scale:0.98,
         opacity:0
      }}
      whileHover={{
        opacity:1,
        filter:"blur(0px)",
        scale:1.03
      }}
      transition={{
        duration:0.5,
        ease:easeInOut
      }}
       className='mt-4 flex-1 bg-neutral-100 rounded-2xl border  border-neutral-500 divide-y divide-neutral-300'>
        <div className='text-black flex mt-2 '>
          <div className='flex rounded-2xl bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
            <Icon123></Icon123>
          </div>
          <div className=' ml-3 mt-2'>
            <h1 className='font-bold'>
              hi thi sside Ankush Rana
            </h1>
            <h1 className='font-semibold text-neutral-500'>
              hi thi sside Ankush Rana
            </h1>

          </div>
        </div>

        <div className='text-black flex  mt-2'>
          <div className='flex rounded-2xl bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
            <Icon123></Icon123>
          </div>
          <div className=' ml-3 mt-2'>
            <h1 className='font-bold'>
              hi thi sside Ankush Rana
            </h1>
            <h1 className='font-semibold text-neutral-500'>
              hi thi sside Ankush Rana
            </h1>

          </div>
        </div>

        <div className='text-black flex mt-2'>
          <div className='flex rounded-2xl bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
            <Icon123></Icon123>
          </div>
          <div className=' ml-3 mt-2'>
            <h1 className='font-bold'>
              hi thi sside Ankush Rana
            </h1>
            <h1 className='font-semibold text-neutral-500'>
              hi thi sside Ankush Rana
            </h1>

          </div>
        </div>

        <div className='text-black flex mt-2'>
          <div className='flex rounded-2xl bg-white p-5 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
            <Icon123></Icon123>
          </div>
          <div className=' ml-3 mt-2'>
            <h1 className='font-bold'>
              hi thi sside Ankush Rana
            </h1>
            <h1 className='font-semibold text-neutral-500'>
              hi thi sside Ankush Rana
            </h1>

          </div>
        </div>
        

      </motion.div>
    </motion.div>
)}
    </AnimatePresence>
    </>
  )
}

export default Card