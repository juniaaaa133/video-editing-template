import Link from 'next/link'
import React from 'react'

const Vid = ({txt,Img,id}) => {

  // let txt = 'Photograph by blah blah'
  return (
    <Link href={`/portfolio/video/${id}`} className='sv'>
      <div className="trans sv-layer">
    <div className="trans sv-layer-ctn">
    <div className="sv-title sec-c main-f text-[16px] font-[600]">{txt.length <= 17 ? txt : txt.substring(0,20 ) + '...'}</div>

    <div className="sv-play-ctn">
       <div className="sv-play"></div>
        <div className="sv-rounded"></div>
       </div>
    
    </div>
         </div>
      <img className='sv-img' src={`/image/${Img}`} alt="" />
    </Link>
  )
}

export default Vid