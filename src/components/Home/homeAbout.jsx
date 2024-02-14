"use client"

import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
const HomeAbout = () => {
  return (
    <motion.div
initial={{ opacity: 0,  translateY : 200 }}
animate={{ opacity: 1, translateY : 0}}
  transition={{ delay: 0,duration : 0.6}}
>
    <div className='habt-main'>

        <div className="habt-title">
            <div className="habt-tit main-c main-f font-[600] text-[62px] ">Who I am</div>
          
            <div className="hbbtn">
     <button className='habt-btn ad0'>
            <Link href='/about' className='b-btn trans bcn sec-c main-f'>About Me</Link>
          </button>
          <button className='habt-btn ad0'>
            <Link href='/contact' className='w-btn trans bcn sec-c main-f'>Contact Me</Link>
          </button>
     </div>
        </div>

        <div className="habt-txt main-f sec-c text-[15px]">
{
    `
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet. comes from a line in section 1.10.32.

    `
}
        </div>

     <div className="hbbtn">
     <button className='habt-btn ad'>
            <Link href='/' className='b-btn trans bcn sec-c main-f'>About Me</Link>
          </button>
          <button className='habt-btn ad'>
            <Link href='/' className='w-btn trans bcn sec-c main-f'>Contact Me</Link>
          </button>
     </div>
    </div>
    </motion.div>
  )
}

export default HomeAbout