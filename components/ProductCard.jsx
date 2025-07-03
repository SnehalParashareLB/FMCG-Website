
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, IndianRupee } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="h-full"
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <Card className="product-card overflow-hidden h-full flex flex-col group bg-card hover:border-primary/50">
          <div className="relative aspect-square overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {product.isNew && (
              <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                NEW
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <CardContent className="pt-6 flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
              <div className="flex items-center font-bold text-primary text-lg">
                <IndianRupee className="h-5 w-5 mr-0.5" />
                {product.price}
              </div>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
          </CardContent>
          
          <CardFooter className="pt-2 pb-4">
            <Button 
              className="w-full gap-2 btn-glow" 
              variant="outline"
              asChild
            >
             <Link to={`/product/${product.id}`}>
                <Eye className="h-4 w-4" />
                View Details
             </Link>
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
