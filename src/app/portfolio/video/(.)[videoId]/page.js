"use client"

import VideoView from '@/components/Portfolio/VideoView/VideoView'
import { data } from '@/data/video_data'
import React, { useEffect, useState } from 'react'

const SingleVideeShowOffPage = ({params}) => {

let [Data,setData]  = useState([]);


useEffect(()=>{
    let filterVideo = data.video_sec.videos.filter((data) => (
        data.id === +params.videoId
    ))
    setData(filterVideo[0])
},[])

  return (
    <div>
        <VideoView link={Data.link}/>
    </div>
  )
}

export default SingleVideeShowOffPage