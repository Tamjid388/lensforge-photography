import { Camera, Focus, MoveRight } from 'lucide-react'
import React from 'react'

export const About = () => {
  return (
    <div className='px-2 max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-12 gap-4' >
        <div className="md:w-1/2 space-y-6">

            <div>
                <p className='text-orange-500 font-semibold'>About Our Mission</p>
                <h1 className='text-5xl font-extrabold'>
                    Who <br />
                    <span className='text-orange-500'> We are</span>
                     </h1>
            </div>

            <p className='font-semibold text-gray-700 text-lg'>
                We believe that every photographer has a story, and every story deserves to be captured with precision and artistry. Our mission is to empower passionate
                 photographers and engineers with cutting-edge technology.
            </p>

           {/* cards */}
<div className="flex flex-col md:flex-row space-x-4 gap-4">
  {/* Card 1 */}
  <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-md w-64">
    <div className="mb-2">
      <p className="btn bg-gradient-to-r from-orange-400 to-orange-600 text-white p-2 rounded-md">
        <Camera />
      </p>
    </div>
    <h1 className="font-bold text-black text-lg">Innovation</h1>
    <p className="font-semibold text-center opacity-80">
      Cutting-edge camera technology
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-md w-64">
    <div className="mb-2">
      <p className="btn bg-gradient-to-r from-indigo-400 to-indigo-600 text-white p-2 rounded-md">
        <Focus />
      </p>
    </div>
    <h1 className="font-bold text-black text-lg">Precision</h1>
    <p className="font-semibold text-center opacity-80">
      Unmatched image quality
    </p>
  </div>
</div>

            <div>
                <button className='btn
                 text-white bg-linear-to-r from-orange-400 to-orange-600'>Learn More

                    <span>
                        <MoveRight />
                    </span>
                </button>
            </div>
        </div>
        <div className="bg-linear-to-r from-orange-400 to-orange-600 p-12 rounded-2xl">
            <img
            className='rounded-2xl'
            src="https://images.unsplash.com/photo-1500634245200-e5245c7574ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhbWVyYXxlbnwwfHwwfHx8Mg%3D%3D"
             alt="camera" />
        </div>
    </div>
  )
}
