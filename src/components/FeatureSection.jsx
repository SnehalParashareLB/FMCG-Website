
import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp , Award, Leaf, Clock } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Premium Ingredients',
    description: 'We use only the finest quality ingredients sourced from trusted suppliers to ensure authentic taste.'
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Authentic Recipes',
    description: 'Our recipes have been passed down through generations, preserving the traditional flavors of India.'
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: 'Commitment of Taste',
    description: 'Reflecting our promise to deliver authentic, consistent, and unforgettable flavor in every bite.'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Freshly Made',
    description: 'All our products are freshly made in small batches to ensure the best taste and quality.'
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-foreground/70">
              We take pride in our commitment to quality, tradition, and customer satisfaction.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
