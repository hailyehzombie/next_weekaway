import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-[90vh]  relative'>




            <img src="/hero-background.jpg" alt="Hero-Image"
                className='w-full h-full object-cover'
            />

            <div className='w-full h-full bg-black/40 absolute top-0'>

                <div className='max-w-[1140px] m-auto'>
                    <div className='w-full absolute top-[35%]  md:top-[40%] md:left-[35%] max-w-[600px] h-full flex flex-col text-white p-4 '>
                        <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                        <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                        <p>Grab exciting discounts for your upcoming holidays to our most-loved destinations! Choose from dozens of Holiday Packages & Book your dream vacation with MakeMyTrip! Explore Activities. Gift Cards Available. Chat Support Available.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero