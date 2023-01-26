import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'


function Topbar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <BsChatSquareDots size={30} 
            className='text-[var(--primary-dark)] mr-2'
            />
            <h1 className='text-gray-700 text-xl md:text-2xl'>WEEK-AWAY</h1>
        </div>
        <div className='flex'>
            <div className='hidden sm:flex items-center justify-center md:px-6 px-4'>
                <AiOutlineClockCircle size={18}
                className='mr-1 text-[var(--primary-dark)]'
                />
                <p className='text-sm text-gray-700'>9AM - 6PM</p>
            </div>
            <div className='hidden sm:flex items-center md:px-6 px-4'>
                <AiFillPhone size={18}
                className='mr-1 text-[var(--primary-dark)]'
                />
                <p className='text-sm text-gray-700'>+91-9999999999</p>
            </div>
            <button>Get a Free Quote</button>
        </div>
    </div>
  )
}

export default Topbar