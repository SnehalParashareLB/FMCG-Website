
// This is a mock data file that would be replaced with actual API calls in a production environment

export const products = [
  // Namkeens
  {
    id: "n1",
    name: "Spicy Mixture",
    category: "namkeens",
    price: 120,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A crunchy mix of lentils, nuts, and spices. Perfect for tea time snacking.",
    details: "Our Spicy Mixture is a traditional Indian savory snack made with a blend of crispy fried lentils, peanuts, chickpea flour noodles, and a variety of spices. Each batch is carefully prepared to ensure the perfect balance of flavors and textures.",
    ingredients: ["Gram flour", "Peanuts", "Rice flakes", "Vegetable oil", "Salt", "Red chili powder", "Turmeric", "Curry leaves"],
    weight: "250g",
    isNew: true,
    featured: true
  },
  {
    id: "n2",
    name: "Masala Peanuts",
    category: "namkeens",
    price: 99,
    image: "https://images.unsplash.com/photo-1536591749633-3d587b4df0b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Crunchy peanuts coated with spicy gram flour batter and deep fried to perfection.",
    details: "Our Masala Peanuts are a popular Indian snack featuring crunchy peanuts coated in a spicy gram flour batter and deep-fried to golden perfection. The perfect balance of spices creates an irresistible flavor that keeps you coming back for more.",
    ingredients: ["Peanuts", "Gram flour", "Rice flour", "Red chili powder", "Salt", "Asafoetida", "Vegetable oil"],
    weight: "200g",
    isNew: false,
    featured: true
  },
  {
    id: "n3",
    name: "Aloo Bhujia",
    category: "namkeens",
    price: 85,
    image: "https://images.unsplash.com/photo-1589639565047-1a492a8f1c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Fine, crispy noodles made from potato and chickpea flour with aromatic spices.",
    details: "Aloo Bhujia is a popular Indian snack consisting of fine, crispy noodles made from potato and chickpea flour, seasoned with a blend of aromatic spices. This savory treat has a melt-in-your-mouth texture and a delightful spicy flavor.",
    ingredients: ["Potato", "Gram flour", "Vegetable oil", "Salt", "Red chili powder", "Ginger powder", "Black pepper"],
    weight: "200g",
    isNew: false,
    featured: true
  },
  {
    id: "n4",
    name: "Bikaneri Sev",
    category: "namkeens",
    price: 75,
    image: "https://images.unsplash.com/photo-1610508500445-a4592435e27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Thin, crispy noodles made from gram flour, flavored with ajwain and red chili.",
    details: "Bikaneri Sev is a traditional Indian snack consisting of thin, crispy noodles made from gram flour, flavored with ajwain (carom seeds) and red chili. Named after the city of Bikaner in Rajasthan, this snack is known for its distinctive taste and texture.",
    ingredients: ["Gram flour", "Vegetable oil", "Salt", "Red chili powder", "Ajwain seeds"],
    weight: "150g",
    isNew: false,
    featured: false
  },
  {
    id: "n5",
    name: "Moong Dal",
    category: "namkeens",
    price: 110,
    image: "https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Crispy fried split mung beans seasoned with salt and spices.",
    details: "Our Moong Dal is made from split mung beans that are soaked, seasoned with a blend of spices, and then fried to crispy perfection. This protein-rich snack offers a satisfying crunch and a delightful savory flavor that makes it perfect for anytime snacking.",
    ingredients: ["Split mung beans", "Vegetable oil", "Salt", "Red chili powder", "Cumin powder"],
    weight: "200g",
    isNew: true,
    featured: false
  },
  {
    id: "n6",
    name: "Chana Dal",
    category: "namkeens",
    price: 95,
    image: "https://images.unsplash.com/photo-1612708345011-a3c1d56a1e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Crunchy fried split chickpeas with a perfect blend of spices.",
    details: "Chana Dal is a popular Indian snack made from split chickpeas that are soaked, seasoned with spices, and fried until golden and crunchy. This protein-packed snack offers a satisfying crunch and a delicious savory flavor that makes it perfect for munching.",
    ingredients: ["Split chickpeas", "Vegetable oil", "Salt", "Red chili powder", "Turmeric", "Asafoetida"],
    weight: "200g",
    isNew: false,
    featured: false
  },
  
  // Sweets
  {
    id: "s1",
    name: "Kaju Katli",
    category: "sweets",
    price: 450,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Diamond-shaped cashew fudge with a delicate silver foil topping.",
    details: "Kaju Katli is a premium Indian sweet made from cashew nuts ground into a fine powder, mixed with sugar syrup, and flavored with cardamom. These diamond-shaped treats are topped with a delicate silver foil (vark) and have a smooth, melt-in-your-mouth texture.",
    ingredients: ["Cashew nuts", "Sugar", "Ghee", "Cardamom powder", "Silver foil (edible)"],
    weight: "250g",
    isNew: false,
    featured: true
  },
  {
    id: "s2",
    name: "Gulab Jamun",
    category: "sweets",
    price: 220,
    image: "https://images.unsplash.com/photo-1546069901-5ec6a79120b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Soft, spongy milk solids balls soaked in rose-flavored sugar syrup.",
    details: "Gulab Jamun is a classic Indian dessert consisting of soft, spongy balls made from milk solids (khoya), soaked in a fragrant rose-flavored sugar syrup. These melt-in-your-mouth treats are perfect for celebrations and special occasions.",
    ingredients: ["Milk solids (Khoya)", "All-purpose flour", "Ghee", "Sugar", "Rose water", "Cardamom powder", "Saffron"],
    weight: "500g (12 pieces)",
    isNew: false,
    featured: true
  },
  {
    id: "s3",
    name: "Rasgulla",
    category: "sweets",
    price: 250,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Soft, spongy cheese balls soaked in light sugar syrup.",
    details: "Rasgulla is a popular Bengali sweet made from fresh cheese (chenna) that is kneaded and shaped into balls, then cooked in a light sugar syrup. These spongy, juicy treats have a delicate flavor and are served chilled for a refreshing dessert experience.",
    ingredients: ["Milk", "Lemon juice", "Sugar", "Rose water", "Cardamom powder"],
    weight: "500g (10 pieces)",
    isNew: true,
    featured: true
  },
  {
    id: "s4",
    name: "Jalebi",
    category: "sweets",
    price: 180,
    image: "https://images.unsplash.com/photo-1589249125609-c683e9209b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Crispy, pretzel-shaped deep-fried batter soaked in saffron sugar syrup.",
    details: "Jalebi is a popular Indian sweet consisting of pretzel-shaped deep-fried batter soaked in saffron-infused sugar syrup. These bright orange treats have a crispy exterior and a syrupy, juicy interior, creating a delightful contrast of textures.",
    ingredients: ["All-purpose flour", "Yogurt", "Sugar", "Saffron", "Cardamom powder", "Vegetable oil"],
    weight: "250g",
    isNew: false,
    featured: false
  },
  {
    id: "s5",
    name: "Soan Papdi",
    category: "sweets",
    price: 200,
    image: "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Flaky, crisp sweet made from gram flour, sugar, and cardamom.",
    details: "Soan Papdi is a popular Indian sweet with a unique flaky, melt-in-your-mouth texture. Made from gram flour, ghee, sugar, and cardamom, this cube-shaped treat is often flavored with pistachios and almonds for added richness and flavor.",
    ingredients: ["Gram flour", "All-purpose flour", "Ghee", "Sugar", "Cardamom powder", "Pistachios", "Almonds"],
    weight: "250g",
    isNew: false,
    featured: false
  },
  {
    id: "s6",
    name: "Mysore Pak",
    category: "sweets",
    price: 280,
    image: "https://images.unsplash.com/photo-1605197161470-5d2a9af0ac7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Rich, melt-in-mouth sweet made from gram flour, ghee, and sugar.",
    details: "Mysore Pak is a rich, traditional South Indian sweet made from gram flour, ghee, and sugar. Named after the city of Mysore in Karnataka, this treat has a distinctive melt-in-your-mouth texture and a rich, buttery flavor that makes it a favorite for festivals and celebrations.",
    ingredients: ["Gram flour", "Ghee", "Sugar", "Cardamom powder"],
    weight: "250g",
    isNew: true,
    featured: false
  }
];

export const categories = [
  {
    id: 1,
    name: "Namkeens",
    slug: "namkeens",
    description: "Savory snacks perfect for any time of day",
    image: "https://images.unsplash.com/photo-1589639565047-1a492a8f1c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    name: "Sweets",
    slug: "sweets",
    description: "Traditional Indian sweets for celebrations and gifting",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

export const getFeaturedProducts = (category) => {
  return products.filter(product => product.category === category && product.featured);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};
