import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
<div className='bar flex w-[100%] items-center justify-center flex-col'>
    <div className="ctctn font-[700] main-f main-c text-[28px]">Contact Me</div>
    <form className="flex gap-[20px] w-[100%] items-center justify-center flex-col ct-ctn">
        <input type='email' placeholder='Email' className=' sec-c text-[14px] font-[600] main-f inp'/>
        <input type='text' placeholder='Name' className=' sec-c text-[14px] font-[600] main-f inp'/>
        <textarea className='inp0 sec-c text-[14px] font-[600] main-f ' placeholder='Message'></textarea>
<div className=" cbt">
<button className='w-btn bcn text-[16px] main-f trans'>Submit</button>
</div>
    </form>


</div>
  )
}

export default Contact