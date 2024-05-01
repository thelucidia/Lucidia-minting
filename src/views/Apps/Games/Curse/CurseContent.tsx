import { motion } from 'framer-motion';
import React from 'react';

const CurseContent: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative py-10">
      <div className="w-full h-full overflow-hidden px-5">
        <img
          src="/assets/images/games/crypto/coin.svg"
          alt="coin"
          className="absolute top-[150px] lg:block hidden w-fit y-fit"
        />
        <div className="container w-full mx-auto flex flex-col justify-center items-start flex-col-reverse sm:flex-row sm:gap-x-52 sm:items-end">
          <div className="md:w-[60%]  text-white relative  z-10 text-center lg:text-left overflow-hidden">
            <motion.div
              initial={{ x: -150 }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 60 }}
              className=""
            >
              <div className="pt-[50px]">
                <h1 className="font-medium text-transparent min-w-[360px] text-[32px] text-left  sm:text-[62px] font-primary bg-clip-text bg-gradient-to-r from-white via-[#70F] to-white sm:max-w-[12rem] mx-auto lg:mx-0">
                  Start Your Adventure in Cryptocraft
                </h1>
              </div>
            </motion.div>

            {/* <div className=" flex flex-col gap-y-4 mt-14 sm:mt-20 pr-[20px]">
              <a
                href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <button className="w-full lg:w-[15rem] h-11 clipped2 bg-gradient-to-l from-white to-[#70F] relative group font-bold flex items-center justify-center scale-x-[-1]">
                  <div className="absolute bg-black w-[98%] h-[93%] left-0 top-0 right-0 bottom-0 m-auto clipped2"></div>

                  <div className="absolute bg-gradient-to-l from-white to-[#70F]  w-full h-full left-0 top-0 right-0 bottom-0 m-auto clipped2 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300"></div>
                  <h1 className="font-secondary relative z-10 text-white font-[700] text-[12px] scale-x-[-1] group-hover:text-black transition-colors ease-in-out duration-300">
                    Sign UP
                  </h1>
                </button>
              </a>
            </div> */}
          </div>

          <motion.div
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="sm:w-[58.9%] flex flex-col gap-y-20 overflow-hidden"
          >
            <div className="w-full h-auto clipped2 bg-gry relative  font-bold flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="font-secondary scale-x-[-1] text-white w-full h-full p-5 md:md:border-l-[0.5rem] border-[#70F] rounded-md">
                <h1 className="font-secondary font-bold text-prpl text-lg uppercase">Characters and Progression</h1>
                <ul>
                  <li>
                    <span className="text-[#0ED4FF]">• Guardian of Horus, Scion of Set: </span> Choose your path with
                    characters inspired by mythology, each with unique abilities that cater to different play styles and
                    strategies.
                  </li>
                  <li>
                    <span className="text-[#0ED4FF]">• Artifact Collection: </span>Discover and wield powerful
                    artefacts, upgrading them through challenges to unlock their full potential and carve your legacy in
                    the sands.
                  </li>
                </ul>
                <p className="mt-8 flex flex-col">
                  <span className="text-white">Enemies and AI</span>
                  <ul>
                    <li>
                      <span className="text-[#0ED4FF]">• Mythological Adversaries: </span> From the serpents of Apophis
                      to the legions of Anubis, face off against creatures drawn from the depths of Middle Eastern
                      mythology, requiring more than mere firepower to overcome.
                    </li>
                    <li>
                      <span className="text-[#0ED4FF]">• Adaptive AI: </span>Battle against foes that learn and evolve,
                      ensuring that no two encounters are the same and every victory is hard-earned.
                    </li>
                  </ul>
                </p>
                <p className="mt-10 flex flex-col">
                  <span className="text-white">Technical Framework</span>
                  Powered by Unreal Engine 5, "Pharaoh's Plague" brings the myth-infused world of Dubai to life with
                  stunning visuals, complex AIbehaviors, and seamless multiplayer experiences, all underpinned by
                  Ethereum blockchain technology for a new era of digital ownership and in-game economies.
                </p>
                <p className="mt-10 flex flex-col">
                  <span className="text-white">Art and Sound Design</span>
                  <ul>
                    <li>
                      <span className="text-[#0ED4FF]">• Visual Aesthetic: </span> Immerse yourself in a game where the
                      visuals are as rich and intricate as the story, with a blend of photorealistic and stylised
                      elements that pay homage to the ancient and the modern.
                    </li>
                    <li>
                      <span className="text-[#0ED4FF]">• Audio Landscape: </span> Let the dynamic soundtrack, featuring
                      a mix of traditional Middle Eastern tunes and modern beats, set the pace for your adventures, with
                      sound effects that ground you in the game's mystical and chaotic world. 
                    </li>
                  </ul>
                </p>
                <p className="mt-10 flex flex-col">
                  <span className="text-white">Join The Battle</span>
                  Are you ready to step into a world where myths walk among us, and thebattle ground is the city of the
                  future? "Curse Of The Pharaoh" awaits, where your courage, strategy, and alliances will determine the
                  fate of Dubai and the balance between the ancient and the modern.
                </p>
                <p className="mt-10">Embark on Your Journey in Curse Of The Pharaoh</p>
              </div>
            </div>

            <div className="w-full h-auto clipped2 bg-gry relative flex items-center justify-center scale-x-[-1] rounded-md">
              {/* <div className="scale-x-[-1] text-white w-full h-full p-5 pb-6 md:border-l-[0.5rem] border-[#0ED4FF] rounded-md">
                <div className="flex flex-col gap-y-6">
                  {data.map((items, i) => {
                    return (
                      <div key={i} className="font-primary">
                        <h2 className="font-primary font-medium text-lg w-fit mt-3 text-[#0ED4FF]">{items.title}</h2>
                        <ul className="mt-4 font-medium">
                          {items.value.map((items, i) => {
                            return (
                              <li className="flex items-start gap-x-2" key={i}>
                                {items}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurseContent;
