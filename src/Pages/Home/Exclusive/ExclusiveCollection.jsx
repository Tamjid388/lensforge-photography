import React from 'react'

export const ExclusiveCollection = () => {
  const text=[
    {
      num:"102MP",
      contennt:"Resolution"
    },
    {
      num:"15",
      contennt:"Stops DR"
    }
  ]
  return (
    <div className='max-w-7xl mx-auto py-16'>
<div className='space-y-3'>
        <p className='text-center font-bold text-orange-400'>Premium Collection</p>
      <h1 className='text-4xl font-bold md:font-extrabold text-center'>Our Exclusive
Camera just for you</h1>
<p className='text-xl opacity-80 font-semibold text-center'>Phase One XT IQ4 150MP</p>
</div>
<div className='mx-2 p-4 md:p-12 mt-8
  bg-linear-to-r from-orange-400 to-orange-600 flex flex-col-reverse
  md:flex-row  rounded-2xl
 '>
<div className='md:w-1/2 flex flex-col justify-center '>
  
  <div className="">
    <div className='space-y-2'>
      <p className='font-semibold text-sm'>Hasselblad X2D 100C</p>
      <p className='text-4xl font-bold'>$22,000</p>
      <p className='font-semibold '>Best Rangefinder</p>
    </div>
  </div>
  {/* Card */}
    <div className='flex gap-3 mt-4'>
            {text.map((item, idx) => (
              <div
                key={idx}
                className='bg-white/60 text-black rounded-lg px-4 py-2 w-28 text-center shadow-md'
              >
                <p className='text-lg font-bold'>{item.num}</p>
                <p className='text-sm font-medium opacity-70'>{item.contennt}</p>
              </div>
            ))}
          </div>


  <div className="mt-4 flex gap-4">
    <button className='btn bg-black text-white border-0'>Add To Cart</button>
    <button className='btn btn-outline'>Wishlist</button>
  </div>
</div>
{/* Right div */}
  <div className='md:w-1/2 flex justify-end'>
    <img
    className='rounded-2xl'
    src="https://images.unsplash.com/photo-1561930133-3e34c4e51e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGFzc2VsYmxhZCUyMGxlbnN8ZW58MHx8MHx8fDI%3D" alt="" />
  </div>

</div>
    </div>
  )
}
