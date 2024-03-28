import React from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const Card = ({id,title1,title2,img}) => {
  return (
    <div id={id} className='w-[250px] bg-[#00F0FF]  py-[10px] border-2 border-black rounded-lg'>
        <div className='px-[10px] flex gap-1 items-center pb-1'>
            <img src="c.svg" alt=""  className='bg-black h-[25px] p-[3px] rounded-full '/>
            <h1 className='font-[14px]'>Join Development</h1>
        </div>
        <hr className='h-[3px] bg-black'/>
        <div className=' flex flex-col items-stretch justify-center text-center border-b-[2px] border-black '>
            <h1 className='font-semibold pt-8 text-[18px]'>{title1} <br />{title2}</h1>
            <img src={img} alt=""  className='w-[240px] h-[190px] -mb-[25px]' />

        </div>

        <div className='flex justify-end px-[10px]'>
        <button className='text-[12px] font-semibold bg-white px-2 py-1 rounded-full text-black flex items-center gap-4 mt-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300'>Explore <p className='bg-gradient-to-r  from-[#FFFF00] to-[#00FFA7] p-1 text-black rounded-full'><FaArrowRight fontSize={10}/></p></button>
            
        </div>
    </div>
  )
}

export default Card