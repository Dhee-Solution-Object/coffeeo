import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      updateQuantity(item.product.id, value);
    }
  };
  
  const incrementQuantity = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };
  
  const decrementQuantity = () => {
    updateQuantity(item.product.id, item.quantity - 1);
  };
  
  return (
    <div className="flex items-center border-b border-cocoa-200 pb-8">
      <div className="bg-gradient-to-br from-cocoa-100 to-cocoa-200 rounded-2xl w-32 h-32 flex items-center justify-center glass">
        <div className="text-4xl">☕</div>
      </div>
      
      <div className="ml-6 flex-grow">
        <div className="flex justify-between">
          <div>
            <Link to={`/product/${item.product.id}`} className="text-2xl font-serif font-semibold text-espresso-900 hover:text-gold-600 transition-colors duration-300 divider">
              {item.product.name}
            </Link>
            <p className="text-espresso-700 mt-2 text-xl">${item.product.price.toFixed(2)}</p>
          </div>
          <button 
            onClick={() => removeFromCart(item.product.id)}
            className="text-cocoa-500 hover:text-gold-600 transition-colors duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mt-6 flex items-center">
          <span className="text-espresso-700 mr-4 text-lg">Qty:</span>
          <div className="flex items-center border border-cocoa-300 rounded-full">
            <button 
              onClick={decrementQuantity}
              className="px-4 py-2 text-espresso-700 hover:bg-cocoa-100 rounded-l-full transition-colors duration-300"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="w-16 text-center border-x border-cocoa-300 py-2 bg-transparent"
            />
            <button 
              onClick={incrementQuantity}
              className="px-4 py-2 text-espresso-700 hover:bg-cocoa-100 rounded-r-full transition-colors duration-300"
            >
              +
            </button>
          </div>
          <span className="ml-auto font-serif font-semibold text-2xl text-gold-600">
            ${(item.product.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;