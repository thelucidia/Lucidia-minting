import { motion } from 'framer-motion';
import React from 'react';

const Myths: React.FC = () => {
  return (
    <section className="w-full h-full relative  mt-[50px]">
      <div className="w-full h-full overflow-hidden px-5">
        <div className="max-w-[1400px] mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="md:w-[80%] overflow-hidden"
          >
            <h2 className="text-transparent sm:ml-[100px] mb-[20px] uppercase font-[700] min-w-[360px] text-[32px] sm:text-[40px] font-primary bg-clip-text bg-gradient-to-r from-[#F0F0F0] via-[#D9B8FF] to-white sm:max-w-[25rem] mx-auto">
              Unleash The Myths
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
                  Dive into "Curse Of The Pharaoh" a groundbreaking hybrid FPS where ancient mythology and futuristic
                  warfare collide in the heart of a reimaginedDubai. As ancient plagues awaken, transforming the city
                  into a nexus of my theological resurgence, you're thrust into a world where your shooting skills are
                  just as crucial as the alliances you form and the strategies you devise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Myths;
