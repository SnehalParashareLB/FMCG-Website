
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Star, Clock, Weight, Leaf, Info } from 'lucide-react';
import { getProductById, getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchedProduct = getProductById(id);
    setProduct(fetchedProduct);
    
    if (fetchedProduct) {
      const related = getProductsByCategory(fetchedProduct.category)
        .filter(p => p.id !== id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    window.scrollTo(0, 0);
  }, [id]);


  if (!product) {
    return <div className="container mx-auto px-4 py-16">Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <Link 
          to={`/products/${product.category}`}
          className="inline-flex items-center text-foreground/70 hover:text-primary transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to {product.category === 'namkeens' ? 'Namkeens' : 'Sweets'}
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {product.isNew && (
              <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                NEW
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-foreground/70 ml-2">(24 reviews)</span>
            </div>
            
            <p className="text-2xl font-bold text-primary mb-6">₹{product.price}</p>
            
            <p className="text-foreground/80 mb-6">{product.details}</p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <Weight className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Weight:</span>
                <span className="ml-2">{product.weight}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Shelf Life:</span>
                <span className="ml-2">3 months when stored in a cool, dry place</span>
              </div>
              
              <div className="flex items-start">
                <Leaf className="h-5 w-5 text-primary mr-2 mt-1" />
                <div>
                  <span className="font-medium">Ingredients:</span>
                  <p className="ml-2">{product.ingredients.join(', ')}</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full sm:flex-1 gap-2" 
              size="lg"
              asChild
            >
              <Link to="/contact">
                <Info className="h-5 w-5" />
                Inquire About Product
              </Link>
            </Button>
            
            <div className="bg-secondary/50 rounded-lg p-4 mt-8">
              <p className="text-sm text-foreground/70">
                <span className="font-medium">Note:</span> All our products are made fresh. We recommend consuming them within 2-3 weeks of purchase for the best taste experience.
              </p>
            </div>
          </motion.div>
        </div>
        
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
