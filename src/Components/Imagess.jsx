import React from 'react'
import Images from '../assets/Images.webp'

function Imagess() {
  return (
    <div className='relative w-full h-screen' >
        <img src={Images} alt="images" className='"absolute inset-0 w-full h-full object-cover z-0 ' />
    </div>
  )
}

export default Imagess