import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-espresso-900 text-cream-50 sticky top-0 z-50 shadow-xl relative overflow-hidden font-display">
      
     <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
  <div className="flex items-center justify-between h-20">

    {/* LOGO + NAME */}
    <Link to="/" className="flex items-center space-x-3">
      
      {/* Logo Icon */}
      <motion.div
        className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.25 }}
      >
        <img
          src={logo}
          alt="Coffeeo Logo"
          className="h-12 w-auto object-contain"
        />
      </motion.div>

      {/* LOGO TEXT */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25 }}
        className="text-3xl font-[Alegreya Sans] font-normal tracking-wide flex"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-300 to-yellow-300">
          COFFEE
        </span>
        <span className="text-cream-50">O</span>
      </motion.div>

    </Link>



          {/* MENU + CART (RIGHT SIDE) */}
          <div className="hidden md:flex items-center space-x-10 font-display text-lg">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Menu</NavLink>
            <NavLink to="/stores">Store Locator</NavLink>

            {/* Cart */}
            <Link
              to="/cart"
              className="p-3 rounded-full hover:bg-espresso-800 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cream-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-espresso-800"
          >
            {!isMenuOpen ? (
              <svg className="h-8 w-8 text-cream-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-8 w-8 text-cream-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-espresso-900/95 backdrop-blur-lg border-t border-espresso-700 shadow-lg"
          >
            <div className="py-6 space-y-2 font-display text-lg">
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/products">Menu</MobileNavLink>
              <MobileNavLink to="/stores">Store Locator</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

/* DESKTOP LINK */
const NavLink = ({ to, children }: any) => (
  <Link
    to={to}
    className="text-cream-200 relative group font-display"
  >
    <span className="group-hover:text-gold-300 transition">{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-300 transition-all group-hover:w-full"></span>
  </Link>
);

/* MOBILE LINK */
const MobileNavLink = ({ to, children }: any) => (
  <Link
    to={to}
    className="block px-6 py-4 text-cream-200 font-display hover:bg-espresso-800 hover:text-gold-300 rounded-md"
  >
    {children}
  </Link>
);

export default Navbar;
