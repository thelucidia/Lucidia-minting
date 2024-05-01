import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

interface IOtherGames {
  id: number;
}

const Description: React.FC<IOtherGames> = ({ id }: IOtherGames, { initialSlide }: { initialSlide?: number }) => {
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
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: false,
          centerMode: true,
        },
      },
    ],
  };
  const [page, setPage] = useState(initialSlide ?? 1);
  const sliderRef = useRef<Slider>(null);
  const description = [
    {
      title: 'desertwarrior',
      image: 'bg_1',
      path: '/assets/app/games/desert',
      url: '/desert-warriors',
    },
    {
      title: 'desertwarrior',
      image: 'bg_2',
      path: '/assets/app/games/desert',
      url: '/desert-warriors',
    },
    {
      title: 'desertwarrior',
      image: 'bg_3',
      path: '/assets/app/games/desert',
      url: '/desert-warriors',
    },
  ];
  return (
    <>
      <div className="container mx-auto z-10 hidden xs:block">
        <div className="flex flex-wrap gap-3 overflow-hidden gap-x-[68px] items-center justify-center  mb-[100px]">
          {description.map((items, i) => {
            return (
              <motion.div
                key={i}
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 70 }}
                className={`${id == i ? 'hidden' : 'block'}`}
              >
                <Link to={items.url}>
                  <div
                    key={i}
                    className="sm:w-[350px] w-[230px] sm:h-[470px] h-[318px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                  >
                    <div className="scale-x-[-1] relative w-full h-full group overflow-hidden border border-2 border-[#0ED4FF] bg-transparent">
                      <img
                        src={`/assets/app/games/desert/${items.image}.png`}
                        alt={items.title}
                        className="object-cover absolute w-full h-full"
                      />

                      {/* <div className=" shadow-world w-full h-full relative z-10"></div> */}

                      <div
                        className={`transition-shadow ease-in-out duration-500 group-hover:shadow-tokenHover  w-full h-full top-0 left-0 absolute z-10`}
                      ></div>

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
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto z-10 block xs:hidden">
        <Slider
          {...settings}
          initialSlide={initialSlide ?? 1}
          afterChange={setPage}
          className="m-full overflow-hidden"
          ref={sliderRef}
        >
          {description.map((items, i) => (
            <div
              className="relative group/main cursor-pointer"
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
              <Link to={items.url}>
                <div
                  key={i}
                  className="sm:w-[350px] w-[230px] sm:h-[470px] h-[318px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                >
                  <div className="scale-x-[-1] relative w-full h-full group overflow-hidden border border-2 border-[#0ED4FF] bg-transparent">
                    <img
                      src={`/assets/app/games/desert/${items.image}.png`}
                      alt={items.title}
                      className="object-cover absolute w-full h-full"
                    />

                    {/* <div className=" shadow-world w-full h-full relative z-10"></div> */}

                    <div
                      className={`transition-shadow ease-in-out duration-500 group-hover:shadow-tokenHover  w-full h-full top-0 left-0 absolute z-10`}
                    ></div>

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
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Description;
