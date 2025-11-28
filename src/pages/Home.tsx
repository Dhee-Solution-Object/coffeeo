import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import StoreSection from "../components/StoreSection";
import FeatureSection from '../components/FeatureSection';
import { g } from 'framer-motion/client';

const Home: React.FC = () => {
  return (
    <div>

      {/* ===================== HERO WITH LUXURY BACKGROUND ===================== */}
      <div className="relative overflow-hidden">

        {/* Luxury Doodle Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
              className="absolute text-gold-200"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                transform: `scale(${0.4 + Math.random() * 0.8}) rotate(${Math.random() * 360}deg)`,
              }}
            >
              <svg width="70" height="70" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.3">
                {i % 4 === 0 && (
                  <path d="M3 8h13v6a4 4 0 01-4 4H7a4 4 0 01-4-4V8zm13 0h2a2 2 0 010 4h-2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
                {i % 4 === 1 && (
                  <path d="M12 3c3 2 3 7 0 10s-8 3-10 0c-2-3-2-8 1-10s6-2 9 0z" strokeLinecap="round" strokeLinejoin="round"/>
                )}
                {i % 4 === 2 && (
                  <path d="M3 10l2-4h14l2 4v10H3V10zm2 0h14M8 14h1m3 0h1m3 0h1" strokeLinecap="round" strokeLinejoin="round"/>
                )}
                {i % 4 === 3 && (
                  <path d="M7 4c1 1 1 2 0 3s-1 2 0 3m5-6c1 1 1 2 0 3s-1 2 0 3" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-espresso-900/10 via-transparent to-gold-300/10 pointer-events-none"></div>

        {/* HERO SECTION */}
        <HeroSection />
      </div>


      {/* ===================== PREMIUM SECTION (with coffee-bg.jpg) ===================== */}
      <section
        className="py-1 text-white relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url()` ,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.95
        }}
      >

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-serif font-bold text-espresso-900 sm:text-5xl"
            >
              Our Premium Selection
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-3xl mx-auto text-2xl text-espresso-700 font-light"
            >
              From expertly roasted coffee to fresh café bites, artisan desserts, and handcrafted drinks — enjoy the ultimate café experience.
            </motion.p>
          </div>

          <FeaturedProducts />
        

          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <Link 
                to="/products" 
                className="inline-block bg-espresso-800 text-cream-50 px-8 py-4 rounded-full text-lg font-medium hover:bg-espresso-700 transition-all duration-300 luxury-shadow glow"
              >
                View All Products
              </Link>
            </motion.div>
          </div>
        </div>

      </section>



   <div className="relative bg-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

    {/* Store Section */}
    <div>
      <StoreSection />
    </div>
    <FeatureSection />
  </div>

</div>


    </div>
  );
};


interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass p-8 rounded-3xl luxury-shadow transition-all duration-300 relative overflow-hidden"
  >
    <div className="mb-6 flex justify-center">
      {icon}
    </div>

    <h3 className="text-2xl font-serif font-semibold text-espresso-900 mb-4">
      {title}
    </h3>

    <p className="text-lg text-espresso-700 font-light">
      {description}
    </p>
  </motion.div>
);

export default Home;
