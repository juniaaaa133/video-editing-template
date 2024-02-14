import VidContainer from '@/components/Portfolio/VideoCtn/VidContainer'
import Video from '@/components/Portfolio/VideoView/Video'
import VideoView from '@/components/Portfolio/VideoView/VideoView'
import React from 'react'

const PortfolioPage = ({params}) => {
  return (
    
    params.slug?.length == 1 ?
    <div>
        <VidContainer data_to_filter={params.slug[0]}/>
    </div>
    :
    <div>
        {params.slug[0]}
        
    </div>
  )
}

export default PortfolioPage