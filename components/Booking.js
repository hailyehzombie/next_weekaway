import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4  overflow-hidden'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            
            <div className='flex flex-col my-2 py-2'>
                <label>Desitination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option>Grande Antigue</option>
                    <option>Maldives</option>
                    <option>Key West</option>
                    <option>Cozunel</option>
                </select>
            </div>

            <div className='flex w-full'>
                <div className='flex-col sm:flex-row  w-full lg:max-w-[250px] my-2 p-2'>
                    <label>Check-In:</label>
                    <input type="date" 
                    className='border rounded-md sm:m-2'
                    />
                </div>
                <div className='flex-col sm:flex-row  w-full lg:max-w-[250px] my-2 p-2'>
                    <label>Check-Out:</label>
                    <input type="date" 
                    className='border rounded-md  sm:p-2'
                    />
                </div>
            </div>

            <div className='flex flex-col my-2 p-2 w-full'>
               <label className='w-full text-center'>Search</label> 
               <button>Rated & Availabities</button>
            </div>

        </form>
    </div>
  )
}

export default Booking