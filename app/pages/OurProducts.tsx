import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../views/Hero/Hero';
import PartnersLower from '../views/Hero/PartnersLower';
import Tokens from '../views/Hero/Tokens';
import Join from '../views/OurPorducts/Join';
import Stats from '../components/Stats';

const OurProduct: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-bg overflow-hidden"
    >
      <Hero id={'our-products'} />
      <Tokens id={'our-products'} />
      <Stats />
      <Join />
      <PartnersLower />
    </motion.div>
  );
};

export default OurProduct;
