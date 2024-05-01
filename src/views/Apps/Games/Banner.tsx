import React, { useState } from 'react';
import CurseofVideo from '../../../../videos/curseof.mp4';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

const Banner: React.FC = () => {
  const [trueLoading, setTrueLoading] = useState(true);

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

  const handleTrue = () => {
    setTimeout(() => {
      setTrueLoading(false);
    }, 1500);
  };

  return (
    <section className="w-full sm:h-screen h-full p-0 relative text-white flex items-center justify-center relative">
      <div
        className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        src={CurseofVideo}
        preload={'auto'}
        onLoadedData={handleTrue}
        playsInline
        className="w-[68vw] h-[29vw] object-cover z-10 absolute xl:top-[25%] lg:top-[30%] md:top-[35%] sm:top-[40%] top-[40%] clipped"
      />

      <ul className="flex flex-col w-fit absolute lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-20 left-[10%] md:block hidden">
        {icons.map((items, i) => {
          return (
            <li
              className="hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-cyan text-[32px] pb-10"
              key={i}
            >
              <a href={items.link} target="_blank" rel="noopener noreferrer" className="">
                {items.icon}
              </a>
            </li>
          );
        })}
      </ul>

      <img src="/assets/app/games/curse.jpg" className="absolute top-0 z-1 w-full h-screen object-cover" />
      <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-1"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/70 z-1"></div>

      <div className="w-full h-auto m-auto z-10 flex flex flex-col sm:my-0 my-[100px] mt-[200px]">
        <div className="m-auto px-4 py-2 w-[31vw] bg-opacity-25 backdrop-filter backdrop-blur-md">
          <img src="/assets/images/games/curseof/curseofthe.svg" className="w-[29vw] mx-auto pb-4" alt="curseofthe" />
          <h3 className="2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:-[10px] sm:text-[8px] text-[6px] text-center font-primary font-semibold text-[#F0F0F0] md:block hidden">
            Curse Of The Pharaoh is an action/adventure/survival game set in a post-apocalyptic world overrun by
            zombies. Collect weapon, bullet, and fuel props. Travel through open-world environment with different
            biomes.
          </h3>
        </div>
        {/* <a
          href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
          target="_blank"
          rel="noopener noreferrer"
          className="m-auto pt-[2.8vw]"
        >
          <div className="w-full w-[12.4vw] relative">
            <div className="py-[1vw] w-[12.4vw] absolute font-secondary text-[1vw] uppercase leading-normal font-bold text-center hover:text-[#A5FF16] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
              play game
            </div>
            <img src="/assets/images/game_button.png" className="w-[12.4vw]" alt="see_details" />
          </div>
        </a> */}
      </div>
    </section>
  );
};

export default Banner;
