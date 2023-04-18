import React from 'react'
import Button from './utils/Button'

export default function ProductCard({product}) {
  return ( 
    <div className='bg-white shadow-lg mx-auto w-64 rounded-lg p-3 mt-10 '>
        <div  >
            <img src={product.images} className='object-cover w-full rounded-lg'></img>
            <h2 className='mb-2 line-clamp-1 mt-2 text-2xl opacity-75 text-black line-clamp-1'>{product.title}</h2>
            <p className='mb-5 text-base line-clamp-3 opacity-50 overflow-hidden'>{product.description}</p>

        </div>
        <div className='flex justify-between '>
            <Button color={"#1e40af"} title='Buy'/>
            <Button title='Add to cart'/>
        </div>
    </div>
  )
}
