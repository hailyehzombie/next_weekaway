import React from 'react'

const Activites = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px] '>
            
            <div className='relative p-4 '>
                <h3 className='text-zinc-100 text-3xl font-bold absolute z-10 top-[50%] left-[40%] '>
                    Resort
                </h3>
                <img src="/images/resort.jpg" alt="resort" 
                className='w-full h-full  object-cover border-white shadow-lg '/>
            </div>

            <div className='relative p-4'>
                <h3 className='text-white text-2xl font-bold absolute z-10 top-[50%] left-[40%]'>
                    Cruise
                </h3>
                <img src="/images/cruise.jpg" alt="cruise" 
                className='w-full h-full  object-cover border-white shadow-lg'/>
            </div>

            <div className='relative p-4'>
                <h3 className='text-white text-2xl font-bold absolute z-10  top-[50%] left-[40%]'>
                    Water-Diving
                </h3>
                <img src="/images/water-diving.jpg" alt="water-diving" 
                className='w-full h-full  object-cover border-white shadow-lg'/>
            </div>

        </div>
    )
}

export default Activites