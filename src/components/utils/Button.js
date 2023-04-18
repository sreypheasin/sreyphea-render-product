import React from 'react'

export default function Button({title}) {
  return (
    <button className='text-white bg-blue-950 p-1 pl-4 pr-4 rounded-lg hover:bg-blue-900' >{title}</button>
  )
}
