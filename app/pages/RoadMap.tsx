import React from 'react';
import { motion } from 'framer-motion';
import RoadCard from '../components/RoadCard';
import PartnersLower from '../views/Hero/PartnersLower';

const RoadMap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-bg w-full h-auto overflow-hidden"
    >
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-prpl/50 to-black z-10"></div>
      <img src="/team/roadmap.jpg" alt="Teambg" className="w-full h-screen object-cover absolute left-0 " />
      <img
        src="/assets/images/man.png"
        alt="man"
        className="w-fit h-fit min-w-[674px] absolute mt-[188px] left-[-329px] md:left-0 z-10"
      />
      <img
        src="/assets/images/right_man.png"
        alt="right_man"
        className="w-fit h-fit absolute right-0 mt-[331px] mr-[39px] hidden lg:block z-10"
      />

      <RoadCard />
      <PartnersLower />
    </motion.div>
  );
};
export default RoadMap;
