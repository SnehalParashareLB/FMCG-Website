import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Gift, Star, Heart, Crown, Feather } from 'lucide-react';
import { Music } from 'lucide-react';

const OffersHero = () => {
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
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background with festive gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 z-0" />
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-16 left-8 text-yellow-300/40 z-15"
        variants={floatingVariants}
        animate="animate"
      >
        <Gift className="h-12 w-12" />
      </motion.div>
      
      <motion.div 
        className="absolute top-24 right-12 text-pink-300/40 z-15"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <Star className="h-8 w-8" />
      </motion.div>

      <motion.div 
        className="absolute bottom-32 left-16 text-orange-300/40 z-15"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <Crown className="h-10 w-10" />
      </motion.div>

      <motion.div 
        className="absolute top-40 left-1/4 text-purple-300/30 z-15"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      >
        <Heart className="h-6 w-6" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[90vh] text-center px-4">
        <motion.div
          className="max-w-5xl text-white space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-sm shadow-lg border border-white/20"
          >
            <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
            Festival Season Special Offers
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{ fontFamily: '"Martel", sans-serif' }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              सणांचा आनंद
            </span>
            <br/>
            <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
              Festive Offers
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed"
          >
            Celebrate the spirit of festivals with our special offers on traditional sweets and namkeens. 
            <br />
            Perfect for sharing joy with your loved ones during this auspicious season.
          </motion.p>

          {/* Current Festival Offers */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            {/* Raksha Bandhan Offer */}
            <motion.div 
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-300/30 rounded-2xl p-6 text-center"
              variants={pulseVariants}
              animate="animate"
            >
              <div className="text-orange-300 mb-3">
                <Gift className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Raksha Bandhan</h3>
              <p className="text-orange-100/80 text-sm mb-3">Sweet boxes for your siblings</p>
              <div className="text-2xl font-bold text-yellow-300">--% OFF</div>
              <p className="text-xs text-orange-200/70 mt-2">On combo packs</p>
            </motion.div>

            {/* Krishna Janmashtami Offer */}
            <motion.div 
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6 text-center"
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="text-blue-300 mb-3">
                <Music className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-2">Krishna Janmashtami</h3>
              <p className="text-blue-100/80 text-sm mb-3">Divine sweets collection</p>
              <div className="text-2xl font-bold text-yellow-300">--% OFF</div>
              <p className="text-xs text-blue-200/70 mt-2">On Ladoo & Pedha varieties</p>
            </motion.div>

            {/* Ganesh Chaturthi Offer */}
            <motion.div 
              className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-300/30 rounded-2xl p-6 text-center"
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-pink-300 mb-3">
                <Star className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-pink-200 mb-2">Ganesh Chaturthi</h3>
              <p className="text-pink-100/80 text-sm mb-3">Modak & festive treats</p>
              <div className="text-2xl font-bold text-yellow-300">--% Off</div>
              <p className="text-xs text-pink-200/70 mt-2">On Modak & Karanji</p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button 
              size="lg" 
              asChild 
              className="btn-glow bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg"
            >
              <a href="/products/sweets">
                <Gift className="mr-2 h-5 w-5" />
                Shop Festival Sweets
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="btn-glow border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400/20 hover:border-yellow-300 hover:text-yellow-200 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <a href="/products/namkeens" className="group flex items-center">
                Explore Namkeens
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <div className="flex flex-wrap justify-center items-center space-x-8 text-white/80">
              <div className="text-center mb-4 sm:mb-0">
                {/* <div className="text-2xl font-bold text-yellow-300">Free</div>
                <div className="text-sm">Home Delivery</div> */}
              </div>
              {/* <div className="w-px h-12 bg-white/30 hidden sm:block"></div> */}
              <div className="text-center mb-4 sm:mb-0">
                <div className="text-2xl font-bold text-pink-300">Fresh</div>
                <div className="text-sm">Daily Made</div>
              </div>
              <div className="w-px h-12 bg-white/30 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">70+</div>
                <div className="text-sm">Years Legacy</div>
              </div>
            </div>
          </motion.div>

          {/* Festival Timeline */}
          <motion.div
            variants={itemVariants}
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mt-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Upcoming Festivals - August 2025</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex justify-between items-center">
                <span>Raksha Bandhan</span>
                <span className="text-orange-300 font-medium">August 9</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Krishna Janmashtami</span>
                <span className="text-blue-300 font-medium">August 16</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Ganesh Chaturthi</span>
                <span className="text-pink-300 font-medium">August 27</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-15">
        <svg
          className="w-full h-20 text-white/5"
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

export default OffersHero;