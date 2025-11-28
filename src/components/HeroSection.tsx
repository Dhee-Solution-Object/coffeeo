import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
  imageSrc?: string;
  imageAlt?: string;
  previewSrc?: string;  // 👈 add new one
};


export default function HeroSectionRealPhoto({
  imageSrc = "/hero1.jpg",
  imageAlt = 'Cup of premium coffee...',
  previewSrc = "/hero1.jpg",   // 👈 fallback
}: Props) {
  return (
    <section className="relative overflow-hidden bg-espresso-900">
      {/* Background photo (responsive) */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Add responsive sources if you provide them in your project */}
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="eager"
            className="w-full h-full object-cover object-center opacity-90 filter brightness-75"
            style={{
              // Helps preserve contrast for overlay text
              minHeight: '420px',
            }}
          />
        </picture>

        {/* Soft vignette to focus attention on text */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-espresso-900/20 to-espresso-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/40 via-transparent to-transparent mix-blend-multiply"></div>
        </div>
      </div>

      {/* Decorative floating particles + steam + subtle film grain */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* gold dust particles */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10, x: (i % 6) * 40 - 120 }}
              animate={{ opacity: [0, 0.9, 0], y: [-10, -70, -120] }}
              transition={{ duration: 12 + (i % 6), repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              className="absolute w-1.5 h-1.5 rounded-full bg-gold-300/70"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${20 + (i * 3) % 60}%`,
                transform: 'translateZ(0)',
                filter: 'blur(0.6px)',
              }}
            />
          ))}
        </div>

        {/* steam - SVG path animated for smooth, realistic steam */}
        <svg className="absolute right-10 top-28 w-40 h-56 -translate-y-2 z-20 opacity-80" viewBox="0 0 100 200" fill="none" aria-hidden>
          <defs>
            <linearGradient id="steamGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
            </linearGradient>
            <filter id="softBlur">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>

          {[0, 1, 2].map((n) => (
            <path
              key={n}
              d={`M${20 + n * 15},180 C${10 + n * 10},130 ${30 + n * 10},90 ${20 + n * 12},60 C${15 + n * 8},40 ${30 + n * 6},20 ${30 + n * 10},6`}
              stroke={`url(#steamGrad)`}
              strokeWidth={2 + n}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.85 - n * 0.22}
            >
              <animate
                attributeName="d"
                dur={`${6 + n * 1}s`}
                repeatCount="indefinite"
                values={`M${20 + n * 15},180 C${10 + n * 10},130 ${30 + n * 10},90 ${20 + n * 12},60 C${15 + n * 8},40 ${30 + n * 6},20 ${30 + n * 10},6; M${22 + n * 15},180 C${12 + n * 10},140 ${32 + n * 10},100 ${22 + n * 12},70 C${17 + n * 8},50 ${32 + n * 6},26 ${32 + n * 10},10; M${20 + n * 15},180 C${10 + n * 10},130 ${30 + n * 10},90 ${20 + n * 12},60 C${15 + n * 8},40 ${30 + n * 6},20 ${30 + n * 10},6`}
              />
            </path>
          ))}
        </svg>

        {/* film grain / texture overlay for premium feel */}
        <div className="absolute inset-0 mix-blend-overlay opacity-5 bg-[url('/images/grain.png')]" />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-5 lg:px-7 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-Poppins font-extrabold leading-tight text-cream-50"
            >
              Good Coffee. <br />Good Food.
              <br/> Good Vibes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg sm:text-xl font-light text-cream-200"
            >
              A modern café experience blending premium flavors, warm ambience, and genuine craftsmanship.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium bg-gold-300 text-espresso-900 shadow-lg hover:bg-gold-200 transition"
                >
                  Shop the Collection
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium border border-gold-300 text-cream-100 bg-espresso-800/40 hover:bg-espresso-800/60 transition"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>

            <div className="mt-6 text-sm text-cream-300/80">
              <span className="inline-block mr-4">☕ Specialty Coffee</span>
              <span className="inline-block mr-4"> 🍔 Fresh Café Bites</span>
              <span className="inline-block">🌱 Ethically Sourced</span>
            </div>
          </div>

         
        </div>
      </div>

      {/* Inline styles for small helpers (kept minimal; prefer Tailwind config in production) */}
      <style>{`
        /* Example color tokens if you don't have them in Tailwind config */
        :root{
          --espresso-900: #1a120f;
          --gold-300: #f6d365;
        }
        .bg-espresso-900{ background-color: var(--espresso-900); }
        .text-espresso-900{ color: var(--espresso-900); }
        .bg-gold-300{ background-color: var(--gold-300); }
        .bg-gold-200{ background-color: #f7e5a5; }
        
        /* Grain asset fallback if not available - minimal noise using radial-gradient */
        .bg-[url('/images/grain.png')] {
          background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 3px 3px;
        }

        /* Small responsive tweak */
        @media (max-width: 1024px){
          svg[viewBox] { display: none; } /* hide steam on small screens to save space */
        }
      `}</style>
    </section>
  );
}
