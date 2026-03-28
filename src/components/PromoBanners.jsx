import React from 'react'
import salePoster1 from '../assets/SalePoster1.jpg'
import salePoster2 from '../assets/SalePoster2.jpg'

const PromoBanners = () => {
  return (
    <section className='w-full px-4 py-6 md:px-8 md:py-5 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
      <div className='overflow-hidden rounded-md shadow-md'>
        <img src={salePoster1} alt="Sale Poster 1" className="h-56 w-full object-fit-cover transition-transform duration-300 hover:scale-105 md:h-80" />
      </div>
      <div className='overflow-hidden rounded-md shadow-md'>
        <img src={salePoster2} alt="Sale Poster 2" className="h-56 w-full object-fit-cover transition-transform duration-300 hover:scale-105 md:h-80" />
      </div>
    </section>
  )
}

export default PromoBanners
