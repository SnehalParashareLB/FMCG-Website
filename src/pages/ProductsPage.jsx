import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory, categories } from '@/data/products';
import { Search, Filter } from 'lucide-react';

const ProductsPage = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [currentCategory, setCurrentCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Get subcategory from URL params or state
  const subcategoryParam = searchParams.get('subcategory') || 'all';

  // Reset state when category or location changes
  useEffect(() => {
    setIsLoading(true);
    
    // Reset all filters and states
    setSearchTerm('');
    setSortOption('default');
    setSelectedSubcategory(subcategoryParam);
    
    // Get category products
    const categoryProducts = getProductsByCategory(category);
    setProducts(categoryProducts);
    
    const categoryInfo = categories.find(cat => cat.slug === category);
    setCurrentCategory(categoryInfo);
    
    setIsLoading(false);
  }, [category, location.pathname]); // Include location.pathname to force reset

  // Handle subcategory changes from URL params
  useEffect(() => {
    setSelectedSubcategory(subcategoryParam);
  }, [subcategoryParam]);

  // Enhanced filtering logic with subcategory support
  useEffect(() => {
    let result = [...products];
    
    // Debug: Log the products and selected subcategory
    console.log('Filtering products:', {
      totalProducts: products.length,
      selectedSubcategory,
      sampleProduct: products[0],
      productsWithSubcategory: products.map(p => ({
        name: p.name,
        subcategory: p.subcategory,
        type: p.type,
        tags: p.tags
      })).slice(0, 3)
    });
    
    // Apply subcategory filter first
    if (selectedSubcategory && selectedSubcategory !== 'all') {
      result = result.filter(product => {
        // More flexible matching for sweets
        const subcategoryMatch = product.subcategory?.toLowerCase().includes(selectedSubcategory.toLowerCase());
        const typeMatch = product.type?.toLowerCase().includes(selectedSubcategory.toLowerCase());
        const categoryMatch = product.category?.toLowerCase().includes(selectedSubcategory.toLowerCase());
        const tagsMatch = product.tags?.some(tag => tag.toLowerCase().includes(selectedSubcategory.toLowerCase()));
        const nameMatch = product.name?.toLowerCase().includes(selectedSubcategory.toLowerCase());
        
        // Special handling for sweets variations
        const isSweet = selectedSubcategory.toLowerCase() === 'sweets' && (
          product.subcategory?.toLowerCase().includes('sweets') ||
          product.type?.toLowerCase().includes('sweets') ||
          product.name?.toLowerCase().includes('sweets') ||
          product.tags?.some(tag => tag.toLowerCase().includes('sweets')) ||
          // Common sweet product names
          ['gulab jamun', 'rasgulla', 'laddu', 'barfi', 'halwa', 'kheer', 'jalebi'].some(sweetName => 
            product.name?.toLowerCase().includes(sweetName)
          )
        );
        
        const matches = subcategoryMatch || typeMatch || categoryMatch || tagsMatch || nameMatch || isSweet;
        
        // Debug log for sweets specifically
        if (selectedSubcategory.toLowerCase() === 'sweets') {
          console.log(`Product: ${product.name}`, {
            subcategoryMatch,
            typeMatch,
            categoryMatch,
            tagsMatch,
            nameMatch,
            isSweet,
            finalMatch: matches,
            productData: {
              subcategory: product.subcategory,
              type: product.type,
              category: product.category,
              tags: product.tags
            }
          });
        }
        
        return matches;
      });
    }
    
    console.log('Filtered results:', result.length);
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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
  }, [searchTerm, sortOption, products, selectedSubcategory]);

  // Get available subcategories for current category
  const availableSubcategories = useMemo(() => {
    if (!products.length) return [];
    
    const subcategories = new Set();
    products.forEach(product => {
      // Add subcategory field
      if (product.subcategory) {
        subcategories.add(product.subcategory.toLowerCase());
      }
      // Add type field
      if (product.type) {
        subcategories.add(product.type.toLowerCase());
      }
      // Add tags
      if (product.tags) {
        product.tags.forEach(tag => subcategories.add(tag.toLowerCase()));
      }
      // Add category if different from main category
      if (product.category && product.category !== category) {
        subcategories.add(product.category.toLowerCase());
      }
      
      // Special detection for sweets in product names
      if (category === 'snacks') {
        const sweetKeywords = ['sweets', 'gulab', 'rasgulla', 'laddu', 'barfi', 'halwa', 'kheer', 'jalebi', 'mithai'];
        const namkeenKeywords = ['namkeen', 'mixture', 'bhujia', 'sev', 'chivda', 'chevda'];
        
        const productNameLower = product.name?.toLowerCase() || '';
        
        if (sweetKeywords.some(keyword => productNameLower.includes(keyword))) {
          subcategories.add('sweets');
        }
        if (namkeenKeywords.some(keyword => productNameLower.includes(keyword))) {
          subcategories.add('namkeens');
        }
      }
    });
    
    console.log('Available subcategories detected:', Array.from(subcategories));
    return Array.from(subcategories).sort();
  }, [products, category]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle subcategory filtering
  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    
    // Update URL params to reflect the selected subcategory
    if (subcategory === 'all') {
      searchParams.delete('subcategory');
    } else {
      searchParams.set('subcategory', subcategory);
    }
    setSearchParams(searchParams, { replace: true });
  };

  // Quick subcategory filters for common categories like snacks
  const renderSubcategoryFilters = () => {
    if (!currentCategory || products.length === 0) return null;

    // Define common subcategories for specific categories
    const commonSubcategories = {
      snacks: ['sweets', 'namkeens', 'chips', 'biscuits', 'chocolates'],
      beverages: ['soft drinks', 'juices', 'tea', 'coffee', 'energy drinks'],
      dairy: ['milk', 'yogurt', 'cheese', 'butter', 'cream']
    };

    const categorySubcategories = commonSubcategories[category] || [];
    
    // Combine common subcategories with detected ones
    const allSubcategories = [...new Set([...categorySubcategories, ...availableSubcategories])];
    
    // Filter to only show subcategories that have products
    const displaySubcategories = allSubcategories.filter(sub => {
      // Check if there are products matching this subcategory
      return products.some(product => {
        const subcategoryMatch = product.subcategory?.toLowerCase().includes(sub.toLowerCase());
        const typeMatch = product.type?.toLowerCase().includes(sub.toLowerCase());
        const categoryMatch = product.category?.toLowerCase().includes(sub.toLowerCase());
        const tagsMatch = product.tags?.some(tag => tag.toLowerCase().includes(sub.toLowerCase()));
        const nameMatch = product.name?.toLowerCase().includes(sub.toLowerCase());
        
        // Special handling for sweets
        const isSweet = sub.toLowerCase() === 'sweets' && (
          product.subcategory?.toLowerCase().includes('sweet') ||
          product.type?.toLowerCase().includes('sweet') ||
          product.name?.toLowerCase().includes('sweet') ||
          product.tags?.some(tag => tag.toLowerCase().includes('sweet')) ||
          ['gulab jamun', 'rasgulla', 'laddu', 'barfi', 'halwa', 'kheer', 'jalebi'].some(sweetName => 
            product.name?.toLowerCase().includes(sweetName)
          )
        );
        
        return subcategoryMatch || typeMatch || categoryMatch || tagsMatch || nameMatch || isSweet;
      });
    });

    console.log('Display subcategories:', displaySubcategories);

    if (displaySubcategories.length === 0) return null;

    return (
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Filter by Type:</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleSubcategoryChange('all')}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedSubcategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
          >
            All {currentCategory.name}
          </button>
          {displaySubcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => handleSubcategoryChange(subcategory)}
              className={`px-4 py-2 rounded-md transition-colors capitalize ${
                selectedSubcategory.toLowerCase() === subcategory.toLowerCase()
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
        
        {/* Debug info - remove this in production */}
        <div className="mt-4 text-sm text-gray-500">
          <details>
            <summary className="cursor-pointer">Debug Info (click to expand)</summary>
            <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
              <p><strong>Selected:</strong> {selectedSubcategory}</p>
              <p><strong>Total Products:</strong> {products.length}</p>
              <p><strong>Filtered Products:</strong> {filteredProducts.length}</p>
              <p><strong>Available Subcategories:</strong> {availableSubcategories.join(', ')}</p>
              <p><strong>Sample Product Structure:</strong></p>
              <pre className="mt-1 overflow-x-auto">
                {products.length > 0 ? JSON.stringify({
                  name: products[0].name,
                  subcategory: products[0].subcategory,
                  type: products[0].type,
                  category: products[0].category,
                  tags: products[0].tags
                }, null, 2) : 'No products available'}
              </pre>
            </div>
          </details>
        </div>
      </div>
    );
  };

  if (isLoading || !currentCategory) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      key={`${category}-${selectedSubcategory}`} // Force re-render on category/subcategory change
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {selectedSubcategory !== 'all' 
                ? `${selectedSubcategory.charAt(0).toUpperCase() + selectedSubcategory.slice(1)} - ${currentCategory.name}`
                : currentCategory.name
              }
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {selectedSubcategory !== 'all' 
                ? `Discover our premium ${selectedSubcategory} products`
                : currentCategory.description
              }
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Subcategory Filters */}
        {renderSubcategoryFilters()}

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-4 w-4" />
            <input
              type="text"
              placeholder={`Search ${selectedSubcategory !== 'all' ? selectedSubcategory : currentCategory.name.toLowerCase()}...`}
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

        {/* Results count */}
        <div className="mb-4">
          <p className="text-foreground/70">
            Showing {filteredProducts.length} of {products.length} products
            {selectedSubcategory !== 'all' && ` in ${selectedSubcategory}`}
          </p>
        </div>
        
        {filteredProducts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-foreground/70">
              {selectedSubcategory !== 'all' 
                ? `No ${selectedSubcategory} products found. Try selecting a different type or adjusting your search.`
                : 'Try adjusting your search or filter criteria.'
              }
            </p>
            {selectedSubcategory !== 'all' && (
              <button
                onClick={() => handleSubcategoryChange('all')}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Show All {currentCategory.name}
              </button>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductsPage;