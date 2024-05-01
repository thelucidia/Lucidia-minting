import React, { useState } from 'react';
import MainVideo from '../../../../videos/curseof.mp4';

const Banner: React.FC = () => {

  const [trueLoading, setTrueLoading] = useState(true);

  const handleTrue = () => {
    setTimeout(() => {
      setTrueLoading(false);
    }, 1500);
  };

  return (
    <section className="w-full min-h-screen relative text-white overflow-hidden bg-bg px-44">
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
        src={MainVideo}
        preload={'auto'}
        onLoadedData={handleTrue}
        playsInline
        className="w-full h-screen object-cover absolute top-0 left-0"
      />
      <img
        src="/assets/app/games/HighresScreenshot00002 1.png"
        alt="game_background"
        className="w-full h-screen object-cover absolute left-0"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-custom-gradient z-10"></div>
      <div className="container mx-auto mt-[150px] flex flex-col gap-y-[180px]">
        <div className="flex flex-row gap-x-[90px]">
          <div className="z-20">
            <h1 className="uppercasexl:text-[59px] lg:text-[52px] md:text-[42px] sm:text-[32px] text-[26px] text-white font-primary uppercase font-bold">
              PARTICIPATE ON <br/>
              THE EXCLUSIVE NFT DROP
            </h1>
            <h4 className="md:text-[75px] text-white text-secondary font-primary font-semibold uppercase">
              Curse of the pharaoh
            </h4>
          </div>
        </div>
      </div>
      <div className="container w-full h-auto mx-auto relative z-10 flex mt-[5rem] md:mt-[4rem] flex-col-reverse md:flex-row relative">
        <div className="w-full flex flex-col gap-y-[10px]">
          <div className="flex gap-16">
            <div className="mt-7">
              <div className="flex items-center">
                <div>
                  <div className="flex items-center justify-center py-4 font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18 left-0 top-0 border-t border-b border-gray-200 rounded-lg mx-2">00</div>
                  <div className="flex justify-center ml-2 font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18">Hour</div>
                </div>
                <div className="font-bold">:</div>
                <div>
                  <div className="flex items-center justify-center py-4 font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18 left-0 top-0 border-t border-b border-gray-200 rounded-lg mx-2">00</div>
                  <div className="flex justify-center ml-2 font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18">Minute</div>
                </div>
                <div className="font-bold">:</div>
                <div>
                  <div className="flex items-center justify-center py-4 font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18 left-0 top-0 border-t border-b border-gray-200 rounded-lg mx-2">00</div>
                  <div className="flex justify-center ml-2 font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18">Second</div>
                </div>
              </div>
            </div>
            <div className="line" />
            <div className="airdrop">
              <div className="font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18 mr-1">AIRDROP</div>
              <div className="font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18 mr-1"><span className="text-sky-400/100">$20,000</span><span>&nbsp;WORTH</span></div>
              <div className="font-clash-grotesk font-bold leading-custom-39 text-left box-border w-16 h-18 mr-1"> OF&nbsp;NFT&nbsp;IN&nbsp;TOTAL</div>
            </div>
          </div>
          <div className="flex gap-x-3 mt-[30px] md:flex-row flex-col gap-y-10">
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
export default Banner;
