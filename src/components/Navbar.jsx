import React from 'react'
import logo from "../assets/QuickMartIcon.png"
import cartBasket from "../assets/basket.png"

const Navbar = ({ cart, onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const cartCount = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <nav className="grid grid-cols-[1fr_auto] items-center md:p-4 bg-white shadow-[#b00020] shadow-md md:grid-cols-[1fr_auto_1fr] sticky top-0 z-50">

      {/* Logo */}
      <img src={logo} alt="Quick Mart Logo" className="w-30 md:w-38 h-12 md:h-16" />

      {/* Mobile: cart + hamburger */}
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={onCartOpen} className="items-center justify-end flex">
          <img src={cartBasket} alt="cart" className="w-7 h-7 cursor-pointer" />
        </button>
        <button
          onClick={openMenu}
          className="toggle-btn flex flex-col px-3 py-2 text-gray-700 cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}>
          <span className="block w-6 h-0.5 mb-1.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 mb-1.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Desktop nav links */}
      <ul className="hidden md:flex md:flex-row md:space-x-8 md:items-center md:justify-center">
        <li><a href="#home-page" className="text-gray-700 hover:text-orange-500 hover:font-semibold">Home</a></li>
        <li><a href="#products" className="text-gray-700 hover:text-orange-500 hover:font-semibold">Products</a></li>
        <li><a href="#about-us" className="text-gray-700 hover:text-orange-500 hover:font-semibold">About Us</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-orange-500 hover:font-semibold">Contact</a></li>
      </ul>

      {/* Desktop cart */}
      <button onClick={onCartOpen} className="cart-btn hidden md:flex items-center justify-end">
        <img src={cartBasket} alt="cart" className="w-7 h-7 cursor-pointer" />
        {cartCount > 0 && (
          <span className="text-xs bg-orange-400 text-white rounded-full px-1">{cartCount}</span>
        )}
      </button>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 right-0 top-0 z-60 mt-12 bg-white w-64 h-[calc(100vh-4rem)] overflow-y-auto shadow-lg">
          <button onClick={closeMenu} className="toggle-btn flex flex-col px-3 py-2 cursor-pointer" aria-label="Close menu">
            <span className="text-2xl font-bold">×</span>
          </button>
          <ul className="flex flex-col gap-4 p-4">
            <li><a href="#home-page" onClick={closeMenu} className="text-black hover:text-orange-500 hover:font-semibold">Home</a></li>
            <li><a href="#products" onClick={closeMenu} className="text-black hover:text-orange-500 hover:font-semibold">Products</a></li>
            <li><a href="#about-us" onClick={closeMenu} className="text-black hover:text-orange-500 hover:font-semibold">About Us</a></li>
            <li><a href="#contact" onClick={closeMenu} className="text-black hover:text-orange-500 hover:font-semibold">Contact</a></li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;