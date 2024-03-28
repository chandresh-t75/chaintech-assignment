import React from 'react'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong,FaArrowLeftLong  } from "react-icons/fa6";
import Card from './Card';
import { CardItems } from '../constants/data';

const Home = () => {
  return (
    <>
    <section className=' bg-black text-white flex items-center justify-center'>
        <div className='w-[80%] sm:w-[60%] my-12 flex flex-col items-center'>
            <h1 className='text-[40px] sm:text-[60px] md:text-[100px] font-semibold -mb-2 sm:-mb-6 md:-mb-10'>WELCOME</h1>
            <div className='flex gap-4'>
            <h1 className='text-[40px] sm:text-[60px] md:text-[100px] font-semibold '>TO </h1>
            <h1 class="text-[40px] sm:text-[60px] md:text-[100px] font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-[#FFFF00] to-[#00FFA7]">CHAINTECH</h1>
            </div>
            <p className='text-[18px] text-center'>From square one to engineering excellence! PixelPlex assists in full-cycle software development, jumps in to take it over, or brings dedicated top-demanded skills.</p>
             <button className='text-[18px] font-semibold bg-white px-2 py-1 rounded-full text-black flex items-center gap-4 mt-4 border-2 border-black hover:bg-gradient-to-r  from-[#FFFF00] to-[#00FFA7] transition-all duration-200'>Get Started <FaArrowRight className='bg-black p-1 text-white rounded-full'/></button>
        </div>
    </section>

    <section className='flex flex-col justify-center items-center   my-12'>
        <div className='w-[100%] flex flex-col justify-around px-[40px] md:px-[140px]'>
            <h1 className='text-[30px] sm:text-[36px] md:text-[48px] font-semibold mb-2'>Services We Offer</h1>
            <div className='flex items-center justify-between'>
            <p className='md:text-[16px] lg:text-[18px]'>Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
                 <div className='hidden sm:flex gap-4 items-center'>
                    <div>
                    <FaArrowLeftLong fontSize={18} className=''/>
   
                    </div>
                    <div className=' border-[1px] border-black rounded-full p-1'>
                    <FaArrowRightLong fontSize={18} />
                        
                    </div>
                 </div>
            </div>

        </div>
        <div className='px-[40px] md:px-[120px] my-10'>
            <div className='flex flex-wrap gap-2 gap-y-4 justify-center'>
            
            {
                CardItems.map((card)=>(
                    <Card key={card.id} title1={card.title1} title2={card.title2} img={card.img}/>
                ))
            }
            </div>
        

        </div>
        
    </section>
    </>
  )
}

export default Home