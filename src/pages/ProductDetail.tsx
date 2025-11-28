import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../hooks/useCart';
import { Product } from '../types';

// Product Images
import ethiopiaImg from '../assets/products/1.jpg';
import colombiaImg from '../assets/products/2.jpg';
import guatemalaImg from '../assets/products/3.jpg';
import coldBrewImg from '../assets/products/4.jpg';
import frenchPressImg from '../assets/products/5.jpg';
import espressoBlendImg from '../assets/products/4.jpg';
import tumblerImg from '../assets/products/5.jpg';
import coldBrewKitImg from '../assets/products/1.jpg';

// Mock product data (Indian café style)
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe (250g)',
    description: 'Floral and citrus notes with bright acidity. Perfect for pour-over or drip brewing.',
    price: 999,
    category: 'beans',
    image: ethiopiaImg,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Colombian Supremo (250g)',
    description: 'Rich, full-bodied coffee with nutty and caramel undertones. Ideal for espresso or French press.',
    price: 899,
    category: 'beans',
    image: colombiaImg,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Guatemalan Antigua (250g)',
    description: 'Complex flavor with smoky chocolate notes. Smooth and aromatic, great for cold brew.',
    price: 1050,
    category: 'beans',
    image: guatemalaImg,
    rating: 4.9
  },
  {
    id: '4',
    name: 'Cold Brew Concentrate (500ml)',
    description: 'Smooth and refreshing cold brew concentrate. Dilute with water or milk for a chilled coffee experience.',
    price: 449,
    category: 'coldbrew',
    image: coldBrewImg,
    rating: 4.6
  },
  {
    id: '5',
    name: 'French Press Coffee Maker',
    description: 'Classic stainless steel French press for perfect brewing at home.',
    price: 2199,
    category: 'merchandise',
    image: frenchPressImg,
    rating: 4.5
  },
  {
    id: '6',
    name: 'Espresso Blend (250g)',
    description: 'Bold and intense with chocolate and nutty flavors. Great for espresso lovers.',
    price: 899,
    category: 'beans',
    image: espressoBlendImg,
    rating: 4.7
  },
  {
    id: '7',
    name: 'Coffee Tumbler',
    description: 'Insulated stainless steel tumbler keeps drinks hot or cold for hours.',
    price: 1499,
    category: 'merchandise',
    image: tumblerImg,
    rating: 4.4
  },
  {
    id: '8',
    name: 'Cold Brew Kit',
    description: 'Complete kit for making cold brew at home. Includes all accessories.',
    price: 2499,
    category: 'merchandise',
    image: coldBrewKitImg,
    rating: 4.8
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-serif font-bold">Product not found</h1>
        <p className="text-xl mt-4">This product does not exist.</p>
      </div>
    );
  }

  const handleAddToCart = () => addToCart(product, quantity);

  return (
    <div className="min-h-screen py-16 relative bg-[#f7f7f5]">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10">

            {/* Product Image */}
            <div className="bg-gradient-to-br from-cocoa-200 to-cocoa-300 rounded-3xl flex items-center justify-center h-96 relative overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-3xl relative z-10"
                />
              ) : (
                <div className="relative z-10 text-9xl text-espresso-800">☕</div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-serif font-bold text-espresso-900">{product.name}</h1>

                  {/* Rating */}
                  <div className="mt-4 flex items-center">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-6 h-6 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-3 text-xl">{product.rating}</span>
                  </div>
                </div>

                <span className="text-4xl font-serif font-bold text-green-700">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-2xl font-serif font-semibold text-espresso-900 mb-4">Description</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="mt-10">
                <div className="flex items-center mb-8">
                  <span className="mr-6 text-xl">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-5 py-2 hover:bg-gray-100 rounded-l-full"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 text-xl">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-5 py-2 hover:bg-gray-100 rounded-r-full"
                    >
                      +
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full bg-green-700 text-white py-4 px-8 rounded-full hover:bg-green-600 text-xl font-medium"
                >
                  Add to Cart
                </motion.button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
