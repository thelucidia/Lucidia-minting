import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../../views/Apps/Home/Banner';
import Video from '../../views/Apps/Home/Video';
import Token from "../../views/Apps/Home/Token";
import AboutEvent from './Hero/AboutEvent';

const AppHome: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-black"
    >
      <section className="w-full h-auto overflow-hidden bg-bg">
        <Banner />
        <Video />
        <Token />
        <AboutEvent />
      </section>
    </motion.div>
  );
};
export default AppHome;
