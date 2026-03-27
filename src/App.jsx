import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedCategories from "./components/CategoryList"
import PromoBanners from "./components/PromoBanners"
import ProductGrid from "./components/ProductGrid"
import AboutUs from "./components/AboutUs"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {
  return (
    <class>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <PromoBanners />
      <ProductGrid />
      <AboutUs />
      <Stats />
      <Testimonials />
      <Footer />
    </class>
  )
}

export default App