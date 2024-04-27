import React from 'react';
import { motion } from 'framer-motion';
import GameContent from '../views/GamePlay/GameContent';
import Worlds from '../views/Hero/Worlds';
import Join from '../views/GamePlay/Join';
import Benefits from '../views/GamePlay/Benefits';
import PartnersLower from '../views/Hero/PartnersLower';

const GamePlay: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full h-full overflow-hidden bg-bg"
    >
      <GameContent />
      <Worlds id={'gameplay'} />
      <Join />
      <Benefits />
      <PartnersLower />
    </motion.div>
  );
};
export default GamePlay;
