import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import data from './stats.mock.json';

const Stats: React.FC = () => {
  const stats = data.stats;
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div className="w-full h-auto bg-prpl py-14 mt-24 font-secondary">
      <div className="flex mx-auto w-fit sm:gap-x-24 flex-wrap justify-between sm:justify-center px-3 gap-y-10 md:text-left text-center">
        {stats.map((items, i) => {
          return (
            <motion.div
              key={i}
              ref={ref}
              animate={hasAnimated ? { y: 0 } : { y: -50 }}
              transition={{ type: 'spring', duration: 1 * i }}
              className="overflow-hidden "
            >
              <CountUp
                className="text-4xl sm:text-[54px] font-bold"
                start={items.start}
                end={items.end}
                duration={0.5 * (i + 1)}
                prefix={items.prefix}
                suffix={items.suffix}
                useEasing={true}
                useGrouping={true}
                enableScrollSpy={true}
              />
              <p className="font-semibold uppercase sm:text-base text-sm pt-2">{items.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
