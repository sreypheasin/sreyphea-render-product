import React from 'react'

export default function SkeletonCard() {
    return (
        <div className='bg-white shadow-lg mx-auto w-64 rounded-lg p-3 mt-10 animate-pulse'>
            <div>
                <div className='object-cover w-full h-60 rounded-lg bg-gray-200'></div>
                <div className='h-4 mb-2  mt-2  bg-gray-200 animate-pulse' ></div>
                <p className='h-4 mb-5 bg-gray-200 animate-pulse'></p>
            </div>
            <div className='flex justify-between '>
                <div className='h-8 w-20 pl-4 pr-4 rounded-lg bg-gray-200 '></div>
                <div className='h-8 w-20 pl-4 pr-4 rounded-lg bg-gray-200 '></div>
            </div>
    </div>
      );
}
