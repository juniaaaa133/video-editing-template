import React from 'react'
import Vid from './Vid'
import { data } from '@/data/video_data'

const VidContainer = () => {
  return (
<div>
{
  data.video_sec.categories.map((data,index) => (
< >
<div className='v-title text-center main-f main-c text-[28px] font-[700]'>{data.name}</div>
    <div className='vctn'>
        {
          data.videos.map((data,idx)=>(
            <Vid txt={data.name} Img={data.img} id={data.id} key={idx}/>
          ))
        }

    </div>
</>
  ))
}
</div>
  )
}

export default VidContainer