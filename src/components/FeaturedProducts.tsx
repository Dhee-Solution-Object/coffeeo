import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '../types';

// Mock data for featured products (Indian café style)
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Cappuccino',
    description: 'A velvety balance of espresso, steamed milk, and forthy foam.',
    price: 199, // INR
    category: 'beans',
    image: 'https://images.pexels.com/photos/769275/pexels-photo-769275.jpeg',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Mochaccino',
    description: 'Espresso meets chocolate for a sweet indulgent hug in a cup',
    price: 199,
    category: 'beans',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Coffeeo Latte',
    description: 'Smooth espresso topped with creamy milk, perfect for slow sipping',
    price: 190,
    category: 'beans',
    image: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9
  },
  {
    id: '4',
    name: 'Irish Cafe Cream',
    description: 'Bold espresso kissed with smooth irish cream finished with a whisper of sweetness',
    price: 260,
    category: 'coldbrew',
    image: "https://img.freepik.com/free-photo/delicious-coffee-cup-indoors_23-2150691359.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 4.6
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProductCard product={{...product, price: product.price}} currency="INR" />
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
