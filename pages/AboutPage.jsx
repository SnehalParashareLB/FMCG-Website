
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Leaf } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    {
      year: '1995',
      title: 'Our Beginning',
      description: 'Started as a small family shop in the heart of the city with just 5 varieties of sweets and namkeens.'
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Opened our second store and expanded our product range to over 30 varieties of traditional treats.'
    },
    {
      year: '2012',
      title: 'Modern Production',
      description: 'Established a state-of-the-art production facility while maintaining traditional recipes and methods.'
    },
    {
      year: '2018',
      title: 'Online Presence',
      description: 'Launched our e-commerce platform to deliver our products nationwide.'
    },
    {
      year: '2023',
      title: 'International Shipping',
      description: 'Started shipping our products internationally to cater to the global Indian diaspora.'
    }
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: 'Quality Ingredients',
      description: 'We use only the finest quality ingredients sourced from trusted suppliers to ensure authentic taste.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Traditional Recipes',
      description: 'Our recipes have been passed down through generations, preserving the authentic flavors of India.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Customer Satisfaction',
      description: 'We are committed to providing the best experience to our customers through quality products and service.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Freshness Guaranteed',
      description: 'All our products are freshly made in small batches to ensure the best taste and quality.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative py-16 md:py-24 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Learn about our journey, values, and commitment to preserving traditional flavors.
            </p>
          </motion.div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
              <p className="text-foreground/80 mb-4">
                Tasty Delights began as a small family business in 1995, founded by Mr. Rajesh Sharma with a vision to share the authentic flavors of traditional Indian sweets and namkeens with the world.
              </p>
              <p className="text-foreground/80 mb-4">
                What started as a modest shop with just a handful of products has now grown into a beloved brand offering over 50 varieties of sweets and namkeens, all made using time-honored recipes passed down through generations.
              </p>
              <p className="text-foreground/80">
                Despite our growth, we remain committed to our founding principles: using only the finest ingredients, maintaining traditional preparation methods, and ensuring that every product delivers an authentic taste experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img  className="w-full h-auto" alt="Traditional sweet shop" src="https://images.unsplash.com/photo-1692560253074-3f063a23ba15" />
              </div>
              
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-foreground/70">
                These core principles guide everything we do at Tasty Delights.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-foreground/70">
                Key milestones that have shaped our growth over the years.
              </p>
            </motion.div>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-5/12"></div>
                
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold z-10">
                  {index + 1}
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md md:w-5/12 mt-8 md:mt-0">
                  <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img  className="w-full h-auto" alt="Modern production facility" src="https://images.unsplash.com/photo-1692560253074-3f063a23ba15" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <p className="text-foreground/80 mb-4">
                At Tasty Delights, we blend traditional methods with modern technology to create products that are authentic in taste yet consistent in quality.
              </p>
              <p className="text-foreground/80 mb-4">
                Our production process begins with the careful selection of ingredients. We source the finest nuts, flours, spices, and dairy products from trusted suppliers who share our commitment to quality.
              </p>
              <p className="text-foreground/80">
                Each product is prepared in small batches by our skilled artisans, many of whom have been with us for decades. This approach allows us to maintain the traditional flavors while ensuring that every item meets our strict quality standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
