import VidContainer from '@/components/Portfolio/VideoCtn/VidContainer'
import Video from '@/components/Portfolio/VideoView/Video'
import VideoView from '@/components/Portfolio/VideoView/VideoView'
import React from 'react'

const PortfolioPage = ({params}) => {
  return (
    
    params.slug?.length == 1 ?
    <div>
        <VidContainer/>
    </div>
    :
    <div>
        {params.slug[1]}
    </div>
  )
}

export default PortfolioPage