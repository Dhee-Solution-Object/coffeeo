import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartItemComponent from '../components/CartItem';

const Cart: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-16 relative overflow-hidden">
        {/* Decorative coffee beans background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute text-gold-200 opacity-10"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                transform: `scale(${0.3 + Math.random() * 0.5}) rotate(${Math.random() * 360}deg)`,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.5,6.5c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.5,0.8,2.7,2,3.4V12c0,0.6,0.4,1,1,1s1-0.4,1-1V9.9c1.2-0.7,2-1.9,2-3.4z"/>
                <path d="M19,14c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,2.2,1.8,4,4,4S19,16.2,19,14z"/>
              </svg>
            </div>
          ))}
        </div>
            
        {/* Playful modern doodle art for Coffee Day - now in App component */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-12 text-center luxury-shadow"
          >
            <div className="text-7xl mb-6 text-gold-300">☕</div>
            <h1 className="text-4xl font-serif font-bold text-espresso-900 mb-4">Your cart is empty</h1>
            <p className="text-xl text-espresso-700 mb-8 max-w-2xl mx-auto">
              Looks like you haven't added any items to your cart yet. Discover our premium coffee collection.
            </p>
            <Link 
              to="/products" 
              className="inline-block mt-6 bg-espresso-800 text-cream-50 px-8 py-4 rounded-full text-lg font-medium hover:bg-espresso-700 transition-all duration-300 luxury-shadow glow"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      {/* Decorative coffee beans background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gold-200 opacity-10"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              transform: `scale(${0.3 + Math.random() * 0.6}) rotate(${Math.random() * 360}deg)`,
            }}
          >
            <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.5,6.5c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.5,0.8,2.7,2,3.4V12c0,0.6,0.4,1,1,1s1-0.4,1-1V9.9c1.2-0.7,2-1.9,2-3.4z"/>
              <path d="M19,14c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,2.2,1.8,4,4,4S19,16.2,19,14z"/>
            </svg>
          </div>
        ))}
      </div>
      
      {/* Playful modern doodle art for Coffee Day - now in App component */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-serif font-bold text-espresso-900 mb-12"
        >
          Shopping Cart
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass rounded-3xl overflow-hidden luxury-shadow"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-espresso-900">
                    {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                  </h2>
                  <button 
                    onClick={clearCart}
                    className="text-espresso-700 hover:text-gold-600 transition-colors duration-300 text-lg font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
                
                <div className="space-y-8">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                    >
                      <CartItemComponent item={item} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass rounded-3xl p-8 sticky top-6 luxury-shadow"
            >
              <h2 className="text-2xl font-serif font-semibold text-espresso-900 mb-8">Order Summary</h2>
              
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span className="text-espresso-700 text-lg">Subtotal</span>
                  <span className="font-medium text-xl">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-espresso-700 text-lg">
                    Shipping {shipping === 0 ? '(Free over $50)' : ''}
                  </span>
                  <span className="font-medium text-xl">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-espresso-700 text-lg">Tax</span>
                  <span className="font-medium text-xl">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-cocoa-200 pt-6 flex justify-between text-2xl font-serif font-bold">
                  <span>Total</span>
                  <span className="text-gold-600">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-10 bg-espresso-800 text-cream-50 py-4 px-6 rounded-full hover:bg-espresso-700 transition-all duration-300 font-medium text-lg luxury-shadow glow"
              >
                Proceed to Checkout
              </motion.button>
              
              <Link 
                to="/products" 
                className="block mt-6 text-center text-espresso-700 hover:text-gold-600 transition-colors duration-300 text-lg"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;