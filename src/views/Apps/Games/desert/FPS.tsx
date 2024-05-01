import { motion } from 'framer-motion';
import React from 'react';

const FPS: React.FC = () => {
  return (
    <section className="w-full h-full relative  mt-[50px]">
      <div className="w-full h-full overflow-hidden px-5">
        <div className="container mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="md:w-[60%] overflow-hidden"
          >
            <h2 className="font-medium text-transparent min-w-[360px] text-[32px] sm:text-[62px] font-primary bg-clip-text bg-gradient-to-r from-white via-[#91E6F8] to-white sm:max-w-[12rem] mx-auto lg:mx-0">
              A new era of FPS gaming
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-5 overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative  font-[500] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#0ED4FF] rounded-md">
                <p className="py-16 pl-7 pr-1 text-[18px] font-primary leading-[28px]">
                  Welcome to "Desert Warriors," where the thrill of first-person shooters meets the groundbreaking
                  possibilities of Web3 and NFTs. Set against the backdrop of vast and diverse desert landscapes, this
                  game invites you into a world strategic combat, team-based challenges, and a vibrant player-driven
                  economy. Here, every decision, every battle, and every alliance hold the weight of your legacy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FPS;
