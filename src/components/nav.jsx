"use client"

import React, { useEffect, useState } from 'react'
import './css/index.css';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const Nav = () => {

  let categoryRoute = [
    {path : '/portfolio/all', name : "All"},
        {path : '/portfolio/documentry', name : "Documentry"},
    {path : '/portfolio/animation', name : "Animation"},
    {path : '/portfolio/fancy', name : "Fancy"},
    {path : '/portfolio/production', name : "Editing Production"},

  ]

    const [show, setShow] = useState(true);
  let [mega,openMega] = useState(false);
  let [hideNav,setHideNav] = useState(true);
  let [screen,setScreen] = useState(false);
let ScrollNav = () => {
if(typeof window !== undefined) {
    if(window.scrollY > 200){
        setShow(false); //On scroll-Nav
    }else {
        setShow(true); //Off scroll-Nav
    }
    // setLastScrollY(0)
    console.log(window.scrollY,show)
}
}

useEffect(()=>{
    if(typeof window !== undefined) {
        window.addEventListener('scroll',ScrollNav)
    }
},[])

  return (
 <>
 
 <div className={`sec-f nv-main w-[100%] h-[80px] ${show == false ? '' : ''}`}>
        <Link className='nv-logo sec-f' href='/' >Williams</Link>
        <div className='nv-list-ctn gap-[30px] text-[13px] font-[500] items-center '> 
        <Link className='nv-link trans'   href='/'>Home</Link>
        <div className='nv-port-ctn '>
            <div className='nv-link trans bcn'>Portfolio</div>
            <div className='nv-port-abs sec-f text-[13px] font-[500]'>
             {
             categoryRoute.map((data,index) => (
                <Link className='nv-link trans' key={index} href={data.path} >{data.name}</Link>
             ))
             }
            </div>
        </div>
        <Link className='nv-link trans' href='/about'>About</Link>
        <Link className='nv-link trans' href='/contact'>Contact</Link>
        </div>
       
      <IoMdMenu onClick={()=>setHideNav(false)} className='nv-mb-icn text-white text-[30px] '/>
        {/**Android Screen */}
        <div className={hideNav == false ? 'trans nv-ad-ctn' : 'trans nv-ad-ctn-hide'}>
          <FaPlus onClick={()=>setHideNav(true)} className='nvcl'/>
            <Link onClick={()=>setScreen(false)} className='nv-link text-black trans' href='/'>Home</Link>
           <div onClick={()=>openMega(!mega)} className='trans flex gap-[8px] items-center nav-link text-black nv-mb-mega'>
            <div >Portfolio</div>
            <MdOutlineKeyboardArrowUp className={mega == false ? 'trans ' :'trans nvmbop'} />
           </div>
           <div className={mega == false ? 'hidden' : 'nv-mb-mega-sec'}>
             {
              categoryRoute.map((data,index) => (
                <Link onClick={()=>setScreen(false)} key={index} className='nv-link text-black trans' href={data.path}>{data.name}</Link>
                ))
            } 
           </div>
            <Link onClick={()=>setScreen(false)} className='nv-link text-black trans' href='/about'>About</Link>
            <Link onClick={()=>setScreen(false)} className='nv-link text-black trans' href='/contact'>Contact</Link>

        </div>
    </div>


    <div className={show == false ? 'trans  top-0 nv-sc ' : ' trans top-[-200px] nv-sc'}>
    <Link className='nv-logo sec-f' href='/' >Williams</Link>

      <IoMdMenu onClick={()=>setScreen(true)} className=' text-white text-[20px] bcn'/>
    </div>
    <div className={screen == true ? 'nv-sc-op top-0 trans' : 'nv-sc-op top-[-100%] trans'}>
    <FaPlus onClick={()=>setScreen(false)} className='nvcl'/>
            <Link onClick={()=>setScreen(false)} className='nv-link text-black trans bcn' href='/'>Home</Link>
           <div onClick={()=>openMega(!mega)} className='trans flex gap-[8px] items-center nav-link text-black nv-mb-mega'>
            <div className='bcn'>Portfolio</div>
            <MdOutlineKeyboardArrowUp className={mega == false ? 'trans ' :'trans nvmbop'} />
           </div>
           <div className={mega == false ? 'hidden' : 'nv-mb-mega-sec'}>
             {
              categoryRoute.map((data,index) => (
                <Link onClick={()=>setScreen(false)} key={index} className='nv-link text-black trans bcn' href={data.path}>{data.name}</Link>
                ))
            } 
           </div>
            <Link onClick={()=>setScreen(false)} className='nv-link text-black trans bcn' href='/about'>About</Link>
            <Link onClick={()=>setScreen(false)} className='nv-link text-black trans bcn' href='/contact'>Contact</Link>

    </div>
 </>
  )
}

export default Nav