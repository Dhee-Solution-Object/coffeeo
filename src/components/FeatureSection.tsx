import React from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Sandwich,
  Pizza,
  Croissant,
  ChefHat,
  UtensilsCrossed,
} from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features = [
  {
    title: "Signature Coffee",
    description: "Finest roasted beans brewed with passion and precision.",
    icon: (
      <Coffee className="w-14 h-14 text-gold-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
    ),
  },
  {
    title: "Gourmet Burgers",
    description: "Premium handcrafted burgers with fresh organic ingredients.",
    icon: (
      <Sandwich className="w-14 h-14 text-gold-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
    ),
  },
  {
    title: "Italian Classics",
    description: "Authentic pizzas and Italian dishes made by our expert chefs.",
    icon: (
      <Pizza className="w-14 h-14 text-gold-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
    ),
  },
  {
    title: "Luxury Desserts",
    description: "Fresh croissants, pastries, and elegant sweet creations.",
    icon: (
      <Croissant className="w-14 h-14 text-gold-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
    ),
  },
  {
    title: "Chef Specials",
    description: "Weekly specialties crafted with premium ingredients.",
    icon: (
      <ChefHat className="w-14 h-14 text-gold-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
    ),
  },
  {
    title: "Fine Snacks",
    description: "Delicate bites and curated snacks for every moment.",
    icon: (
      <UtensilsCrossed className="w-14 h-14 text-gold-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
    ),
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => (
  <motion.div
    whileHover={{ y: -12, scale: 1.06 }}
    className="relative bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-gold-500/20 shadow-lg transition-all duration-300 group overflow-hidden"
  >
    {/* Glow Layer */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold-300/10 to-espresso-900/10 opacity-40 group-hover:opacity-60 transition duration-500"></div>

    <div className="relative flex justify-center mb-6">{icon}</div>

    <h3 className="relative text-2xl font-serif font-semibold text-espresso-900 mb-3">
      {title}
    </h3>

    <p className="relative text-espresso-700 font-light leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const FeatureSection: React.FC = () => {
  return (
    <section className="py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-espresso-900">
            Crafted with Passion
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-espresso-700 font-light">
            A refined blend of craftsmanship, quality, and luxury hospitality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
