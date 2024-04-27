import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PartnersLower: React.FC = () => {
  const partners = ['ZAWYA', '5J', 'EOR', 'Hatha', 'MenaFN'];

  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <section className="w-full h-auto p-5 bg-[#0ED4FF] relative">
      <motion.div
        ref={ref}
        animate={hasAnimated ? { y: 0 } : { y: -50 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className="overflow-hidden"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center gap-x-9 md:gap-x-14 gap-y-7 justify-center h-auto">
          {partners.map((items, i) => {
            return <img src={`/partners2/${items}.png`} key={i} alt={items} className="md:w-auto w-20 invert" />;
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersLower;
