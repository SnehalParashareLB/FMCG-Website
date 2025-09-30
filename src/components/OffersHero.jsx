import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// --- SVG Components for Diwali Elements ---

const DiyaSVG = () => (
  <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22C4 28.0751 10.1777 33 19.5 33C28.8223 33 35 28.0751 35 22H4Z" fill="#D47D38"/>
    <path d="M2 22H37C38.1046 22 39 21.1046 39 20V19C39 17.8954 38.1046 17 37 17H2C0.89543 17 0 17.8954 0 19V20C0 21.1046 0.89543 22 2 22Z" fill="#F59E0B"/>
    <path d="M19.5 0C16.5 8 19.5 12 19.5 17C19.5 12 22.5 8 19.5 0Z" fill="url(#flameGradient)"/>
    <defs>
      <linearGradient id="flameGradient" x1="19.5" y1="0" x2="19.5" y2="17" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEF08A"/>
        <stop offset="1" stopColor="#F59E0B"/>
      </linearGradient>
    </defs>
  </svg>
);

const FireworkSparkSVG = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="4" fill="#FDE047"/>
    <path d="M9 1V4" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 14V17" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M1 9H4" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 9H17" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3.5 3.5L5.5 5.5" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12.5 3.5L10.5 5.5" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3.5 12.5L5.5 10.5" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12.5 12.5L10.5 10.5" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


const OffersHero = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const glowStyles = `@keyframes pulsing-glow-pink{0%{box-shadow:0 0 15px 5px rgba(244,114,182,.4)}50%{box-shadow:0 0 25px 10px rgba(244,114,182,.7)}100%{box-shadow:0 0 15px 5px rgba(244,114,182,.4)}}.image-glow-pink{animation:pulsing-glow-pink 2.5s infinite}@keyframes pulsing-glow-orange{0%{box-shadow:0 0 15px 5px rgba(251,146,60,.4)}50%{box-shadow:0 0 25px 10px rgba(251,146,60,.7)}100%{box-shadow:0 0 15px 5px rgba(251,146,60,.4)}}.image-glow-orange{animation:pulsing-glow-orange 2.5s infinite}@keyframes pulsing-glow-blue{0%{box-shadow:0 0 15px 5px rgba(129,140,248,.4)}50%{box-shadow:0 0 25px 10px rgba(129,140,248,.7)}100%{box-shadow:0 0 15px 5px rgba(129,140,248,.4)}}.image-glow-blue{animation:pulsing-glow-blue 2.5s infinite}`;

  // --- UNIFORM ANIMATIONS ---
  const floatingDiwaliVariants = {
    animate: {
      y: [-4, 4, -4],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const fireworkExplosion = {
    animate: (i) => ({
      opacity: [0, 1, 0],
      scale: [0.6, 1.2, 0.6],
      transition: { duration: 1.5, repeat: Infinity, delay: i * 0.1 }
    })
  };

  // --- PROGRAMMATIC, UNIFORM PLACEMENT ---
  const elements = [];
  const numTopBottom = 13;
  const numSide = 12;

  // Top Edge
  for (let i = 0; i < numTopBottom; i++) {
    elements.push({ type: i % 2 === 0 ? 'Diya' : 'Spark', style: { top: '1%', left: `${5 + i * (90 / (numTopBottom - 1))}%` } });
  }
  // Bottom Edge
  for (let i = 0; i < numTopBottom; i++) {
    elements.push({ type: i % 2 !== 0 ? 'Diya' : 'Spark', style: { bottom: '5%', left: `${5 + i * (90 / (numTopBottom - 1))}%` } });
  }
  // Left Edge (skip corners)
  for (let i = 1; i < numSide; i++) {
    elements.push({ type: i % 2 === 0 ? 'Diya' : 'Spark', style: { left: '5%', top: `${10 + i * (80 / numSide)}%` } });
  }
  // Right Edge (skip corners)
  for (let i = 1; i < numSide; i++) {
    elements.push({ type: i % 2 !== 0 ? 'Diya' : 'Spark', style: { right: '5%', top: `${10 + i * (80 / numSide)}%` } });
  }


  return (
    <div className="relative w-full overflow-hidden py-16 min-h-screen"> 
      <style>{glowStyles}</style>
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 z-0" />
      <div className="absolute inset-0 opacity-10 z-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
        backgroundSize: '30px 30px'
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />

      {/* --- Diwali SVG Elements Container (50 elements, uniform placement) --- */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {elements.map((el, i) => (
          <motion.div 
            key={i}
            className="absolute" 
            style={el.style} 
            variants={el.type === 'Diya' ? floatingDiwaliVariants : fireworkExplosion} 
            custom={i} 
            animate="animate"
          >
            {el.type === 'Diya' ? <DiyaSVG /> : <FireworkSparkSVG />}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center text-center px-4">
        <motion.div
          className="max-w-6xl text-white space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-sm shadow-lg border border-white/20"
            >
              <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
              Exclusive Festive Hampers
            </motion.div>

            <motion.h1
              variants={itemVariants}
              style={{ fontFamily: '"Martel", sans-serif' }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
            >
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                सणांचा आनंद
              </span>
              <br/>
              <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                Curated Festive Hampers
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed"
            >
              Elevate your celebrations with our specially crafted hampers, each a collection of traditional delights. Perfect for gifting and sharing joy.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-12 max-w-lg mx-auto pt-10"
            >
              <motion.div 
                className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-300/30 rounded-2xl p-4 text-center flex flex-col items-center shadow-xl"
              >
                <div className="relative image-glow-pink rounded-lg mb-6">
                  <img src="src/assets/hMixMithai.jpg" alt="Mix Mithai Hamper" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
                <h3 className="text-3xl font-bold text-pink-200 mb-2">Mix Mithai Hamper</h3>
                <p className="text-pink-100/80 text-base">A delightful assortment of our finest, handcrafted mithai, beautifully packaged.</p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-300/30 rounded-2xl p-4 text-center flex flex-col items-center shadow-xl"
              >
                <div className="relative image-glow-orange rounded-lg mb-6">
                  <img src="src/assets/hBarfi.jpg" alt="Barfi Hamper" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
                <h3 className="text-3xl font-bold text-orange-200 mb-2">Barfi Hamper</h3>
                <p className="text-orange-100/80 text-base">A crunchy and savory collection of traditional sweets, perfect for sharing.</p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-4 text-center flex flex-col items-center shadow-xl"
              >
                <div className="relative image-glow-blue rounded-lg mb-6">
                  <img src="src/assets/hFaralBox.jpg" alt="Faral Hamper" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
                <h3 className="text-3xl font-bold text-blue-200 mb-2">Authentic Faral Hamper</h3>
                <p className="text-blue-100/80 text-base">Traditional homemade snacks to bring authentic flavor to your festive table.</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-12"
            >
              <div className="flex flex-wrap justify-center items-center space-x-8 text-white/80">
                <div className="text-center mb-4 sm:mb-0">
                  <div className="text-2xl font-bold text-pink-300">Fresh</div>
                  <div className="text-sm">Daily Made</div>
                </div>
                <div className="w-px h-12 bg-white/30 hidden sm:block"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">70+</div>
                  <div className="text-sm">Years Legacy</div>
                </div>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OffersHero;