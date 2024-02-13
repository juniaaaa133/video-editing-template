import React from 'react'

const VideoView = ({link}) => {
  return (
    <div className='vw-main'>
        <iframe className='vw-ctn' src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>   
    </div>
  )
}

export default VideoView