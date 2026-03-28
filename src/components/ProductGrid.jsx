import React from 'react'
import {mostBoughtProducts} from "../data.js"
import ProductCard from './ProductCard.jsx';

const ProductGrid = ({ cart, onAdd, onIncrease, onDecrease }) => {
  return (
    <section
      id="products" className="scroll-mt-24 ">
        <h3 className="text-xl font-semibold text-gray-700 p-2">Best Selling Products</h3> 
        <div className="overflow-y-auto md:overflow-visible">
          <div id="products-container" className="flex gap-y-4 p-2 md:grid md:grid-cols-6 md:justify-center md:p-5 gap-x-6 md:gap-12">
            {mostBoughtProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                onAdd={onAdd}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
              />
            ))}
          </div>
        </div>
    </section>
  )
}

export default ProductGrid