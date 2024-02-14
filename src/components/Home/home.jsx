import React from 'react'
import '../css/index.css';
import Link from 'next/link';
import Image from 'next/image';
import HomeAbout from './homeAbout';
import HomeService from './homeService';
import { data } from '@/data/video_data';
import { motion } from "framer-motion"

const HomePage = () => {
  return (
<>
<motion.div
initial={{ opacity: 0,  translateY : 200 }}
animate={{ opacity: 1, translateY : 0}}
  transition={{ delay: 0,duration : 0.6}}
>
<div className='hm-main'> 
            <div className="hm-img-sec ">
    <div className="hmlayer1 top-0 left-0"></div>
    <div className="hmlayer2 top-[60%] left-[20px]"></div>
    <div className="hmlayer1 bottom-0 right-0"></div>
    <div className="hmlayer2 bottom-[60%] right-[20px]"></div>

                <img className='pic w-full h-full hmimg' src={`/image/${data.home.hero_sec.hero_image}`} />
            </div>

        <div className='hm-txt-sec'>
            <div className="ht-title main-f text-[14px] font-[700]  sec-c">
               {data.home.hero_sec.intro_text}
            </div>
            <div className="ht-desc main-f text-[32px] font-[600] main-f main-c">
            {data.home.hero_sec.title_text}
            </div>
            <div className="text-justify ht-desc2 main-f sec-c text-[14px] font-[400] opacity-[.9]">
            {data.home.hero_sec.desc_text}
            </div>
            <button className="ht-btn w-[150px]">
                <Link href={data.home.hero_sec.btn_edit.btn_path} className='w-btn trans main-f'>{data.home.hero_sec.btn_edit.btn_name}</Link>
            </button>
        </div>
    </div>
    </motion.div>
    <div className="bar"></div>
    <HomeService />
    <div className="bar"></div>
    <HomeAbout />
</>
  )
}

export default HomePage