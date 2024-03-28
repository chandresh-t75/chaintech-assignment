import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-10 text-white'>
        <div className='flex flex-col justify-between items-center gap-2'>
            <img src="/Group.svg" alt="" height={40}/>
            <hr className='w-[80%] sm:w-[60%] mt-2 h-2 text-gray-400'/>
            <p className='text-[12px] sm:text-[14px]'>@ 2024 All Rights Reserved-ChainTech Network</p>
        </div>
    </footer>
  )
}

export default Footer