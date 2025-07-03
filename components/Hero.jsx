
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
  };


  return (
    <div className="relative overflow-hidden hero-pattern min-h-[80vh] md:min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6 text-center lg:text-left">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm shadow-sm"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Authentic Indian Flavors
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Discover the Taste of <span className="gradient-text">Tradition</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0"
            >
              Handcrafted namkeens and sweets made with authentic recipes passed down through generations. Experience the rich flavors of India.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <Button size="lg" asChild className="btn-glow">
                <Link to="/products/namkeens">
                  Explore Namkeens
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="btn-glow border-primary/50 hover:bg-primary/5 hover:text-primary">
                <Link to="/products/sweets" className="group">
                  Discover Sweets
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            variants={imageVariants}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] transform group-hover:scale-105 transition-transform duration-500 ease-out">
              <img  className="w-full h-full object-cover rounded-2xl" alt="Assorted Indian sweets and namkeens" src="https://images.unsplash.com/photo-1666973523950-3ca3149d348c" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4 max-w-xs transform group-hover:bottom-8 transition-all duration-500 ease-out"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-primary">Made with Love</p>
                    <p className="text-sm text-foreground/70">Premium ingredients, traditional methods.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 blur-3xl opacity-60 animate-pulse-slow"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
