
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory, categories } from '@/data/products';
import { Search, Filter } from 'lucide-react';

const ProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    const categoryProducts = getProductsByCategory(category);
    setProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
    
    const categoryInfo = categories.find(cat => cat.slug === category);
    setCurrentCategory(categoryInfo);
    
    // Reset filters when category changes
    setSearchTerm('');
    setSortOption('default');
  }, [category]);

  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (featured first, then by id)
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }
    
    setFilteredProducts(result);
  }, [searchTerm, sortOption, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  if (!currentCategory) {
    return <div className="container mx-auto px-4 py-16">Loading...</div>;
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCategory.name}</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="text-foreground/50 h-4 w-4" />
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-auto"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-foreground/70">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductsPage;
