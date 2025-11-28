import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Product } from '../types';

// IMAGE IMPORTS
// import ethiopian from '../assets/products/1.jpg';
// import colombian from '../assets/products/2.jpg';
// import guatemalan from '../assets/products/3.jpg';
// import coldbrew from '../assets/products/4.jpg';
// import frenchpress from '../assets/products/5.jpg';
// import espressoBlend from '../assets/products/5.jpg';
// import tumbler from '../assets/products/3.jpg';
// import coldbrewKit from '../assets/products/4.jpg';


const ethiopian = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80';
const colombian = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80';
const guatemalan = 'https://marvel-b1-cdn.bc0a.com/f00000000263857/www.whittard.com/dw/image/v2/BCGT_PRD/on/demandware.static/-/Sites-whittard-master-catalog/default/dwec583c0c/images/hi-res/Coffee_Campaign_Lifestyle_Generic_Cafetiere-11.jpg?sw=802&sh=802&sm=fit';
const coldbrew = 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_599,q_auto:low/34381_sfs-cold-brew-concentrate-027';
const frenchpress = 'https://images.unsplash.com/photo-1606788075760-499cf43e1fd1?auto=format&fit=crop&w=500&q=80';
const espressoBlend = 'https://images.unsplash.com/photo-1577985046220-b3c8f4c9811f?auto=format&fit=crop&w=500&q=80';
const tumbler = 'https://images.unsplash.com/photo-1603469401041-f15c54fdf6fc?auto=format&fit=crop&w=500&q=80';
const coldbrewKit = 'https://images.unsplash.com/photo-1615197168665-43f1469e7b3e?auto=format&fit=crop&w=500&q=80';
const pizza1 = 'https://images.pexels.com/photos/32872596/pexels-photo-32872596.jpeg';
const pizza2 = 'https://images.pexels.com/photos/19602378/pexels-photo-19602378.jpeg';
const pasta1 = 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg';
const pasta2 = 'https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg';
const quickbite1 = 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg';
const sandwich1 = 'https://images.pexels.com/photos/20723493/pexels-photo-20723493.jpeg';
const sandwich2 = 'https://images.pexels.com/photos/13292629/pexels-photo-13292629.png';
const soup1 = 'https://images.pexels.com/photos/24811277/pexels-photo-24811277.jpeg';
const breakfast1 = 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=500&q=80';
const salad1 = 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg';
const tea1 = 'https://images.pexels.com/photos/5947062/pexels-photo-5947062.jpeg';
const milkshake1 = 'https://images.pexels.com/photos/8805099/pexels-photo-8805099.jpeg';
const chiller1 = 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg';
const icecream1 = 'https://images.pexels.com/photos/2156698/pexels-photo-2156698.jpeg';
const dessert1 = 'https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg';

// Product Data (INR, Indian café style)
const allProducts: Product[] = [

  // -------------------- COLD BREW --------------------
  {
    id: '4',
    name: 'Cold Brew Concentrate (500ml)',
    description: 'Smooth, refreshing, low-acidity cold brew concentrate.',
    price: 449,
    category: 'coldbrew',
    image: coldbrew,
    rating: 4.6
  },

  // -------------------- PIZZA --------------------
  {
    id: '9',
    name: 'Margherita Pizza',
    description: 'Classic margherita with fresh mozzarella and basil.',
    price: 399,
    category: 'pizza',
    image: pizza1,
    rating: 4.6
  },
  {
    id: '10',
    name: 'Farmhouse Pizza',
    description: 'Loaded with vegetables and cheese.',
    price: 449,
    category: 'pizza',
    image: pizza2,
    rating: 4.5
  },

  // -------------------- PASTA --------------------
  {
    id: '11',
    name: 'Veggie Pasta',
    description: 'Penne with fresh vegetables in creamy tomato sauce.',
    price: 299,
    category: 'pasta',
    image: pasta1,
    rating: 4.4
  },
  {
    id: '12',
    name: 'Alfredo Chicken Pasta',
    description: 'Creamy alfredo sauce with grilled chicken slices.',
    price: 399,
    category: 'pasta',
    image: pasta2,
    rating: 4.6
  },

  // -------------------- SANDWICHES & WRAPS --------------------
  {
    id: '13',
    name: 'Grilled Veg Sandwich',
    description: 'Multigrain bread with veggies and cheese.',
    price: 149,
    category: 'Sandwich',
    image: sandwich1,
    rating: 4.3
  },
  {
    id: '14',
    name: 'Chicken Wrap',
    description: 'Grilled chicken, lettuce, and mayo in a soft wrap.',
    price: 199,
    category: 'Sandwich',
    image: sandwich2,
    rating: 4.5
  },

  // -------------------- QUICK BITES --------------------
  {
    id: '15',
    name: 'French Fries',
    description: 'Crispy golden fries served with ketchup.',
    price: 129,
    category: 'Quick Bite',
    image: quickbite1,
    rating: 4.2
  },

  // -------------------- SOUPS --------------------
  {
    id: '16',
    name: 'Tomato Basil Soup',
    description: 'Smooth tomato soup with fresh basil.',
    price: 179,
    category: 'Soup',
    image: soup1,
    rating: 4.4
  },

  // -------------------- BREAKFAST --------------------
  {
    id: '17',
    name: 'Classic Pancakes',
    description: 'Fluffy pancakes served with maple syrup.',
    price: 199,
    category: 'breakfast',
    image: breakfast1,
    rating: 4.5
  },

  // -------------------- SALADS --------------------
  {
    id: '18',
    name: 'Caesar Salad',
    description: 'Crisp lettuce with parmesan, croutons, and Caesar dressing.',
    price: 249,
    category: 'Salad',
    image: salad1,
    rating: 4.4
  },

  // -------------------- TEA --------------------
  {
    id: '19',
    name: 'Masala Chai',
    description: 'Traditional Indian tea with spices.',
    price: 99,
    category: 'tea',
    image: tea1,
    rating: 4.7
  },

  // -------------------- MILKSHAKE --------------------
  {
    id: '20',
    name: 'Chocolate Milkshake',
    description: 'Creamy chocolate milkshake topped with whipped cream.',
    price: 179,
    category: 'coldbrew',
    image: milkshake1,
    rating: 4.5
  },

  // -------------------- CHILLERS --------------------
  {
    id: '21',
    name: 'Cold Coffee Chiller',
    description: 'Iced coffee blended with milk and sugar.',
    price: 159,
    category: 'coldbrew',
    image: chiller1,
    rating: 4.6
  },

  // -------------------- ICE CREAM --------------------
  {
    id: '22',
    name: 'Vanilla Ice Cream',
    description: 'Classic vanilla ice cream scoop.',
    price: 99,
    category: 'icecream',
    image: icecream1,
    rating: 4.4
  },

  // -------------------- DESSERTS --------------------
  {
    id: '23',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie served warm.',
    price: 149,
    category: 'Dessert',
    image: dessert1,
    rating: 4.6
  }
];

interface ProductGridProps {
  category: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  const filteredProducts = category === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === category);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProductCard product={product} currency="INR" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
