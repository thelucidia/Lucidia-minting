import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

const Marketplace: React.FC = () => {
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
      Title: 'Middle Eastern Developer Hub',
      desc: 'A specialized space for developers to collaborate, share, and innovate, deeply rooted in the rich cultural tapestry of the Middle East.',
    },
    {
      Title: 'In-Game Assets and Code',
      desc: 'Dive into a treasure trove of game development resources, from unique character models to sophisticated code snippets, all tailored for the Arabic-speaking gaming community.',
    },
    {
      Title: 'NFT Integration Tools',
      desc: 'Harness the power of blockchain with our comprehensive toolkit, designed to seamlessly blend NFTs into your gaming projects.',
    },
    {
      Title: 'User Account Sharing',
      desc: 'Participate in our scholarship program, enabling a new dimension of community support and shared gaming experiences.',
    },
  ];

  return (
    <section className="w-full h-full p-[1px] text-white overflow-scroll">
      <img src="/assets/app/games/sandstorm.jpg" className="absolute top-0 z-0 w-full h-screen object-cover" />
      {/* <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-1"></div> */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0ED4FF33]/20 z-7"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-black/51% z-7 "></div>
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
              <h1 className="lg:text-[62px] md:text-[35px] sm:text-[25px] text-[20px] text-white font-primary max-w-[1200px] pb-[30px] font-bold">
                Get ready to explore the future of gaming and development in the Middle East
              </h1>
              <h4 className="text-[18px] text-white font-primary max-w-[1200px] font-normal">
                Our upcoming marketplace will redefine collaboration, innovation, and trade within the gaming community.
                Tailored for the Middle Eastern aesthetic and culture, this platform will serve as a central hub for
                developers, offering a vibrant space for buying, selling, and sharing in-game assets, code, and much
                more. Stay tuned for a transformative experience where creativity meets opportunity.
              </h4>
            </div>
          </div>
          <div className="container mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
            <h2 className="font-medium text-transparent min-w-[360px] text-[32px] sm:text-[40px] font-primary bg-clip-text bg-gradient-to-r from-white via-[#91E6F8] to-white uppercase sm:max-w-[12rem] mx-auto lg:mx-0">
              Game Assets
            </h2>
            <div className="max-w-[873px] h-auto clipped2 bg-gry relative  font-[500] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#0ED4FF] rounded-md">
                <p className="py-16 pl-7 pr-1 text-[18px] font-primary leading-[28px]">
                  Your ultimate destination for gaming assets and tools has arrived. Dive into a world where creativity
                  and commerce converge in the heart of the Middle Eastern gaming community. Browse, explore, and be
                  inspired.
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center gap-x-[20px] gap-y-[20px] z-10 pb-[100px]">
            {our_products.map((item, i) => {
              return (
                <div
                  key={i}
                  className="rounded-[10px] border-[2px] border-[#0ED4FF] w-auto min-h-[327px] relative"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.10) 46.96%, #0ED4FF 99.97%)',
                  }}
                >
                  <div className="pt-[50px] pb-[15px] flex flex-col">
                    <div className="flex flex-row justify-between lg:gap-x-[90px] sm:gap-x-[100px] mx-auto">
                      <div className="flex flex-row items-center">
                        <img src="/assets/app/games/logo.png" className="w-fit y-fit" />
                      </div>
                    </div>
                    <span className="text-[18px] font-[700] pl-[20px] pt-[20px] flex justify-start">{item.Title}</span>
                    <h5 className="text-[18px] text-[#F6F6F6] text-primary font-semibold pl-[20px] pt-[10px] max-w-[300px] overflow-hidden overflow-ellipsis line-clamp-2">
                      {item.desc}
                    </h5>
                  </div>
                  <div className="w-full lg:w-[15rem] mx-auto lg:block hidden py-[26px]">
                    <div className="pr-[30px] py-[10px] w-[286px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center text-white">
                      USD $00.000
                    </div>
                    <img src="/assets/images/Vector.svg" alt="lucidia_token" />
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

export default Marketplace;
