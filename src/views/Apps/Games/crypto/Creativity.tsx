import { motion } from 'framer-motion';
import React from 'react';

const Creativity: React.FC = () => {
  return (
    <section className="w-full h-full mt-[50px]">
      <div className="w-full h-full overflow-hidden px-5">
        <div className="container w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="md:w-[60%] overflow-hidden"
          >
            <h2 className="font-medium text-left md:text-[62px] text-[32px] leading-normal uppercase font-primary text-white max-w-[440px]">
              Unleash Your Creativity
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-5 overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative  font-[500] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#9AFC27] rounded-md">
                <p className="py-16 pl-7 pr-4 text-[18px] font-primary leading-[28px]">
                  Welcome to "Cryptocraft", a boundless universe where your imagination is the only limit. Dive into an
                  open-world sandbox experience that combines the joy of building and survival with the innovative
                  features of Web3 and NFTs. In Cryptocraft, every creation, every exploration, and every interaction
                  enriches your journey and the world around you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Creativity;
