import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Products", path: "/products" },
        { name: "Single Origin", path: "/products?category=single-origin" },
        { name: "Blends", path: "/products?category=blends" },
        { name: "Merchandise", path: "/products?category=merchandise" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Story", path: "/story" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Careers", path: "/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", path: "/contact" },
        { name: "FAQ", path: "/faq" },
        { name: "Shipping", path: "/shipping" },
        { name: "Returns", path: "/returns" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1a120b] text-cream-200 pt-16 pb-10 border-t border-[#2a1d13]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Branding */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link to="/" className="text-4xl font-serif font-bold flex items-center mb-4">
                <span className="text-gold-300 mr-1">COFFEE</span>
                <span className="text-cream-50">O</span>
              </Link>

              <p className="text-cream-300 max-w-md text-lg leading-relaxed font-light mb-6">
                Serving premium coffee experiences crafted from the finest beans.  
                Discover your new ritual.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-5">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.15 }}
                    className="p-3 rounded-full bg-[#2d1f13] hover:bg-gold-300 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-cream-200 hover:text-espresso-900" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-serif text-gold-300 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-cream-300 hover:text-gold-300 transition text-lg"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2d2118] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-400 text-md">
            © {currentYear} Coffeeo. All rights reserved.
          </p>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="text-cream-300 hover:text-gold-300 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-cream-300 hover:text-gold-300 transition">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
