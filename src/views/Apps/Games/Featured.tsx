import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IOtherGames {
  id: number;
  color: string;
}

const Featured: React.FC<IOtherGames> = ({ id, color }: IOtherGames, { initialSlide }: { initialSlide?: number }) => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(initialSlide ?? 1);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const worldList = [
    {
      title: 'curse of the pharaoh',
      desc: 'Pulse-pounding action, earn $LUCID Tokens, crush undead hordes, ultimate survival.',
      image: 'zombie',
      path: '/curse-of-the-pharaoh',
      // color: '#70F',
    },
    {
      title: 'cryptocraft',
      desc: 'Shape limitless worlds, earn $LUCID Tokens, unleash creativity, adventure awaits!',
      image: 'minecraft',
      path: '/cryptocraft',
      // color: '#C0FF0E',
    },
    {
      title: 'sandstorm racers',
      desc: 'Take a ride through the night skyline, race with your friends and attend virtual events',
      image: 'cyber',
      path: '/sandstorm',
      // color: '#70F',
    },
    {
      title: 'desert warriors',
      desc: 'Engage in the battle and complete missions to earn $LUCID Tokens.',
      image: 'fps',
      path: '/desert-warriors',
      // color: '#0ED4FF',
    },
  ];

  return (
    <section className="w-full h-auto sm:bg-bg bg-transparent">
      <div className="px-5 py-5">
        <div className="max-[1400px] w-full mx-auto h-auto sm:mt-11">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="font-medium text-transparent text-3xl sm:text-3xl md:text-4xl font-primary bg-clip-text bg-gradient-to-r from-[#e4d3fe] via-white to-lavender w-fit 2xl:text-left text-center mx-0 sm:mx-auto 2xl:mx-0">
              Latest News
            </h1>

            <Slider
              {...settings}
              initialSlide={initialSlide ?? 1}
              afterChange={setPage}
              className="m-full pt-20 overflow-hidden  xs:block hidden"
              ref={sliderRef}
            >
              {worldList.map((items, i) => (
                <div
                  className="relative group/main cursor-pointer "
                  style={{ width: 467 }}
                  key={i}
                  onClick={() => {
                    if (i > page) {
                      if (page === 0 && i === 3) {
                        sliderRef?.current?.slickPrev();
                      } else {
                        sliderRef?.current?.slickNext();
                      }
                    } else if (i < page) {
                      if (page === 3 && i === 0) {
                        sliderRef?.current?.slickNext();
                      } else {
                        sliderRef?.current?.slickPrev();
                      }
                    }
                  }}
                >
                  <Link to={items.path}>
                    <div
                      style={windowWidth < 460 ? { width: windowWidth } : {}}
                      className="w-[450px] h-[560px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                    >
                      <div className="scale-x-[-1] relative w-full h-full group overflow-hidden">
                        <img
                          src={`/worlds/${items.image}.webp`}
                          alt={items.title}
                          className="absolute top-0 left-0 w-full h-full object-cover object-left"
                        />

                        <div className=" shadow-world w-full h-full relative z-10"></div>

                        <div
                          className={`transition-shadow ease-in-out duration-500 group-hover:shadow-worldHover  w-full h-full top-0 left-0 absolute z-10`}
                        ></div>

                        <div className="absolute bottom-4 left-4 z-10 p-3 group-hover:text-black text-white ease-in-out duration-[0.1s]">
                          <h1 className="uppercase font-primary text-2xl tracking-wide group-hover:mb-2 transition-all">
                            {items.title}
                          </h1>
                          <div className="overflow-hidden max-h-0 group-hover:max-h-[3rem] transition-all">
                            <p className="font-medium font-primary">{items.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
            <div className="flex flex-wrap gap-3 mt-12 overflow-hidden gap-x-[68px] items-center justify-center  mb-[100px] xs:hidden block">
              {worldList.map((items, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ x: 150 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 70 }}
                    className={`${id == i ? 'hidden' : 'block'}`}
                  >
                    <Link to={items.path}>
                      <div
                        key={i}
                        style={windowWidth < 460 ? { width: windowWidth } : {}}
                        className="w-[450px] h-[560px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                      >
                        <div className="scale-x-[-1] relative w-full h-full group overflow-hidden">
                          <img
                            src={`/worlds/${items.image}.webp`}
                            alt={items.title}
                            className="absolute top-0 left-0 w-full h-full object-cover object-left"
                          />

                          {/* <div className=" shadow-world w-full h-full relative z-10"></div> */}

                          <div className="shadow-world w-full h-full relative z-10"></div>

                          <div
                            className={`  w-full h-full top-0 left-0 absolute z-10`}
                            style={{
                              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.10) 46.96%, ${color} 99.97%)`,
                            }}
                          ></div>
                          <div className="absolute bottom-4 left-4 z-10 p-3 text-white">
                            <h1 className="uppercase font-primary text-2xl tracking-wide">{items.title}</h1>
                            <div className="max-h-0 h-[5rem]">
                              <p className="font-medium font-primary">{items.desc}</p>

                              {/* <div className="absolute bottom-4 left-4 z-10 p-3 group-hover:text-black text-white ease-in-out duration-[0.1s]">
                      <h1 className="uppercase font-primary text-2xl tracking-wide group-hover:mb-2 transition-all">
                        {items.title}
                      </h1>
                      <div className="overflow-hidden max-h-0 group-hover:max-h-[3rem] transition-all">
                        <p className="font-medium font-primary">{items.desc}</p>
                      </div>
                    </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
