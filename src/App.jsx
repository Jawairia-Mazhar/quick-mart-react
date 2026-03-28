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
import { useState } from 'react'

const App = () => {
  const [cart, setCart] = useState({});

  function onAdd(product) {
    setCart(prev => ({ // Current cart state is passed as 'prev'
      ...prev,
      [product.id]: prev[product.id]
        ? { ...prev[product.id], qty: prev[product.id].qty + 1 }
        : { ...product, qty: 1 }
    }));
  }

  function onIncrease(productId) {
    setCart(prev => ({
      ...prev,
      [productId]: { ...prev[productId], qty: prev[productId].qty + 1 }
    }));
  }

  function onDecrease(productId) {
    setCart(prev => {
      const item = prev[productId];
      if (item.qty === 1) {
        const updated = { ...prev };
        delete updated[productId];
        return updated;
      }
      return { ...prev, [productId] : { ...item, qty: item.qty - 1 } };
    });
  }
  return (
    <class>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <PromoBanners />
      <ProductGrid         
        cart={cart}
        onAdd={onAdd}
        onIncrease={onIncrease}
        onDecrease={onDecrease}/>
      <AboutUs />
      <Stats />
      <Testimonials />
      <Footer />
    </class>
  )
}

export default App