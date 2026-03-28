import React from 'react'
import about from "../assets/about.png"

const AboutUs = () => {
  return (
// About Us section
    <section className="py-12 px-4 md:px-8 bg-orange-400 scroll-mt-18"
     id="about-us">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* <!-- Image --> */}
        <div className="md:w-1/2">
          <img src={about} alt="Quick Mart - Quality Groceries" className="rounded-lg w-[90%]"/>
        </div>
        
        {/* <!-- Text Content --> */}
        <div className="md:w-1/2 space-y-4">
              <h2 className="max-w-6xl text-4xl font-bold text-white mb-6 text-left">About Quick Mart</h2>
                <p className="text-black leading-relaxed">
                    At Quick Mart, we believe that quality groceries should be accessible, affordable, and convenient for everyone. Founded with a mission to transform the way families shop for everyday essentials, we've grown into your trusted neighborhood source for fresh produce, quality meats, dairy products, and pantry staples.
                </p>
                
                <p className="text-black leading-relaxed">
                    Every product we stock is carefully selected to meet our high standards for freshness and quality. From farm-fresh vegetables and fruits to premium meats and essential groceries, we're committed to bringing you the best selection at competitive prices.
                </p>
                
                <p className="text-black leading-relaxed">
                    Our fast, friendly service and convenient shopping experience mean you can focus on what matters most—your family and home. Whether you're shopping for a quick meal or stocking your pantry, Quick Mart is here to make your life easier, one shopping trip at a time.
                </p>
                
                <div className="pt-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Why Choose Quick Mart?</h3>
                    <ul className="space-y-2 text-black">
                        <li className="flex items-center"><span className="text-white font-bold mr-2">✓</span> Fresh Quality Products</li>
                        <li className="flex items-center"><span className="text-white font-bold mr-2">✓</span> Competitive Pricing</li>
                        <li className="flex items-center"><span className="text-white font-bold mr-2">✓</span> Fast & Convenient Shopping</li>
                        <li className="flex items-center"><span className="text-white font-bold mr-2">✓</span> Friendly, Helpful Staff</li>
                    </ul>
                </div>
          </div>
            
        </div>
      </section>  
  )
}

export default AboutUs