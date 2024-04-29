import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../views/Career/Banner';
import PartnersLower from '../views/Hero/PartnersLower';
import Culture from '../views/Career/Culture';
import Journey from '../views/Career/Journey';

const Landing: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full h-auto bg-black relative"
    >
      <Banner />
      <Culture />
      <Journey />
      <PartnersLower />
    </motion.div>
  );
};

export default Landing;
