import React from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

const DevTools: React.FC = () => {
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
      title: 'NFT MARKETPLACE',
      slug: 'play',
      desc: 'A cloud-based solution enabling game studios to seamlessly incorporate NFT marketplaces both within their games and on their websites.',
      img: 'market.svg',
    },
    {
      title: 'LOGIN SYSTEM',
      slug: 'nft',
      desc: 'An advanced login system that simplifies user access via social media credentials and automatically generates custodial wallets for users.',
      img: 'login.svg',
    },
    {
      title: 'NFT TOOL KIT',
      slug: 'web3',
      desc: 'A robust toolkit offering game developers the necessary tools to integrate, manage, and monetize NFTs within their games.',
      img: 'toolkit.svg',
    },
    {
      title: 'DIGITAL TWIN (1:1 IN WEB3',
      slug: 'fit',
      desc: 'A framework enabling the creation of digital twins for real-world items or locations within games and virtual environments.',
      img: 'digital.svg',
    },
  ];

  return (
    <section className="w-full h-full p-[1px] text-white">
      <img
        src="/assets/app/games/sandstorm.jpg"
        alt="devtools"
        className="absolute top-0 z-0 w-full h-screen object-cover"
      />
      {/* <div className="w-full h-screen absolute top-0 left-0 bg-opacity-5 backdrop-filter backdrop-blur-lg z-1"></div> */}
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/10 z-1"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-prpl/20 z-1"></div>
      <div className="container w-full h-auto mx-auto mt-[178px] relative">
        <div className="mx-auto flex flex-col gap-y-[125px]">
          <div className="flex flex-row gap-x-[60px] justify-between">
            <ul className="flex flex-col w-fit lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-10 md:block hidden">
              {icons.map((items, i) => {
                return (
                  <li
                    className="hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-cyan py-5"
                    key={i}
                  >
                    <a href={items.link} target="_blank" rel="noopener noreferrer" className="text-[32px]">
                      {items.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div
              className="rounded-[10px] border-[2px] border-[#401675] w-full relative"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
              }}
            >
              <div className="pl-[38px] py-[72px] pr-2">
                <h1 className="lg:text-[40px] md:text-[35px] sm:text-[25px] text-[20px] text-white font-secondary max-w-[967px] pb-[30px] uppercase font-bold">
                  Unlock Your Game Development Potential with Lucidia's Suite of Tools
                </h1>
                <h4 className="md:text-[18px] text-[14px] text-white text-secondary font-bold max-w-[967px]">
                  Explore our curated collection of developer tools designed to empower your game development journey.
                  From innovative NFT integration kits to comprehensive marketplace solutions, each tool is crafted to
                  enhance your projects and bring your creative visions to life. Dive into our tool cards below to
                  discover how Lucidia can elevate your game development experience.
                </h4>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[45px] gap-y-[17px]">
            {our_products.map((item, i) => {
              return (
                <div
                  key={i}
                  className="rounded-[10px] border-[2px] border-[#401675] max-w-[682px] max-h-[425px] relative"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                  }}
                >
                  <div className="pl-[52px] pt-[50px] pb-[166px]">
                    <img src={`/token/${item.img}`} alt={item.slug} className="mb-5" />
                    <h3 className="text-[36px] text-white uppercase font-primary font-bold">{item.title}</h3>
                    <h5 className="text-[20px] text-[#B4B6BF] text-primary font-semibold max-w-[458px]">{item.desc}</h5>
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

export default DevTools;
