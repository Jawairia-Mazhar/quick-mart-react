import React from 'react'
import satisfiedCustomer from "../assets/satisfied-customer.png" 
import inStock from "../assets/in-stock.png"
import categorise from "../assets/categorise.png"
import medal from "../assets/medal.png"

const Stats = () => {
  return (
// customers, products, categories, and awards section
    <section class="w-80% h-35 p-4 grid grid-cols-4 justify-center items-center gap-2 m-2">

      <div class="md:flex md:space-x-3 place-items-center" >
        <img src={satisfiedCustomer} alt="satisfied customer"     class="object-cover w-10 h-10 md:w-12 md:h-12 md:ml-20 icon-amber"/>
          <div class="flex flex-col">
            <span class="md:text-xl font-semibold text-center md:text-left">1,800<span class="text-amber-300">+</span></span>
            <span class="text-center">Satisfied Customers</span>
          </div>
     </div>
      <div class="md:flex md:space-x-3 place-items-center" >
        <img src={inStock} alt="satisfied customer" 
          class="object-cover w-10 h-10 md:w-12 md:h-12 md:ml-20 icon-amber"/>
          <div class="flex flex-col">
            <span class="md:text-xl font-semibold text-center md:text-left">362<span class="text-amber-300">+</span></span>
            <span class="text-center">Active Products</span>
          </div>
     </div>
      <div class="md:flex md:space-x-3 place-items-center" >
        <img src={categorise} alt="satisfied customer" class="object-cover w-10 h-10 md:w-12 md:h-12 md:ml-20 icon-amber"/>
          <div class="flex flex-col"> 
            <span class="md:text-xl font-semibold text-center md:text-left">30<span class="text-amber-300">+</span></span>
            <span class="text-center">Food Categories</span>
          </div>
     </div>
      <div class="md:flex md:space-x-3 place-items-center" >
        <img src={medal} alt="satisfied customer" class="object-cover w-10 h-10 md:w-12 md:h-12 md:ml-20 icon-amber"/>
          <div class="flex flex-col">
            <span class="md:text-xl font-semibold text-center md:text-left">100<span class="text-amber-300">+</span></span>
            <span class="text-center ">Awards Winning</span>
          </div>
     </div>
    </section>  )
}

export default Stats