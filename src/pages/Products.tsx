import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import { Category } from '../types';

const categories: Category[] = [
  { id: 'all', name: 'All Products', image: '' },
  { id: 'pizza', name: 'Pizza', image: '' },
  { id: 'coldbrew', name: 'Cold Brew', image: '' },
  { id: 'pasta', name: 'Pasta', image: '' },
  { id: 'Sandwich', name: 'Sandwich', image: '' },
  { id: 'Soup', name: 'Soup', image: '' },
  { id: 'Salad', name: 'Salad', image: '' },
  { id: 'Dessert', name: 'Dessert', image: '' },
  { id: 'icecream', name: 'Ice Cream', image: '' },
  
];

// Import your 10 PNG icons
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';
import icon4 from '../assets/icons/icon4.png';
import icon5 from '../assets/icons/icon5.png';
import icon6 from '../assets/icons/icon6.png';
import icon7 from '../assets/icons/icon7.png';
import icon8 from '../assets/icons/icon8.png';
import icon9 from '../assets/icons/icon9.png';
import icon10 from '../assets/icons/icon10.png';
import icon11 from '../assets/icons/icon11.png';
import icon12 from '../assets/icons/icon12.png';
import icon13 from '../assets/icons/icon13.png';
import icon14 from '../assets/icons/icon14.png';
import icon15 from '../assets/icons/icon19.png';
import icon16 from '../assets/icons/icon16.png';
import icon17 from '../assets/icons/icon17.png';
import icon18 from '../assets/icons/icon18.png';
import icon19 from '../assets/icons/icon19.png';
import icon20 from '../assets/icons/icon20.png';
import icon21 from '../assets/icons/icon21.png';
import icon22 from '../assets/icons/icon22.png';
import icon23 from '../assets/icons/icon23.png';
import icon24 from '../assets/icons/icon24.png';
import icon25 from '../assets/icons/icon25.png';
import icon26 from '../assets/icons/icon26.png';

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, icon26];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen relative bg-cocoa-50 overflow-hidden">
      
    {/* ===================== PERFECT NON-OVERLAPPING BACKGROUND ===================== */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {(() => {
    const ICON_COUNT = 60; // you can increase
    const ICON_MIN_SIZE = 30;
    const ICON_MAX_SIZE = 45;

    const usedAreas: { x: number; y: number; size: number }[] = [];
    const rendered = [];

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight * 1.5; // covers scrolling

    for (let i = 0; i < ICON_COUNT; i++) {
      const icon = icons[Math.floor(Math.random() * icons.length)];
      const size = ICON_MIN_SIZE + Math.random() * (ICON_MAX_SIZE - ICON_MIN_SIZE);

      let x = 0;
      let y = 0;
      let overlaps = true;
      let tries = 0;

      // Try many times until a non-overlapping spot is found
      while (overlaps && tries < 200) {
        x = Math.random() * (containerWidth - size);
        y = Math.random() * (containerHeight - size);

        overlaps = usedAreas.some((area) => {
          const dx = area.x - x;
          const dy = area.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < (area.size / 2 + size / 2) + 15; // padding 15px
        });

        tries++;
      }

      usedAreas.push({ x, y, size });

      rendered.push(
        <motion.img
          key={i}
          src={icon}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          className="absolute"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${y}px`,
            left: `${x}px`,
            transform: `rotate(${Math.random() * 10 - 5}deg)` // tiny rotation only
          }}
        />
      );
    }

    return rendered;
  })()}
</div>






      {/* ===================== Main Content ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-serif font-bold text-espresso-900 sm:text-5xl"
          >
            Our Coffee Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-3xl mx-auto text-2xl text-espresso-700 font-light"
          >
            Explore our carefully curated selection of premium coffee products
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 relative overflow-hidden ${
                  selectedCategory === category.id
                    ? 'bg-espresso-800 text-cream-50 luxury-shadow glow'
                    : 'bg-cocoa-100 text-espresso-800 hover:bg-cocoa-200'
                }`}
              >
                {selectedCategory === category.id && (
                  <div className="absolute top-1 right-1 text-gold-300 opacity-30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.5,6.5c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.5,0.8,2.7,2,3.4V12c0,0.6,0.4,1,1,1s1-0.4,1-1V9.9c1.2-0.7,2-1.9,2-3.4z"/>
                      <path d="M19,14c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,2.2,1.8,4,4,4S19,16.2,19,14z"/>
                    </svg>
                  </div>
                )}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>
        
        <ProductGrid category={selectedCategory} />
      </div>
    </div>
  );
};

export default Products;
