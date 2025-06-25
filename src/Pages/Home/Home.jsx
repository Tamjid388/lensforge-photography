import React from 'react'
import { About } from './About/About'
import { Product } from './Product/Product'
import { NewsLetter } from './Newsletter/NewsLetter'
import { ExclusiveCollection } from './Exclusive/ExclusiveCollection'
import { Banner } from './Banner/Banner'

export const Home = () => {
  return (
    <div>
      <div className="bg-black">
        <Banner/>
      </div>

      <div className="bg-[#f9f5ff] ">
        <About/>
      </div>
       <ExclusiveCollection/>

      <Product/>
      <NewsLetter/>

    
    </div>
  )
}
