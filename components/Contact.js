import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16 '>

        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p  className='text-center text-gray-700 py-2'>We're standing by!</p>

        <div className='grid md:grid-cols-2 '>
            
            <img src="/images/form.jpg" alt="form"
            className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
            />

            <form>

                <div className='grid grid-cols-2'>
                    
                    <input type="text" placeholder='First Name'
                    className='border m-2 p-2 '
                    />

                    <input type="text" placeholder='Last Name'
                    className='border m-2 p-2 '
                    />

                    <input type="email" placeholder='Email' 
                    className='border m-2 p-2'
                    />

                    <input type="tel" placeholder='Phone Number'
                    className='border m-2 p-2' 
                    />

                    <input type="text" placeholder='Address' 
                    className='border col-span-2 m-2 p-2'/>

                    <textarea cols="10" rows="10"
                    placeholder='Message'
                    className='border col-span-2 m-2 p-2'
                    ></textarea>

                    <button className='col-span-2 m-2 p-2'>Submit</button>
                    
                </div>


            </form>

        </div>

    </div>
  )
}

export default Contact