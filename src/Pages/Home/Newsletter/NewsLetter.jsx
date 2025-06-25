import React from 'react'

export const NewsLetter = () => {
  return (
       <div className='px-2 max-w-7xl mx-auto flex flex-col-reverse  md:flex-row justify-between items-center py-6 md:py-16 gap-8' >
        <div className="md:w-1/2 space-y-6">

            <div className='space-y-4'>
                <p className='text-orange-500 font-semibold'>About Our Mission</p>
                <h1 className='text-5xl font-extrabold'>
                 Subscribe to <br />
                    <span className='text-orange-500'>our Newsletter</span>
                     </h1>
            </div>

            <p className='font-semibold text-gray-700 text-lg'>
               Stay updated with the latest camera releases, photography tips, exclusive offers, and behind-the-scenes content from professional photographers.
            </p>


            <div>
                <input type="text"
                 placeholder="Enter Your Email address" className="input" />
                <button 
                className='btn text-white bg-linear-to-r from-orange-400 to-orange-600'>Subscribe

                    
                </button>
            </div>
        </div>
        <div className="md:w-1/2 bg-linear-to-r from-orange-400 to-orange-600 p-12 rounded-2xl">
            <img
            className='rounded-2xl transform transition duration-300 hover:scale-105'
            src="https://images.unsplash.com/photo-1513908957990-b2790723edbf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="camera" />
        </div>
    </div>
  )
}
