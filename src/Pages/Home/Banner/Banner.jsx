import { CirclePlay } from 'lucide-react'
import React, { useState } from 'react'

export const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handlePlay=()=>{
    setShowVideo(true)
  }
    const data=[
        {
            resoulution:"16MP",
            text:"Resolution"
        },
        {
            resoulution:"4K",
            text:"Resolution"
        },
        {
            resoulution:"Pro",
            text:"Grade"
        },
    ]
  return (
     <>
           <div className=' max-w-7xl mx-auto flex flex-col-reverse md:flex-row
            justify-between items-center md:py-18 py-6 ' >
        <div className="md:w-1/2 space-y-6 ">

            <div className='space-y-4 py-4 mx-2'>
                <p className='text-orange-500 font-semibold'>Professional Grade Equipment</p>
                <h1 className='text-5xl font-extrabold text-white'>
                Fujifilm GFX 100S  <br />
                    <span 
                    className='bg-gradient-to-r from-orange-400 to-orange-600
                     bg-clip-text text-transparent'>The LensForge Choice for Creators</span>
                     </h1>
            </div>
            {/* Card */}
             <div className='flex gap-4 text-orange-400'>
    {data.map((item, index) => (
      <div
        key={index}
        className='bg-white/80 border shadow px-4 py-3 rounded-lg text-center w-24'
      >
        <p className='text-xl font-bold text-gray-800'>{item.resoulution}</p>
        <p className='text-sm text-gray-500'>{item.text}</p>
      </div>
    ))}
  </div>
  {/* CTA */}

           


            <div className='flex items-center gap-4'>
               
                <button 
                className='btn text-white  btn-lg transform transition duration-300 hover:scale-105
                bg-linear-to-r from-orange-400 to-orange-600 border-0'>Shop Now

                    
                </button>
                <button onClick={handlePlay} className='transform transition duration-300 hover:scale-105'>
                    <CirclePlay  size={50} className='text-white'/>
                </button>


            </div>
        </div>

        <div className="md:w-1/2    flex justify-end mx-2">
            <img
            className='rounded-2xl transform transition duration-300 hover:scale-105'
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbWVyYXxlbnwwfHwwfHx8Mg%3D%3D"
             alt="camera" />
        </div>
    </div>

        {/* Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full p-4 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setShowVideo(false)}
            >
              ×
            </button>
            <div className="w-full md:h-[500px]">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/6TkNBH3be3s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
     </>
  )
}
