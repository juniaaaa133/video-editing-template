"use client"

import { data } from '@/data/video_data'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const HomeService = () => {

  return (
    <motion.div
    initial={{ opacity: 0,  translateY : 200 }}
    animate={{ opacity: 1, translateY : 0}}
      transition={{ delay: 0,duration : 0.6}}
    >
    <div  className='hs-main'>
      
       
  {
    data.services.map((data,index) => (
        <div key={index} className="hs-div">

        <div className="hm-layer"></div>
        <img src={`/image/${data.img}`}  alt="" className="trans pic hs-img" />
       <div className="hs-div-ab">
       <div className="hs-title main-f main-c text-[16px] font-[700]">
       {data.name}
       </div>
       <div className="text-justify hs-desc main-f sec-c text-[14px] font-[500]">
        {
      data.desc
        }
       </div>
        </div>
       </div>
    ))
  }
    </div>
    </motion.div>
  )
}

export default HomeService