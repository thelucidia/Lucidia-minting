import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'Game Overview',
    desc: [
      "<span class='text-[#C0FF0E]'>Title: </span>  Desert Warriors",
      "<span class='text-[#C0FF0E]'>Genre: </span>  First-Person Shooter (FPS)",
      "<span class='text-[#C0FF0E]'>Target Audience: </span> Competitive and casual gamers, Web3 enthusiasts",
      'Dive into "Desert Warriors" where your strategic prowess,teamwork, and adaptability are your greatest assets. Engage in high-stakes combat across ancient ruins, futuristic installations, and unpredictable sand dunes.',
      "<span class='text-[#70F] pt-[24px]'>Unique Selling Points</span>",
      "<span class='text-[#70F]'>•  Strategic Gameplay: </span>  Every match in 'Desert Warriors' is a testament to strategy, requiring keen planning, flawless team coordination, and adept skill execution.",
      "<span class='text-[#70F]'>•  Web3 Integration: </span> Propel your gaming experience into the future with blockchain technology, enabling true ownership, trading, and customization of NFT-based in-game assets.",
      "<span class='text-[#70F]'>•  Diverse Environments: </span> From the silent whispers of ancient deserts to the cold echoes of advanced military bases, each map offers unique tactical challenges.",
      "<span class='text-[#70F]'>•  Community-Centric Development: </span> 'Desert Warriors' evolves with you. Your feedback and engagement shape the future, with continuous updates and new content driven by the community.",
    ],
    image: '/assets/app/games/desert/view_1.png',
  },
  {
    title: 'Game Overview',
    desc: [
      "'Desert Warriors' plunges players into an innovative first-person shooter experience, blending high-stakes tactical gameplay with the groundbreaking potential of Web3 and NFTs within vast desert battlegrounds. As players engage in strategic combat and team-based missions, they navigate a player-driven economy powered by blockchain, transforming in-game assets into valuable, tradeable items. This FPS game not only tests players' combat prowess but also immerses them in a world where strategy, teamwork, and blockchain technology converge to create a dynamic, evolving battlefield.",
    ],
    image: '/assets/app/games/desert/view_2.png',
  },
  {
    title: 'Game Features',
    desc: [
      "<span class='text-[#C0FF0E]'>Strategic Tactical Combat </span>  Engage in thoughtful, team-oriented battles where strategy and coordination are key to dominating expansive desert terrains",
      "<span class='text-[#C0FF0E]'>Web3 and NFT Integration: </span>  Own, trade, and personalize NFT-based skins and items, introducing a layer of strategy and personal investment to the gaming experience.",
      "<span class='text-[#C0FF0E]'>Expansive Desert Environments: </span> Battle across diverse maps, from ancient ruins to futuristic bases, each offering unique tactical challenges and visual splendor.",
      "<span class='text-[#70F]'>•  Community-Driven Evolution: </span>  'Desert Warriors' grows with its community, incorporating feedback and updates to continuously enrich the gameplay and ecosystem.",
      "<p class='pt-8'>With 'Desert Warriors,' players are not just participants in thrilling FPS battles; they are pioneers in a new era of gaming where the thrill of competition meets the innovation of blockchain technology.</p>",
    ],
    image: '/assets/app/games/desert/view_2.png',
  },
];
const DesertView: React.FC = () => {
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
                    <img src={item.image} alt={item.title} className="object-cover absolute w-full h-full " />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="sm:w-[58.9%] flex flex-col px-5 gap-y-5 lg:py-[30px] md:py-8 sm:py-6 py-4 overflow-hidden"
              >
                <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
                  <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#0ED4FF] rounded-md py-9 pl-9 pr-7">
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

export default DesertView;
