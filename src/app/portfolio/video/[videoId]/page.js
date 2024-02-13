"use client"
import Video from '@/components/Portfolio/VideoView/Video'
import { data } from '@/data/video_data';
import React, { useEffect, useState } from 'react'

const SingleVideoPgae = ({params}) => {

let [Data,setData] = useState([]);

useEffect(()=>{
    let filterVideo = data.video_sec.videos.filter((data) => (
        data.id === +params.videoId
    ))
  setData(filterVideo[0]);
},[])

    return (
    <div>
        <Video link={Data.link} Name={Data.name} type={Data.type}/>
        </div>
  )
}

export default SingleVideoPgae