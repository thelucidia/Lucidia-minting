import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'GAME OVERVIEW',
    desc: [
      "<span class='text-[#70F]'>Title: </span>  Curse Of The Pharaoh",
      "<span class='text-[#70F]'>Genre: </span>  Hybrid FPS with Co-op, PvP, and PvE Elements",
      "<span class='text-[#70F]'>Setting: </span>  A post-apocalyptic Dubai, where ancient Middle Eastern myth shave taken root in the modern world. Embark on a quest through a cityscape that marries the iconic skyline ofDubai with the haunting beauty of mythological chaos, where every corner turned is a step deeper into a narrative that spans ages.",
      "<p class='text-white pt-[12px] pb-[12px] uppercase font-[700]'>Unique Selling Points</p>",
      "<span class='text-[#A5FF16]'>•  Dubai Reimagined:  </span> Traverse the sands of time in a Dubai overtaken by mythological forces, where every landmark tells a story of ancient power and modern resilience.",
      "<span class='text-[#A5FF16]'>•  Mythological Warfare: </span>  Engage in combat against legendary beasts and deities from Middle Eastern lore, utilising a mix of futuristic firepower and ancient magic.",
      "<span class='text-[#A5FF16]'>•  Narrative Depth: </span>  Delve into a story that weaves the rich cultural tapestry of the Middle East with thrilling mythological tales, setting the stage for an epic saga of heroism and betrayal.",
      "<span class='text-[#A5FF16]'>•  Web3 Integration:   </span> Step into the future of gaming with Web3 technologies, where your achievements and treasures become NFTs, adding a layer of strategy and value to every action.",
    ],
    image: '/assets/app/games/curse/view_1.png',
  },
  {
    title: 'Gameplay Mechanics',
    desc: [
      '"Curse Of The Pharaoh" offers a rich blend of FPS action, strategy, and cooperative gameplay, set against the backdrop of an open-world Dubai afflicted by ancient curses.',
      "<span class='text-[#70F]'>•  Advanced Movement:  </span>  Master the art of urban navigation with parkour mechanics, allowing for fluid movement across Dubai's transformed skyline.",
      "<span class='text-[#70F]'>•  Strategic Combat:  </span> Balance your arsenal of high-tech weapons with enchanted artefacts, each offering unique advantages against the mythological menaces you'll face.",
      "<span class='text-[#70F]'>•  Cooperative Missions:   </span> Band together with allies to undertake quests that dive deep into the heart of the plagues, with dynamic scenarios that adapt based on your team's decisions and achievements.",

      "<p class='text-[#70F] pt-[12px] pb-[12px] uppercase font-[700]'>Story and Narrative</p>",
      'In a world where the past and future collide, you play a crucial role inunraveling the mysteries behind the relic that has bridged the gap between realms, setting ancient gods and monsters loose upon Dubai.',
      "<p class='text-[#70F] pt-[12px] pb-[12px] uppercase font-[700]'>Story and Narrative</p>",
      "<span class='text-[#70F]'>•  Reimagined Dubai:  </span> Explore a city transformed by mythological plagues, where the familiar meets the fantastical, offering endless opportunities for exploration and combat.",
      "<span class='text-[#70F]'>•  Dynamic Environments:    </span> Navigate through a world that reacts to your actions, with shifting terrains and interactive elements that make each journey through Dubai unique.",
    ],
    image: '/assets/app/games/curse/view_2.png',
  },
];
const CurseView: React.FC = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5 py-10">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="max-w-[1400px] w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start"
            >
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="md:w-[80%] overflow-hidden"
              >
                <div className="lg:w-[37vw] lg:h-[23.3vw] max-w-[340px] max-h-[420px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] ">
                  <div className="scale-x-[-1] relative w-full h-full group overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover absolute w-full h-full group overflow-hidden border border-2 border-[#70F] bg-transparent"
                    />
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
        className="absolute lg:block hidden lg:left-[85px] lg:top-[485px] "
      />
    </section>
  );
};

export default CurseView;
