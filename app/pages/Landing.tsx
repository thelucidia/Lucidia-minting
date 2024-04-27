"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero/Hero';
import Video from './Hero/Video';
import Tokens from './Hero/Tokens';
import AboutEvent from './Hero/AboutEvent';

export function Landing () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-black"
    >
      <section className="w-full h-auto bg-black relative">
        <Hero />
        <Video />
        <Tokens />
        <AboutEvent />
      </section>
    </motion.div>
  );
};

export default Landing;
