import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false);
    const handleNav=()=>
    {
        setIsOpen(isOpen=>!isOpen)
    }
  return (
    <>
    <nav className=' bg-black text-white flex justify-between max-md:px-[20px] md:justify-around h-[60px] items-center border-b-[1px] border-b-slate-300'>
        <div>
            <a href="/">
                <img src="/Group.svg" alt="" className='w-[120px]'/>
            </a>
        </div>
        <div className='hidden md:flex gap-8'>
            <a href="/" className='hover:text-green-500 transition-all duration-150'>Company</a>
            <a href="/" className='hover:text-green-500 transition-all duration-150'>Services</a>
            <a href="/" className='hover:text-green-500 transition-all duration-150'>Business Models</a>
            <a href="/" className='hover:text-green-500 transition-all duration-150'>Blogs</a>
            <a href="/" className='hover:text-green-500 transition-all duration-150'>Contact Us</a>
        </div>
        <div className='md:hidden'  onClick={handleNav}>
            {
                isOpen?(
                    <IoMdClose fontSize={30}/>
                ):(<RxHamburgerMenu fontSize={30}/>)
            }
        </div>

    </nav>

   {
   isOpen &&
    <div className='w-full flex flex-col md:hidden  gap-2 bg-black text-white py-4 justify-center items-center border-b-[1px] border-b-slate-300'>
            <a href="/" className='w-full text-center hover:bg-gray-600 transition-all duration-150' onClick={handleNav}>Company</a>
            <a href="/" className='w-full text-center hover:bg-gray-600 transition-all duration-150'onClick={handleNav}>Services</a>
            <a href="/" className='w-full text-center hover:bg-gray-600 transition-all duration-150' onClick={handleNav}>Business Models</a>
            <a href="/" className='w-full text-center hover:bg-gray-600 transition-all duration-150' onClick={handleNav}>Blogs</a>
            <a href="/" className='w-full text-center hover:bg-gray-600 transition-all duration-150' onClick={handleNav}>Contact Us</a>
    </div>
   }

    </>
  )
}

export default Navbar