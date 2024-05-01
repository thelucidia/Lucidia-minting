import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'Game Overview',
    desc: [
      "<span class='text-[#C0FF0E]'>Title:</span> Cryptocraft",
      "<span class='text-[#C0FF0E]'>Genre:</span>  Sandbox, Open-World, Survival",
      "<span class='text-[#C0FF0E]'>Setting:</span> Creative builders, explorers, Web3 enthusiasts, and community-driven players",
      'Embark on an adventure in ever-expanding worlds, craft your destiny, and become part of a vibrant community where collaboration and creativity reign supreme.',
      "<span class='text-[#7700FF] mt-[24px]'>Gameplay Mechanics</span>",
      'Cryptocraft is an amalgamation of creativity, survival, and exploration, set in a richly diverse and responsive world.',
      "<span class='text-[#C0FF0E]'>Building and Crafting:</span>  From humble shelters to grandiose constructions. Cryptocraft's intuitive crafting system invites endless innovation",
      "<span class='text-[#C0FF0E]'>Exploration:</span> Traverse sprawling biomes, each brimming with unique resources and mysteries. Discover, adapt, and survive in a world that's as vast as your imagination",
    ],
    image: '/assets/app/games/crypto/bg_1.png',
  },
  {
    title: 'Game Overview',
    desc: [
      "'CryptoCraft' immerses players in a sandbox world where creativity, survival, and blockchain merge to forge a novel gaming frontier. Leveraging a realistic physics engine, the game balances intricate crafting and building mechanics with accessible gameplay for a diverse audience. Players are thrust into an expansive, user-generated universe, encouraged to explore, survive, and thrive in ecosystems that dynamically respond to their actions. From crafting basic tools to constructing elaborate structures and engaging in a player-driven economy, 'CryptoCraft' offers a canvas for limitless creativity underpinned by Web3 technology.",
    ],
    image: '/assets/app/games/crypto/bg_2.png',
  },
];
const GameOverview: React.FC = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5">
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
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover absolute w-full h-full group overflow-hidden border border-2 border-[#A5FF16] bg-transparent"
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
                  <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#C0FF0E] rounded-md py-9 pl-9 pr-7">
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
        className="absolute lg:block hidden lg:left-[75px] lg:top-[350px] "
      />
    </section>
  );
};

export default GameOverview;
