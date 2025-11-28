import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  currency?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, currency = 'USD' }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass rounded-3xl overflow-hidden h-full flex flex-col luxury-shadow-lg transition-all duration-300 relative"
    >
      {/* Background decorative vector art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <svg
            key={i}
            className="absolute text-gold-300 opacity-10"
            width="24"
            height="24"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.8})`,
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M12 3c3 2 3 7 0 10s-8 3-10 0c-2-3-2-8 1-10s6-2 9 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ))}
      </div>

      {/* Product Image */}
      <div className="relative h-56 w-full overflow-hidden bg-cocoa-200">
        <img 
          src={product.image || 'https://via.placeholder.com/400x300?text=Coffee'} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />

        {/* Overlay gradient for premium look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-semibold text-espresso-900 divider">
            {product.name}
          </h3>
          <span className="text-xl font-bold text-gold-600">
            {currency === 'INR' ? '₹' : '$'}
            {product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-espresso-700 mb-4 mt-4 flex-grow font-light">
          {product.description}
        </p>

       
        {/* <div className="flex items-center mb-6">
          <div className="flex text-gold-400">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating) 
                    ? 'text-gold-400' 
                    : 'text-cocoa-200'
                }`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div> 
           </div>*/}
          {/* <span className="ml-2 text-espresso-700">{product.rating}</span> */}
      

        {/* Button */}
        {/* <Link 
          to={`/product/${product.id}`}
          className="w-full inline-block text-center bg-gradient-gold text-espresso-900 py-3 px-6 rounded-full hover:opacity-90 transition-all duration-300 glow font-medium"
        >
          View Details
        </Link> */}
      </div>
    </motion.div>
  );
};

export default ProductCard;
