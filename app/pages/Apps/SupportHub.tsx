import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiWorld } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';

const SupportHub: React.FC = () => {
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

  return (
    <section className="w-full h-screen p-0 relative text-white relative overflow-scroll">
      <img
        src="/assets/app/games/sandstorm.jpg"
        alt="supporthub"
        className="absolute top-0 z-0 w-full h-screen object-cover"
      />
      {/* <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-1"></div> */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/10 z-7"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-black/51% z-7 "></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-prpl/20 z-1"></div>
      <div className="container gap-x-5 mx-auto flex flex-row mt-[178px]">
        <ul className="flex flex-col w-fit lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-10 sm:block hidden">
          {icons.map((items, i) => {
            return (
              <li className="hover:scale-[1.1] pb-10 transition-all ease-in-out duration-300 hover:text-cyan " key={i}>
                <a href={items.link} target="_blank" rel="noopener noreferrer" className="text-[32px]">
                  {items.icon}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="w-full h-auto m-auto relative mx-auto grid xl:grid-cols-2 grid-cols-1 gap-8 justify-between">
          <div className="flex flex-col justify-between gap-y-[18px]">
            <div
              className="rounded-[10px] border-[2px] border-[#401675] w-full relative"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
              }}
            >
              <div className="pl-[24px] sm:pr-[160px] pr-[80px] py-[48px]">
                <h1 className="sm:text-[40px] text-[30px] text-white font-secondary max-w-[514px] font-bold">
                  Welcome to the Web3 Gaming Education Portal
                </h1>
                <h4 className=" text-[18px] text-white text-secondary font-bold sm:block hidden">
                  Your Gateway to the World of Web3 Gaming
                </h4>
                {/* <a
                  href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <div className="w-full lg:w-[15rem] relative mt-[80px]">
                    <div className="py-[20px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center hover:text-[#A5FF16] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
                      see details
                    </div>
                    <img src="/assets/images/game_button.png" alt="see_details" />
                  </div>
                </a> */}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-x-[18px]">
              <div
                className="rounded-[10px] border-[2px] border-[#401675] max-w-[339px] relative"
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                }}
              >
                <div className="pl-[24px] sm:pt-[140px] pt-[100px] pr-[105px] pb-[22px]">
                  <h3 className="text-[26px] text-white font-secondary max-w-[214px] font-bold">About Us</h3>
                  <h5 className="text-[16px] text-white text-secondary font-bold max-w-[206px]">
                    We are passionate about Web3 gaming and are committed to providing you with valuable resources to
                    demystify this exciting world.
                  </h5>
                </div>
              </div>
              <div
                className="rounded-[10px] border-[2px] border-[#401675] max-w-[339px] relative"
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                }}
              >
                <div className="pl-[24px] pt-[140px] pr-[105px] pb-[22px] sm:block hidden">
                  <h3 className="text-[26px] text-white font-secondary max-w-[214px] font-bold">Coming Soon!</h3>
                  <h5 className="text-[16px] text-white text-secondary font-bold max-w-[206px]">
                    Our team is working tirelessly to bring you tutorials, articles, videos, and much more to help you
                    navigate Web3 gaming. Stay tuned!
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[700px]">
            <div
              className="w-[552px] h-full rounded-[10px] border-[2px] border-[#401675] absolute right-0"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
              }}
            ></div>
            <img
              src="/assets/app/games/edu/gamer.png"
              alt="gamer"
              className=" z-10 absolute bottom-0 w-[744px] md:h-[752px] h-[660px] right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHub;
