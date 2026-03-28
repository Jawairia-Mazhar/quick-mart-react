import React from 'react'
import plusIcon from "../assets/plus.png"
import minusIcon from "../assets/minus.png" 
import cartBasket from "../assets/basket.png"
// import {mostBoughtProducts} from "../data.js"

const ProductCard = ({ product, cart, onAdd, onIncrease, onDecrease }) => {
    const inCart = cart[product.id]; // Check if the product is in the cart
    const qty = inCart ? inCart.qty : 0 // Get the quantity from the cart, default to 0 if not in cart
  return (
    <div className='trigger w-50 h-53 shrink-0 rounded-2xl flex flex-col bg-amber-100 gap-1 items-left p-2 hover:shadow-md shadow-orange-400 transition duration-300 text-center rounded-bl-4xl rounded-br-4xl'>

          <div className="product-image w-full md:h-30 bg-white rounded-2xl grid items-center justify-center">
              <img src={product.image} alt={product.name} className="h-28 object-contain" />

              {!inCart ? (
                <>
                  { /* desktop view cart button */ }
                  < button
                    onClick = {() => onAdd(product)}
                    className="add-to-cart desktop-add-btn w-26 cursor-pointer z-10 hidden bg-orange-400" data-id={product.id}>
              <span className=" text-sm font-medium text-white">Add to Cart</span>
          </button>
         {/* mobile view cart button */}
          <button data-id={product.id}
              onClick={() => onAdd(product)}
              className="add-to-cart md:hidden absolute z-10 bottom-1 right-1 bg-orange-400 p-1 rounded-full">
              <img src={cartBasket} alt="cart basket" className="w-5 h-5 cursor-pointer filter brightness-0 invert" />
          </button>
          </>
          ) : (
          <div className="quantity-controls justify-between rounded-xl w-18 overflow-hidden border border-gray-300 " id="quantity-ctrl">

              <button onClick={() => onIncrease(product.id)} 
                className="btn-plus w-6 h-5 bg-orange-400 text-white font-bold" aria-label="Increase quantity">
                  <img src={plusIcon} alt="Plus" className="w-full h-full object-contain brightness-0 invert" />
              </button>

              <input type="text" className="text-sm font-medium w-8 text-center border-l border-r border-gray-200 " data-id={product.id} min="1" value={qty} />

              <button onClick={() => onDecrease(product.id)} 
              className="btn-minus w-6 h-5 bg-orange-400 font-bold" aria-label="Decrease quantity">
                  <img src={minusIcon} alt="Minus" className="w-full h-full object-contain text-white brightness-0 invert" />
              </button>
          </div>
          )}  
      </div>

      <span className="text-md font-medium">{product.name}</span>
      <span className="text-xs">Fresh {product.name} | {product.quantity}</span>
      <span className="text-sm font-medium">Rs. {product.price}</span>
    </div>
  );
}

export default ProductCard