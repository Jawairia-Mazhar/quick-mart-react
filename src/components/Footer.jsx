import React from 'react'
import quickMartIcon from "../assets/QuickMartIcon.png"

const Footer = () => {
  return (
    <Footer 
    class="w-full h-40 text-gray-800 bg-white grid md:grid-cols-[1fr_3fr_2fr] grid-rows-[1fr_3fr_2fr] items-center md:p-4 p-2 gap-4"
    id="contact">
      <div class=""> 
        <img src={quickMartIcon} alt="Quick Mart Logo" class= "w-30 md:w-38 h-12 md:h-16"/>
      </div>
      <div class="flex flex-col gap-1">
        <h4 class="font-bold text-lg">Contact Us</h4>
        <span><span class="font-bold text-sm">Phone:</span> 123-456-7890</span>
        <span><span class="font-bold text-sm">Email:</span> info@quickmart.com</span>
        <span><span class="font-bold text-sm">Address:</span> 123 Main Street, City, State 12345</span>
      </div>
      <div>
        <span class="font-bold text-md">Our Timings</span>
        <div class="flex gap-2 mb-3">
          <span>Monday - Sunday</span>
          <span>12:00 AM - 11:59 PM</span>
        </div>
      </div>
    </Footer>
  )
}

export default Footer