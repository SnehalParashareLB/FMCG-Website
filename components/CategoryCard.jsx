
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, Utensils } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/products/${category.slug}`}>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="category-card overflow-hidden relative group shadow-lg hover:shadow-xl">
          <div className="aspect-[16/10] overflow-hidden">
            <img 
              src={category.image} 
              alt={category.name}
              className="category-image w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
            <div className="absolute top-4 left-4 bg-primary/20 p-2 rounded-full backdrop-blur-sm category-card-overlay">
              <Utensils className="h-6 w-6 text-primary" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">{category.name}</h3>
              <p className="text-white/80 mb-4 text-sm line-clamp-2 drop-shadow-sm">{category.description}</p>
              <div className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                <span>Explore Products</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5 duration-300" />
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
