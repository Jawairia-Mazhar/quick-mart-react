import React from 'react'
import trashIcon from "../assets/trash.png"

export default function CartSidebar({ cart, isCartOpen, onClose, onAdd, onDecrease, onRemove }) {
  const cartItems = Object.values(cart); // convert cart object to array
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!isCartOpen) return null; // don't render if cart is closed

  return (
    <div className="fixed top-0 z-70 right-0 bg-white w-64 h-full overflow-y-auto">
      
      {/* Close button */}
      <button onClick={onClose} className="flex flex-col px-3 py-2 cursor-pointer" aria-label="Close cart">
        <span className="text-2xl font-bold">×</span>
      </button>

      <h2 className="p-4 text-xl font-semibold">Cart</h2>

      {/* Cart items */}
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        ) : (
          cartItems.map(item => {
            const lineTotal = item.price * item.qty;
            return (
              <div key={item.id} className="grid grid-cols-[1fr_3fr] gap-1 mb-2 items-center border-b border-gray-300 pb-2">
                
                {/* Item image */}
                <div className="place-items-center w-12 h-12">
                  <img src={item.image} alt={item.name} className="object-contain" />
                </div>

                {/* Item details */}
                <div className="flex flex-col">
                  <span>{item.name} | {item.quantity}</span>
                  <span className="ml-auto text-right w-full">Rs {lineTotal.toFixed(1)}</span>

                  <div className="flex justify-between items-center gap-2">
                    {/* Quantity controls */}
                    <div className="flex justify-between w-20 overflow-hidden">
                      <button onClick={() => onAdd(item)} className="bg-orange-400 text-white font-bold px-1">+</button>
                      <input
                        type="text"
                        readOnly
                        value={item.qty}
                        className="text-sm font-medium w-8 text-center border border-gray-300 rounded-md"
                      />
                      <button onClick={() => onDecrease(item.id)} className="bg-orange-400 text-white font-bold px-1">-</button>
                    </div>

                    {/* Remove button */}
                    <img
                      src={trashIcon}
                      alt="Remove Item"
                      className="w-4 h-4 cursor-pointer"
                      onClick={() => onRemove(item.id)}
                    />
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Total */}
      <div className="p-4 text-xl font-medium absolute bottom-0">
        <span className="text-sm">Total: Rs {total.toFixed(2)}</span>
      </div>

    </div>
  );
}