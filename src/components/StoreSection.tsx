import React from "react";
import { motion } from "framer-motion";

const storeImages = [
  "/store/store1.jpg",
  "/store/store2.jpg",
  "/store/store3.jpg",
  "/store/store4.jpg",
];

const StoreSection: React.FC = () => {
  return (
    <section className="py-2 relative overflow-hidden">
  <div className="absolute bottom-10 left-10 text-gold-300 opacity-20">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.5,6.5c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.5,0.8,2.7,2,3.4V12c0,0.6,0.4,1,1,1s1-0.4,1-1V9.9c1.2-0.7,2-1.9,2-3.4z"/>
            <path d="M19,14c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.6-0.4-1-1-1s1,0.4-1,1c0,2.2,1.8,4,4,4S19,16.2,19,14z"/>
          </svg>
        </div>
      {/* Gold Glow Overlay */}
      

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl sm:text-5xl font-serif font-bold text-espresso-900 mb-4"
        >
          Our Café Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-xl text-espresso-700 max-w-2xl mx-auto mb-14"
        >
          Step inside a warm and luxurious atmosphere crafted for coffee lovers.
        </motion.p>

        {/* Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {storeImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden shadow-xl luxury-shadow bg-espresso-900/5 backdrop-blur-md"
            >
              {/* Image */}
              <img
                src={src}
                alt="Store Interior"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
              />

              {/* Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-all duration-500"></div>

              {/* Golden Border Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 border-2 border-gold-300 rounded-3xl shadow-gold-glow"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xl font-semibold drop-shadow-md tracking-wide">
                  Coffeeo Café
                </p>
                <p className="text-sm opacity-90">Premium Experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
