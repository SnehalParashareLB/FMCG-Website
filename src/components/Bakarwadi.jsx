import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Remove this import for demo

const BakarwadiHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Responsive Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/finalImages/nBakarwadi.png"
          alt="Delicious Bakarwadi"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient overlay with warm tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-800/70 to-yellow-700/60 z-10" />
      
      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-15" />

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-yellow-300/30 z-16"
        variants={floatingVariants}
        animate="animate"
      >
        <Star className="h-8 w-8" />
      </motion.div>
      
      <motion.div 
        className="absolute top-32 right-16 text-orange-300/30 z-16"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>

      <motion.div 
        className="absolute bottom-40 left-20 text-amber-300/30 z-16"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <Star className="h-10 w-10" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[90vh] text-center px-4">
        <motion.div
          className="max-w-4xl text-white space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-gradient-to-r from-orange-500/30 to-yellow-500/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-sm shadow-lg border border-white/20"
          >
            <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
            Pune's Signature Snack
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{ fontFamily: '"Martel", sans-serif' }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              बाकरवडी
            </span>
            <br/>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              The Perfect Spiral
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the authentic taste of Maharashtra's most beloved snack. 
            <br />
            Crispy, spicy, and bursting with traditional flavors in every delicious spiral.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Button 
              size="lg" 
              asChild 
              className="btn-glow bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 text-lg"
            >
              <a href="/products/bakarwadi">
                Order Bakarwadi Now
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="btn-glow border-2 border-orange-400 text-orange-300 hover:bg-orange-500/20 hover:border-orange-300 hover:text-orange-200 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <a href="/products/namkeens" className="group flex items-center">
                Explore All Namkeens
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">70+</div>
                <div className="text-sm">Years of Tradition</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">100%</div>
                <div className="text-sm">Authentic Recipe</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-300">Fresh</div>
                <div className="text-sm">Made Daily</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-15">
        <svg
          className="w-full h-16 text-white/10"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
          fill="currentColor"
        >
          <path d="M0,22 C240,72 480,72 720,22 C960,72 1200,72 1440,22 L1440,54 L0,54 Z" />
        </svg>
      </div>
    </div>
  );
};

export default BakarwadiHero;