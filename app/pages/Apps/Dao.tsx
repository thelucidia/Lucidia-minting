import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

const Dao: React.FC = () => {
  const icons = [
    {
      link: 'https://t.me/Lucidia_io',
      icon: <LiaTelegramPlane />,
    },
    {
      link: 'https://discord.gg/lucidia',
      icon: <RxDiscordLogo />,
    },
    {
      link: 'https://twitter.com/lucidia_io',
      icon: <BsTwitterX />,
    },
    {
      link: 'https://lucidia.io',
      icon: <TfiWorld />,
    },
  ];

  const our_products = [
    {
      date: '15 Jan 2024, 08:00',
      desc: 'Introducing the guardian sphinx as a new mythical protector',
      icon: 'curse',
      user: 'Curse Of The Pharaoh',
      No: 'No (46%)',
      Yes: 'Yes (54%)',
      line1: '46',
      line2: '54',
    },
    {
      date: '20 Jan 2024, 10:00',
      desc: 'Implement A Dynamic Weather Cycle To Enhance World Immersion',
      icon: 'crypto',
      user: 'Cryptocraft',
      No: 'No (24%)',
      Yes: 'Yes (76%)',
      line1: '24',
      line2: '76',
    },
    {
      date: '25 Jan 2024, 09:00',
      desc: 'Add A Player-Driven Marketplace For Trading In-Game Resources',
      icon: 'desert',
      user: 'Desert Warriors',
      No: 'No (33%)',
      Yes: 'Yes (67%)',
      line1: '33',
      line2: '67',
    },
    {
      date: '30 Jan 2024, 11:00',
      desc: 'Enable Cross-Platform Play To Expand The Community',
      icon: 'sandstorm',
      user: 'Sandstorm Racers',
      No: 'No (18%)',
      Yes: 'Yes (82%)',
      line1: '18',
      line2: '82',
    },
    {
      date: '04 Feb 2024, 14:00',
      desc: 'Unlock The Anubis Warzone For PvP Battles',
      icon: 'curse',
      user: 'Curse Of The Pharaoh',
      No: 'No (41%)',
      Yes: 'Yes (59%)',
      line1: '41',
      line2: '59',
    },
    {
      date: '10 Feb 2024, 16:00',
      desc: 'Introduce a new “celestial biome” with unique resources',
      icon: 'crypto',
      user: 'Cryptocraft',
      No: 'No (12%)',
      Yes: 'Yes (88%)',
      line1: '12',
      line2: '88',
    },
    {
      date: '15 Feb 2024, 13:00',
      desc: 'Develop a cooperative mission series “Sands Of Unity"',
      icon: 'desert',
      user: 'Desert Warriors',
      No: 'No (27%)',
      Yes: 'Yes (73%)',
      line1: '27',
      line2: '73',
    },
    {
      date: '20 Feb 2024, 15:00',
      desc: 'Launch a “Heritage Car Collection” featuring classic Middle Easternautomobile',
      icon: 'sandstorm',
      user: 'Sandstorm Racers',
      No: 'No (35%)',
      Yes: 'Yes (65%)',
      line1: '35',
      line2: '65',
    },
  ];

  return (
    <section className="w-full h-full p-[1px] text-white overflow-scroll">
      <img
        src="/assets/app/games/sandstorm.jpg"
        alt="dao"
        className="absolute top-0 z-0 w-full h-screen object-cover"
      />
      {/* <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-1"></div> */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/10 z-2"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-prpl/20 z-3"></div>
      <div className="container w-full h-auto mx-auto mt-[178px] relative">
        <div className="mx-auto flex flex-col gap-y-[125px]">
          <div className="flex flex-row gap-x-[100px]">
            <ul className="flex flex-col w-fit lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-10 md:block hidden">
              {icons.map((items, i) => {
                return (
                  <li
                    className="hover:scale-[1.1] pb-10 transition-all ease-in-out duration-300 hover:text-cyan "
                    key={i}
                  >
                    <a href={items.link} target="_blank" rel="noopener noreferrer" className="text-[32px]">
                      {items.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="pb-[72px]">
              <h1 className="lg:text-[62px] md:text-[40px] sm:text-[35px] text-[30px] text-white font-primary max-w-[800px] pb-[30px] sm:font-bold font-semibold">
                Shape Game Decisions and Be Part of the Story!
              </h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center gap-x-[20px] gap-y-[20px] z-10">
            {our_products.map((item, i) => {
              return (
                <div
                  key={i}
                  className="rounded-[10px] border-[2px] border-[#401675] w-auto min-h-[327px] relative"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                  }}
                >
                  <div className="pt-[50px] pb-[15px] flex flex-col">
                    <div className="flex flex-row justify-between lg:gap-x-[90px] sm:gap-x-[100px] gap-x-[20px] mx-auto">
                      <div className="flex flex-row items-center">
                        <img src="/assets/app/check.svg" alt="check" className="w-fit y-fit" />
                        <span className="text-[16px] text-[#AAA] font-[500]">Approved</span>
                      </div>
                      <div className="">{item.date}</div>
                    </div>
                    <h5 className="text-[18px] text-[#B4B6BF] text-primary font-semibold pl-[30px] pt-[30px] max-w-[300px] overflow-hidden overflow-ellipsis line-clamp-2">
                      {item.desc}
                    </h5>
                    <div className="flex flex-row mt-[30px] gap-x-[10px] pl-[10px]">
                      <img
                        src={`/assets/app/games/${item.icon}.jpg`}
                        alt={item.user}
                        className="rounded-[31.34px] w-[30px] y-[31.34px] flex flex-shrink-0 bg-gray-300 bg-opacity-50 ml-[20px]"
                      />
                      <span className="text-[16px] text-[#F0F0F0] font-[400]">{item.user}</span>
                    </div>
                    <div className="flex flex-row justify-between gap-x-[190px] xl:gap-x-[170px] lg:gap-x-[60px] mx-auto xl:mt-[50px] mt-[10px] text-[16px] font-secondary font-[400]">
                      <span>{item.No}</span>
                      <span>{item.Yes}</span>
                    </div>
                    <div className="flex flex-row px-[30px] mt-[10px] w-full">
                      <img
                        src={`/assets/app/games/line/${item.line1}.png`}
                        alt={'progress'}
                        className="w-fit y-fit overflow-hidden"
                      />
                      <img
                        src={`/assets/app/games/line/${item.line2}.png`}
                        alt={'progress'}
                        className="w-fit y-fit overflow-hidden"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dao;
