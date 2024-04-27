import React from 'react';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { clsx } from 'clsx';

export function Navbar () {
  const navList = [
    {
      name: 'games',
      slug: '/',
      paths: ['/'],
      type: 'internal',
    },
    {
      name: 'turnaments',
      slug: '/',
      paths: ['/'],
      type: 'internal',
    },
    {
      name: 'market place',
      slug: '/',
      paths: ['/'],
      type: 'internal',
    },
    {
      name: 'dao',
      slug: '/',
      paths: ['/'],
      type: 'internal',
    },
    {
      name: 'support hub',
      slug: '/',
      paths: ['/'],
      type: 'internal',
    },
    {
      name: 'about',
      slug: '/',
      paths: ['/'],
      type: 'internal',
    },
  ];

  return (
    <>
      <nav
        className={`w-full sm:w-[25rem] h-screen right-0 top-0 bottom-0 bg-black z-30 fixed transition-all  ease-in-out duration-500 translate-x-full`}
      >
        <div className="w-full h-[5rem] bg-prpl flex items-center justify-between px-4">
          <img src="/hero/logo.png" alt="Logo" className="w-52 -ml-5" />
          <MdClose className="text-cyan text-5xl cursor-pointer" />
        </div>
      </nav>

      <nav className="w-full h-auto px-5 xl:py-4 py-0  absolute top-0 left-0 z-20">
        <img
          src="/hero/navline.webp"
          alt="NavLine"
          className="w-full absolute left-0 2xl:block top-7 right-0 hidden pointer-events-none"
        />

        <div className="container w-full mx-auto px-16 flex justify-between items-center mt-5">
          <Link href="/" className="">
            <img src="/hero/newlogo.png" alt="Logo" className="w-52" />
          </Link>

          <ul className="font-secondary font-semibold text-sm uppercase items-center gap-x-12 text-white xl:flex hidden">
            {
              navList.map((items, i) => {
                return items.type === 'external' ? (
                  <Link href={items.slug} target="_blank" rel="noopener noreferrer" className="" key={i}>
                    <li className="cursor-pointer" key={i}>
                      {items.name}
                    </li>
                  </Link>
                ) : (
                  <Link href={items.slug} className="" key={i}>
                    <li
                      className={clsx(
                        'cursor-pointer hover:text-[#0ED4FF]',
                        'text-white',
                      )}
                      key={i}
                    >
                      {items.name}
                    </li>
                  </Link>
                );
              })
            }
          </ul>

          <div className="flex items-center gap-x-8 relative">
            <button className="flex-col items-end gap-y-3 xl:hidden flex">
              <div className="w-8 h-[3px] bg-white"></div>
              <div className="w-6 h-[3px] bg-white"></div>
            </button>

            <div className={`w-[16rem] h-[23rem] clipped bg-bl absolute z-10 top-[3.2rem] transition-height ease-in-out duration-300  -left-[14rem] max-h-0`}>
              <div className="absolute bg-black w-[98%] h-[99%] left-0 top-0 right-0 bottom-0 m-auto clipped">
                <div className="overflow-x-hidden max-h-[100%] w-full top-0 right-0">
                  <ul className="font-secondary font-semibold uppercase p-4 px-7 w-full text-sm text-white">
                  </ul>
                </div>
              </div>
            </div>
            <Link href="/" className="">
              <div className="w-full lg:w-[15rem] relative lg:block hidden">
                <div className="hover:text-white py-[13px] w-[237px] absolute font-secondary text-[14px] uppercase leading-normal font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-[#9586FF] to-[#0ED4FF] transition-colors ease-in-out duration-300">
                  Connect Wallet
                </div>
                <img src="/assets/images/launch_app.svg" alt="ConnectWallet" />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/40 absolute left-0 right-0 -bottom-4 lg:block hidden 2xl:hidden"></div>
      </nav>
    </>
  );
};

export default Navbar;
