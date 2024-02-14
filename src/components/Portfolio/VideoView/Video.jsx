"use client"

import React from 'react'
import {motion} from 'framer-motion'

const Video = ({link,Name,type}) => {
  return (
    <motion.div
    initial={{ opacity: 0,  translateY : 200 }}
    animate={{ opacity: 1, translateY : 0}}
      transition={{ delay: 0,duration : 0.6}}
    >
    <div className='v-main'>
<div className="v-layer"></div>
<div className="v-ab">
<iframe className='v' src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>   
<div className="v-info-ctn">
  <div className="v-name sec-c main-f text-[23px] font-[700]">{Name}</div>
  <div className="v-type sec-c main-f text-[16px]">{type} </div>
</div>
</div>
 </div>
 </motion.div>
  )
}

export default Video