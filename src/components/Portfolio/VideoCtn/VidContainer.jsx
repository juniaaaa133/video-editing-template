"use client"

import React from 'react'
import Vid from './Vid'
import { data } from '@/data/video_data'
import {motion} from 'framer-motion'

const VidContainer = ({data_to_filter}) => {
  return (
    <motion.div
    initial={{ opacity: 0,  translateY : 200 }}
    animate={{ opacity: 1, translateY : 0}}
      transition={{ delay: 0,duration : 0.6}}
    >
<div>
{
  data.video_sec.categories.map((data,index) => (
data_to_filter == 'all' ? 
<React.Fragment key={index} >
<div className='v-title text-center main-f main-c text-[28px] font-[700]'>{data.name}</div>
    <div className='vctn'>
        {
          data.videos.map((data,idx)=>(
            <Vid txt={data.name} Img={data.img} id={data.id} key={idx}/>
          ))
        }

    </div>
</React.Fragment>
                        :
  data.type == data_to_filter ?
  <React.Fragment key={index} >
<div className='v-title text-center main-f main-c text-[28px] font-[700]'>{data.name}</div>
    <div className='vctn'>
        {
          data.videos.map((data,idx)=>(
            <Vid txt={data.name} Img={data.img} id={data.id} key={idx}/>
          ))
        }

    </div>
</React.Fragment>
:
<></>
  ))
}
</div>
</motion.div>
  )
}

export default VidContainer