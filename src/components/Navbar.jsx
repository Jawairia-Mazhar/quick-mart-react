import React from 'react'
import logo from "../assets/QuickMartIcon.png"
import cartBasket from "../assets/basket.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const openMenu = () => {
        setIsMenuOpen(true); //Tells react to show the Menu
        document.body.style.overflow = "hidden"; // prevents the page behind from scrolling
};

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
    }

  return (
    <nav className="grid grid-cols-[1fr_auto] items-center md:p-4 bg-white shadow-[#b00020] shadow-md md:auto-cols-auto md:grid-cols-[1fr_auto_1fr] sticky top-0 z-50">
        <img src={logo} alt="Quick Mart Logo" className="w-30 md:w-38 h-12 md:h-16"></img>

{/* Mobile: cart + nav-menu toggle */}
  <div className="flex items-center gap-3 md:hidden">
    <button className="items-center justify-end flex" id="cart-btn" >
      <img src={cartBasket} alt="" className="md:hidden cart-btn icon-amber w-7 h-7 cursor-pointer"></img>
    </button>
    <button id="nav-toggle"
      onClick = {openMenu} 
      className="toggle-btn flex flex-col px-3 py-2 text-gray-700 cursor-pointer md:hidden" 
      aria-label="Toggle menu" 
      aria-expanded={isMenuOpen}>
        <span className="block w-6 h-0.5 mb-1.5 bg-gray-700"></span>
        <span className="block w-6 h-0.5 mb-1.5 bg-gray-700"></span>
        <span className="block w-6 h-0.5 bg-gray-700"></span>
    </button>
  </div>

        <ul id="nav-menu" 
        className={`${isMenuOpen ? 'flex' : 'hidden'} //JS if the isMenuOpen is true, show the menu, else hide it
        top-full left-0 right-0 space-y-2 px-4 py-3 font-lg bg-orange-20 
        md:flex md:flex-row md:static  md:space-y-0 md:space-x-8 md:p-0 md:bg-transparent md:items-center md:justify-center' `}>
            <li><a href="#home-page" className="text-gray-700 hover:text-orange-500 hover:font-semibold">Home</a></li>
            <li><a href="#products" className="text-gray-700 hover:text-orange-500 hover:font-semibold">Products</a></li>
            <li><a href="#about-us" className="text-gray-700 hover:text-orange-500 hover:font-semibold">About Us</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-orange-500 hover:font-semibold">Contact</a></li>
        </ul>
        <button id="cart-btn" className="cart-btn hidden md:flex items-center justify-end">
            <img src={cartBasket} alt="" className=" icon-amber w-7 h-7 cursor-pointer"></img>
        </button> 


        {isMenuOpen && (
            <div className='fixed inset-0 right-0 top-0 z-60 mt-12 bg-white w-64 h-[calc(100vh-4rem)] overflow-y-auto shadow-lg transition-transform transform ease-in-out duration-300'>
                 <button id="close-menu" onClick={closeMenu}
                  class="toggle-btn flex flex-col md:hidden px-3 py-2 cursor-pointer" aria-label="Close menu" aria-expanded="true">
                    <span class="text-2xl font-bold">×</span>
                </button>
                <ul class="flex flex-col gap-4 p-4 ">
                    <li><a href="#home-page" onClick={closeMenu} class="text-black hover:text-orange-500 hover:font-semibold">Home</a></li>
                    <li><a href="#products" onClick={closeMenu} class="text-black hover:text-orange-500 hover:font-semibold">Products</a></li>
                    <li><a href="#about-us" onClick={closeMenu} class="text-black hover:text-orange-500 hover:font-semibold">About Us</a></li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar