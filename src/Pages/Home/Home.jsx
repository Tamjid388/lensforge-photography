import React from 'react'
import { About } from './About/About'
import { Product } from './Product/Product'
import { NewsLetter } from './Newsletter/NewsLetter'

export const Home = () => {
  return (
    <div>

      <div className="bg-[#f9f5ff] ">
  <About/>
      </div>

      <Product/>
      <NewsLetter/>
    
    </div>
  )
}
