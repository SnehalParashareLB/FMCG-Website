import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
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

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image (responsive with different positions for mobile/desktop) */}
      <div className="absolute inset-0 z-0">  
        <img
          src="/currcshopImg.png"
          alt="Chitale Sweet Home Shop Front"
          className="w-full h-full object-cover sm:object-center object-top"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[90vh] text-center px-4">
        <motion.div
          className="max-w-3xl text-white space-y-8 pt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-primary/20 text-white px-4 py-2 rounded-full font-medium text-sm shadow-sm"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Authentic Indian Flavors
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            A Legacy of<span className="gradient-text"> Flavor,</span>
            <br />
            Since the<span className="gradient-text"> First </span>Bite.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 max-w-xl mx-auto"
          >
            <h1
              style={{
                fontFamily: "'Yatra One', cursive",
                letterSpacing: '1.5px',
                fontSize: '2.0rem',
              }}
            >
              EST. 1954
            </h1>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <Button size="lg" asChild className="btn-glow">
              <Link to="/products/namkeens">Explore Namkeens</Link>
            </Button>
            <Button size="lg" asChild className="btn-glow">
              <Link to="/products/sweets" className="group">
                Discover Sweets
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
