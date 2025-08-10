
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
    {
    id: 3,
    name: 'Anu Parchure',
    role: 'Regular Customer',
    content: 'Very nice food quality. Good hygiene. Great service.',
    avatar: 'https://i.pravatar.cc/150?img=34'
  },
  {
    id: 1,
    name: 'Milind Khangaonkar',
    role: 'Local Guide',
    content: 'Chitale sweet home is popular in all over Maharashtra & India also for delicious taste of all items. Famous item is BAKARWADI.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 2,
    name: 'Vijayraghanvan K',
    role: 'Local Guide',
    content: ' Very good place for snacks, I appreciate the quality of ingredients used.',
    avatar: 'https://i.pravatar.cc/150?img=60'
  },

];

const TestimonialSection = () => {
  return (
    <section className="py-16 spice-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-foreground/70">
              Don't just take our word for it. Here's what our happy customers have to say about our products.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="mb-6 text-foreground/80 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
