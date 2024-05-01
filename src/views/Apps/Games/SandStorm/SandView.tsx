import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'GAME OVERVIEW',
    desc: [
      "<span class='text-[#70F]'>Title: </span>  Sandstorm Racers",
      "<span class='text-[#70F]'>Genre: </span>  Open-World Racing Simulation",
      "<span class='text-[#70F]'>Target Audience: </span> Racing enthusiasts, adventure gamers, and fans of carculture",
      'Experience the thrill ofracing in dynamic sandstorm environments, where every drift and turn brings youcloser to becoming a legend in the Middle Eastern racing scene.',
      "<p class='text-white pt-[12px] pb-[12px] uppercase font-[700]'>Highlighting Points</p>",
      "<span class='text-[#0ED4FF]'>•  Dynamic Sandstorm Environments:  </span> Navigate through unpredictable weather conditions that transform the open-world landscape, challenging your racing prowess and strategic thinking.",
      "<span class='text-[#0ED4FF]'>•  Arab Drift Racing: </span>  Immerse yourself in the adrenaline-fueled world of Arab drift racing, executing high-risk maneuvers and competing in events that celebrate this unique racing style.",
      "<span class='text-[#0ED4FF]'>•  Extensive Vehicle Customization: </span> Dive into a game world that pays homage to Middle Eastern car culture, with authentic locations, a vibrant soundtrack, and events inspired by regional traditions.",
      "<span class='text-[#0ED4FF]'>•  Community and Competition:  </span> Engage with a globalcommunity of racers through competitive multiplayer events, cooperativechallenges, and social hubs where you can showcase your customized vehicles.",
    ],
    image: '/assets/app/games/sandstorm/view_1.png',
  },
  {
    title: 'GAMEPLAY MECHANICS',
    desc: [
      '"Sandstorm Racers" offers a blend of high-speed action andrealistic racing dynamics, set in an expansive open world that encouragesexploration and competition.',
      "<span class='text-[#70F]'>•  Racing Dynamics: </span>  Experience realistic vehicle handling and physics, where skill and precision lead to victory. Master the balance between speed and control to dominate the desert tracks.",
      "<span class='text-[#70F]'>•  Drifting Mechanics:  </span> The essence of Arab drift racing comes to life with in-depth drifting mechanics. Earn points for style, speed, and risk-taking as you slide through corners and around obstacles.",
      "<span class='text-[#70F]'>•  Dynamic Weather System:  </span> Adapt to the ever-changingdesert environment as sandstorms roll in, altering visibility and trackconditions, adding a layer of unpredictability to every race.",

      "<p class='text-[#70F] pt-[12px] pb-[12px] uppercase font-[700]'>Story and Narrative</p>",
      'Story and Narrative',
      "Embark on a journey through the heart of the Middle East's racing culture, where your reputation and skills are your tickets to fame and respectin the vibrant world of 'Sandstorm Racers.'",
      'Accessibility',
      'Free to play, PC and Mobile(Mobile grey out)',
    ],
    image: '/assets/app/games/sandstorm/view_2.png',
  },
];
const SandView: React.FC = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5 py-10">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="container w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start"
            >
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="md:w-[80%] overflow-hidden"
              >
                <div className="lg:w-[37vw] lg:h-[23.3vw] max-w-[340px] max-h-[420px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] ">
                  <div className="scale-x-[-1] relative w-full h-full group overflow-hidden">
                    <img src={item.image} alt={item.title} className="object-cover absolute w-full h-full" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[80px] md:py-8 sm:py-6 py-4 overflow-hidden"
              >
                <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
                  <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#70F] rounded-md py-9 pl-9 pr-7">
                    <h4 className="pb-6 font-secondary text-[18px] font-bold leading-normal text-prpl">
                      {parse(item.title)}
                    </h4>
                    {item.desc.map((desc, d) => {
                      return (
                        <p key={d} className="text-[16px] font-primary leading-normal">
                          {parse(desc)}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      <img
        src="/assets/images/games/crypto/coin_left.svg"
        alt="coins"
        className="absolute lg:block hidden lg:left-0 lg:top-[440px] "
      />
    </section>
  );
};

export default SandView;
