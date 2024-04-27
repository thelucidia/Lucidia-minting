import { useEffect, useState } from 'react';
// import clsx from 'clsx';

interface IData {
  landing: {
    image: string;
    title: string;
    desc: string;
    buttons: boolean;
  };
  'our-products': {
    image: string;
    title: string;
    desc: string;
    buttons: boolean;
  };
  [key: string]: {
    image: string;
    title: string;
    desc: string;
    buttons: boolean;
  };
}
const data: IData = {
  landing: {
    image: '/hero/hero.svg',
    title: 'Pioneering Web3 Gaming in the Middle East',
    desc: 'Introducing the first comprehensive web3 gaming ecosystem in the Middle East',
    buttons: true,
  },
  'our-products': {
    image: '/coins.webp',
    title: 'Welcome to lucidia`s ecosystem',
    desc: 'Explore our suite of innovative products designed for the vibrant Middle Eastern gaming community. From unique marketplaces to advanced NFT tools, Lucidia is your gateway to the future of gaming.',
    buttons: false,
  },
};

export function Hero () {
  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    setTimeout(() => {
      setTrueLoading(false);
    }, 1500);
  };

  useEffect(() => {
    handleTrue();
  }, []);

  return (
    <section className="w-full min-h-screen p-5 relative text-white flex md:items-center justify-center">
      <div
        className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 ${trueLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-2xl mt-10 tracking-widest">LOADING</h1>
        </div>
      </div>
      <img
        src="../hero/back.jpeg"
        alt="Herobg"
        className="w-full h-screen object-cover absolute top-0 left-0"
      />

      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-prpl/50 to-black z-10"></div>

      <div className="container w-full h-auto mx-auto relative z-10 flex mt-[7rem] md:mt-[10rem] flex-col-reverse md:flex-row relative">
        <div className="w-full flex flex-col gap-y-[10px]">
          <img
            src="../hero/text1.png"
            alt="Herotext"
            className="flex object-cover text-image mb-4"
          />
          <img
            src="../hero/text2.png"
            alt="Herotext"
            className="flex object-cover text-image mb-12"
          />
          <div className="flex gap-16 mb-12">
            <div className="flex items-center time">
              <div className="flex items-center time-num">
                <div >00</div>:
                <div >00</div>:
                <div >00</div>
              </div>
              <div className="flex items-center time-label">
                <div>Hour</div>
                <div>Minute</div>
                <div>Second</div>
              </div>
            </div>
            <div className="flex line" />
            <div className="flex airdrop">
              <div className="airdrop-title">AIRDROP</div>
              <div className="airdrop-content"><span>$20,000</span> WORTH OF NFT IN TOTAL</div>
            </div>
          </div>
          <div className="flex gap-x-3 mt-[80px] md:flex-row flex-col gap-y-10">
            <a href="" target="_blank" rel="noopener noreferrer" className="">
              <button className=" w-full md:w-[28rem] h-12 clipped2 bg-transparent relative  font-bold flex items-center justify-center scale-y-[-1] group">
                <div className="absolute bg-transparent left-0 top-0 right-0 bottom-0 m-auto group-hover:bg-white transition-bg ease-in-out duration-300">
                  <img
                    src="../hero/join_now.png"
                    alt="JoinNow"
                    className="object-cover w-full h-full absolute top-0 left-0 group-hover:opacity-0 transition-opacity ease-in-out duration-300"
                  />
                </div>
                <h1 className="font-secondary font-bold relative z-10 text-black text-[16px] scale-y-[-1] group-hover:text-black  transition-colors ease-in-out duration-300">
                  JOIN NOW
                </h1>
              </button>
            </a>
          </div>
        </div>

        {/* <div className="w-full relative flex">
          <h1 className="font-primary text-3xl md:text-5xl 2xl:text-[72px] max-w-[40rem] 2xl:leading-[5.5rem] font-semibold md:hidden block text-transparent bg-clip-text bg-gradient-to-r from-[#0ED4FF] via-[#9586FF] to-[#FFFFFF]">
            {item.title}
          </h1>
          <img
            src={`${item.image}`}
            alt="Hero"
            className={clsx('object-cover top-0 md:w-auto h-[30vh] sm:h-[35vh] -mt-4 md:h-[70vh] mx-auto')}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
