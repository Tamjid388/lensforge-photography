import React, { useEffect, useState } from 'react'
import axios from "axios";
export const Product = () => {
     const [products, setProducts] = useState([]);
       const fetchProducts = async () => {
    try {
      const response = await axios.get("/product.json");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div className='max-w-7xl m-auto  py-6 md:py-16 px-2 '>
        <h1 className='text-center font-bold text-4xl pt-6 mb-8'>Our Product</h1>
        <div className='grid grid-cols-1  md:grid-cols-3 gap-6'>
           { products.map(product=><div
            key={product.id} className="card bg-base-100  shadow-sm">
  <figure className='h-[250px]'>
    <img
    className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
      src={product.img}
      alt="product.name" />
  </figure>
  <div className="card-body space-y-1">
    <h2 className="card-title text-2xl font-bold">{product.category}</h2>
    <p className='font-bold opacity-65'>{product.name}</p>
    <div className="card-actions ">
      <button className="w-full btn bg-gradient-to-r from-orange-400 to-orange-600 text-white">Buy Now</button>
    </div>
  </div>
</div>)}
        </div>
    </div>
  )
}
