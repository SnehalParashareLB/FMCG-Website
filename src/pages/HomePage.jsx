import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryCard from '@/components/CategoryCard';
import TestimonialSection from '@/components/TestimonialSection';
import OffersHero from '@/components/Offers'; // Fixed: Import OffersHero instead of Offers
import FeatureSection from '@/components/FeatureSection';
import NewsletterSection from '@/components/NewsletterSection';
import { getFeaturedProducts, categories } from '@/data/products';

const HomePage = () => {
  const featuredNamkeens = getFeaturedProducts('namkeens');
  const featuredSweets = getFeaturedProducts('sweets');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Our <span className="gradient-text">Categories</span></h2>
              <p className="text-foreground/70 text-lg">
                Explore our wide range of traditional Indian snacks and sweets, crafted with authentic recipes.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {categories.map((category, index) => (
               <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <FeaturedProducts 
        products={featuredNamkeens} 
        title="Popular Namkeens" 
        description="Our best-selling savory snacks that are perfect for any occasion."
        category="namkeens"
      />

      <section className="py-16 md:py-24 relative overflow-hidden bg-secondary/50">
        <div className="absolute -z-10 top-0 left-0 w-full h-full opacity-50">
          <img src="/namkeen.png" alt="food pattern" className="w-full h-full object-cover opacity-20 mix-blend-overlay"/>
        </div>
        <div className="container mx-auto px-4">
          <div className="bg-card/80 backdrop-blur-md rounded-2xl p-8 md:p-16 relative z-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Welcome to CHITALE SWEET HOME:<br/> Our Story of Flavor</h2>
                  <p className="text-foreground/80 mb-4 text-lg">
                    CHITALE SWEET HOME began as a small family business in 1954, with recipes passed down through generations. Our commitment to quality and authentic flavors has made us a trusted name in traditional Indian snacks, namkeens and sweets.
                  </p>
                  <p className="text-foreground/80 text-lg">
                    Today, we continue to handcraft our products using the finest ingredients and traditional methods, bringing the taste of India to your doorstep.
                  </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-video"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img  className="w-full h-full object-cover" alt="Traditional sweet making process with vibrant colors" src="/shopImg.png" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-md animate-pulse-slow"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureSection />
      
      <FeaturedProducts 
        products={featuredSweets} 
        title="Delicious Sweets" 
        description="Traditional Indian sweets made with authentic recipes and premium ingredients."
        category="sweets"
      />
      
      {/* Add the OffersHero component here */}
      <OffersHero />
      
      <TestimonialSection />
            
      <NewsletterSection />
    </motion.div>
  );
};

export default HomePage;