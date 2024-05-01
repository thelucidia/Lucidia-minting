import React from 'react';
import Description from './Description';

const DesertBanner: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative text-white overflow-hidden bg-bg">
      <img
        src="/assets/app/games/desert/banner.png"
        alt="desertwarrior"
        className="w-full h-screen object-cover absolute left-0 "
      />
      <div className="w-full h-screen h-auto absolute top-0 left-0 bg-gradient-to-t from-black to-[#0ED4FF33]/20 z-10"></div>
      <div className="w-full h-screen h-auto absolute top-0 left-0 bg-gradient-to-t from-black to-black/51% z-9 "></div>
      <div className="mt-[231px] flex items-center justify-end xs:justify-center mb-[87px] mr-[20px] flex-col gap-y-[20px] ">
        <img src="/assets/app/games/desert/banner.svg" alt="banner" className="relative pb-16 z-10" />
        <div className="md:mt-[19px] flex flex-row justify-center gap-[10px] z-10 pb-[250px]">
          <div className="mt-4 flex gap-[10px]  justify-center items-center">
            <img src="/assets/app/games/server.png" alt="server" className="w-fit h-fit" />
            <span className="items-center text-neutral-500 text-xs pr-[10px] border border-solid border-y-0 border-l-0 border-r-1 border-white font-medium font-['Turret Road'] font-second w-[60px]">
              1 Server
            </span>
            <span className="items-center justify-center text-neutral-500 text-xs font-medium font-['Turret Road'] font-second">
              1 Avaliable
            </span>
          </div>
          <div className="mt-4 flex gap-[10px] items-center justify-center">
            <img src="/assets/app/games/member.png" alt="member" />
            <span className="items-center text-neutral-500 text-xs font-medium font-['Turret Road'] font-second">
              0 Player
            </span>
          </div>
        </div>
        <Description id={3} />
        {/* <a
          href="https://drive.google.com/file/d/1pT08KRpvPwnQcxwyGktETCeH8HtZi08v/view"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="w-full lg:w-[15rem] relative">
            <div className="py-[20px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center hover:text-[#0ED4FF33] font-secondary z-10 text-white font-[700] text-[12px] group-hover:text-black  transition-colors ease-in-out duration-300">
              see details
            </div>
            <img src="/assets/images/game_button.png" alt="see_details" />
          </div>
        </a> */}
      </div>
    </section>
  );
};
export default DesertBanner;
