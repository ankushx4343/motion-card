import React from 'react'
import { motion } from "motion/react" 
import { Icon123, Icon360 } from '@tabler/icons-react'

function Card() {
  return (
    <motion.div
    initial={{

    }}
    className='shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]  w-100 h-[70vh] bg-white rounded-4xl flex flex-col p-7 '>
        <h2 className='text-xl font-bold'>Acernity UI components</h2>
        <div className='mt-5 font-semibold text-neutral-600'>A Collection of Beutifull ui Components lets get into it </div>
        <div className='flex justify-center mt-6'>
            <button className='px-6 py-2 bg-white font-bold rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] shadow-gray-300'>
             Acernity 
            </button>
        </div>
        <div className='mt-4 flex-1 bg-neutral-300 rounded-2xl border border-dashed border-neutral-500 divide-y divide-neutral-800'>
<div className='text-black'>

<div>
        
</div>

</div>


        </div>
    </motion.div>
  )
}

export default Card