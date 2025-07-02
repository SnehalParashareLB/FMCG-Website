import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Leaf } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <img
      src="/assets/diya-trail.gif"
      alt=""
      aria-hidden="true"
      className="absolute w-full h-full object-cover opacity-10 animate-fade float-animation"
    />
    <div className="absolute animate-float-slow bg-yellow-200 opacity-30 rounded-full w-32 h-32 top-0 left-0"></div>
    <div className="absolute animate-float bg-orange-300 opacity-20 rounded-full w-24 h-24 bottom-10 right-10"></div>
    <div className="absolute animate-float-reverse bg-pink-200 opacity-30 rounded-full w-20 h-20 top-20 right-1/3"></div>
  </div>
);

const AboutPage = () => {
  const milestones = [
    {
      year: '1954',
      title: 'Our Beginning',
      description: 'Started as a small family shop in the heart of the city with just 5 varieties of sweets and namkeens.'
    },
    {
      year: 'Mid 1970s',
      title: 'Expansion',
      description: 'Opened our second store and expanded our product range to over 30 varieties of traditional treats.'
    },
    {
      year: '2006',
      title: 'Modern Production',
      description: 'Established a state-of-the-art production facility while maintaining traditional recipes and methods.'
    }
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-primary group-hover:text-green-800 transition-colors duration-300" />,
      title: 'Quality Ingredients',
      description: 'We use only the finest quality ingredients sourced from trusted suppliers to ensure authentic taste.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary group-hover:text-yellow-700 transition-colors duration-300" />,
      title: 'Traditional Recipes',
      description: 'Our recipes have been passed down through generations, preserving the authentic flavors of India.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary group-hover:text-rose-700 transition-colors duration-300" />,
      title: 'Customer Satisfaction',
      description: 'We are committed to providing the best experience to our customers through quality products and service.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary group-hover:text-blue-800 transition-colors duration-300" />,
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
      className="relative font-traditional"
    >
      <AnimatedBackground />
      <div className="[perspective:1500px] relative z-10">
        {/* Our Story */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-yellow-100 hover:to-rose-100 transition duration-500">
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
        </section>

        {/* Our Values */}
        <section className="relative py-16 bg-white hover:bg-rose-50 transition duration-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-foreground/70 max-w-xl mx-auto mb-12">
                These core principles guide everything we do at Tasty Delights.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-br hover:from-orange-100 hover:to-yellow-50 transition duration-500"
                >
                  <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="relative py-16 bg-secondary/10 hover:bg-yellow-100 transition duration-500">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-foreground/70">
                Key milestones that have shaped our growth over the years.
              </p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-5/12"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="bg-white hover:bg-gradient-to-br hover:from-pink-100 hover:to-orange-100 transition duration-500 p-6 rounded-lg shadow-md md:w-5/12 mt-8 md:mt-0">
                    <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-foreground/70 text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
