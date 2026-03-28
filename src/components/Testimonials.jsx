import React from 'react'

const Testimonials = () => {
  return (
    <section class="w-full h-auto p-4 md:p-6 scroll-mt-18" id="testimonials">
      <h3 class="p-2 text-2xl text-gray-700 font-bold text-center">Customer Testimonials</h3>

        <div class="flex flex-col md:flex-row gap-4 justify-center items-center p-2 md:p-5">

          <div class="w-full md:w-1/3 bg-gray-100 rounded-lg p-4">
            <p class="text-gray-700 italic">"Quick Mart has completely transformed my grocery shopping experience. The quality of their products is outstanding, and the convenience of their online ordering system saves me so much time."</p>
            <span class="block mt-2 text-sm font-semibold text-gray-800">- Sarah M.</span>
          </div>
          <div class="w-full md:w-1/3 bg-gray-100 rounded-lg p-4">
            <p class="text-gray-700 italic">"I love the variety of products that Quick Mart offers. From fresh produce to pantry staples, they have everything I need. The prices are competitive, and the customer service is top-notch. Highly recommend!"</p>
            <span class="block mt-2 text-sm font-semibold text-gray-800">- John D.</span>
          </div>
          <div class="w-full md:w-1/3 bg-gray-100 rounded-lg p-4">
            <p class="text-gray-700 italic">"Quick Mart is my go-to for all my grocery needs. The quality of their products is consistently excellent, and the convenience of their delivery service is unbeatable. I can't recommend them enough!"</p>
            <span class="block mt-2 text-sm font-semibold text-gray-800">- Emily R.</span>
          </div>

        </div>
    </section>
  )
}

export default Testimonials