import React from 'react'

const About = () => {
  return (
 <>
    <div className='abtt-main bar'>
      <div className="abtt-title main-f main-c text-[28px] font-[700] text-center">About Me</div>
      <div className="abtt-detail-ctn">
        <div className="text-justify abtt-txt text-[15px] font-[500] sec-c main-f">
          {
            `
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet. comes from a line in section 1.10.32.
            `
          }
        </div>
        <div className="abtt-img">
          <img src={`/image/person.jpg`} alt="" className=" pic w-[100%] h-[100%] abttimg" />
        </div>
      </div>
      
    </div>
    <div className="abtt-info-ctn">
      <div className="abtt-info shadow-md">
        <div className="abtt-count main-f main-c text-[78px] font-[700]">20</div>
        <div className="abtt-title main-f sec-c text-[16px] font-[500] text-center">Clients</div>

      </div>
      <div className="abtt-info shadow-md">
        <div className="abtt-count main-f main-c text-[78px] font-[700]">+3</div>
        <div className="abtt-title main-f sec-c text-[16px] font-[500] text-center ">Years Experience</div>

      </div>
      <div className="abtt-info shadow-md">
        <div className="abtt-count main-f main-c text-[78px] font-[700]">+500</div>
        <div className="abtt-title main-f sec-c text-[16px] font-[500] text-center">Projects</div>

      </div>
    </div>
 </>
  )
}

export default About