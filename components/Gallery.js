import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-14'>

        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>

        <div className='grid sm:grid-cols-5 gap-4 '>

            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img src="/images/gallery/image-3.jpg" alt="Resort"
                className='w-full h-full object-cover'
                />
            </div>

            <div>
                <img src="/images/gallery/image-1.jpg" alt="Resort"
                className='w-full h-full object-cover'
                />
            </div>

            <div>
                <img src="/images/gallery/image-2.jpg" alt="Resort" 
                className='w-full h-full object-cover'
                />
            </div>

            <div>
                <img src="/images/gallery/image-4.jpg" alt="Resort" 
                className='w-full h-full object-cover'
                />
            </div>

            <div>
                <img src="/images/gallery/image-5.jpg" alt="Resort" 
                className='w-full h-full object-cover'
                />
            </div>



        </div>

    </div>
  )
}

export default Gallery