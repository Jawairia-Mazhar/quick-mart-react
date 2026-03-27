import React from 'react'
import coverImage from "../assets/coverImage.png"

const Hero = () => {
  return (
    <main 
      className="flex flex-col md:flex-row items-center scroll-mt-25 md:justify-between mt-1.5 p-3 bg-orange-400"  
      id="home-page">
        <div className="md:ml-13 space-y-4 mt-4">
            <h1 className="text-5xl text-orange-50 font-bold">Your trusted destination for everyday essentials.</h1>
            <p className="text-xl">Your one‑stop store for groceries, essentials, and everyday needs — fast, affordable, and always convenient.</p>
            <button className="px-6 py-3 text-black bg-orange-50 hover:bg-orange-600 rounded-2xl transition duration-300 cursor-pointer"><a href="#products" style={{ textDecoration: 'none', color: 'inherit' }}>Shop Now</a></button>
        </div>
        <img src={coverImage} alt="cover page image" className="object-cover w-120 h-120 md:mt-14 md:mr-20"></img>
    </main>
  )
}

export default Hero