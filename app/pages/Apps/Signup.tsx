import React, { useEffect, useState } from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiWorld } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import WebSDK, { LoginBehavior } from 'websdk';

const redirectURI = 'http://localhost:3000';

const client_id = import.meta.env.VITE_APP_CLIENT_ID;
const api_key = import.meta.env.VITE_APP_API_KEY;

const sphereoneSDK = new WebSDK(client_id, redirectURI, api_key, LoginBehavior.REDIRECT);
const Signup: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  useEffect(() => {
    try {
      const handleAuth = async () => {
        const authResult: any = await sphereoneSDK.handleCallback();
        if (authResult?.access_token) {
          const { access_token, profile } = authResult;
          console.log('access_token: ', access_token, 'profile: ', profile);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      };
      handleAuth();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const login = async () => {
    try {
      await sphereoneSDK.login();
    } catch (e: any) {
      console.error(e);
    }
  };

  const icons = [
    {
      link: 'https://t.me/Lucidia_io',
      icon: () => <LiaTelegramPlane />,
    },
    {
      link: 'https://discord.gg/lucidia',
      icon: () => <RxDiscordLogo />,
    },
    {
      link: 'https://twitter.com/lucidia_io',
      icon: () => <BsTwitterX />,
    },
    {
      link: 'https://lucidia.io',
      icon: () => <TfiWorld />,
    },
  ];

  return (
    <section className="w-full h-screen relative text-white relative overflow-scroll">
      <img
        src="/assets/app/games/sandstorm.jpg"
        alt="login"
        className="absolute top-0 z-0 w-full h-screen object-cover"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-black to-[#0d0d0d]/10 z-1"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-prpl/20 z-1"></div>
      <div className="container mx-auto flex flex-row  gap-x-5 pt-[200px]">
        <ul className="flex flex-col w-fit lg:text-5xl md:text-4xl sm:text-3xl text-2xl z-10 md:block hidden">
          {icons.map(({ icon: Icon, link }, i) => {
            return (
              <li className="hover:scale-[1.1] transition-all ease-in-out duration-300 hover:text-cyan py-5" key={i}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-[32px]">
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="max-w-[700px] w-full h-auto rounded-[10px] border-[2px] ml-[23%] border-[#401675] relative bg-opacity-5 backdrop-filter backdrop-blur-lg">
          <div className="py-10 flex flex-col gap-y-5">
            <div className="mx-auto text-transparent font-bold text-center text-[32px] uppercase font-secondary bg-clip-text bg-gradient-to-r from-white via-[#D5B0FF] to-white w-fit">
              create your account
            </div>
            {/* <a href="#">
              <img src="/assets/app/games/login/google.svg" alt="extra lucida" width={'343'} className="mx-auto" />
            </a>
            <a href="#">
              <img src="/assets/app/games/login/apple.svg" alt="extra lucida" width={'343'} className="mx-auto" />
            </a> */}
            <img
              src="/hero/navline.webp"
              alt="navline"
              className="mx-auto w-full object-cover relative left-0 right-0 opacity-70 sm:block hidden"
            />
            {/* <div
              className="w-[343px] m-auto h-11"
              style={{
                backgroundImage: 'url(/assets/app/games/login/input.svg)',
              }}
            >
              <input
                type="email"
                className="px-10 font-primary h-full w-full relative z-10 text-[14px] bg-transparent outline-none"
                placeholder="ENTER YOUR EMAIL"
              />
            </div>
            <div
              className="w-[343px] m-auto h-11"
              style={{
                backgroundImage: 'url(/assets/app/games/login/input.svg)',
              }}
            >
              <input
                type="password"
                className="px-10 font-primary h-full w-full relative z-10 text-[14px] bg-transparent outline-none"
                placeholder="PASSWORD"
              />
            </div> */}
            <button
              className="min-w-[343px] mx-auto clipped scale-x-[-1] rounded-[5px] bg-prpl font-secondary font-semibold text-[15px] py-[12px] text-center uppercase text-white mt-10"
              onClick={login}
            >
              <h4 className="scale-x-[-1]">Login</h4>
            </button>
            <h4 className="text-[18px] text-white font-primary text-center">
              Already have an account?
              <Link to="/login" className="text-cyan text-[18px] font-primary pl-1">
                Login
              </Link>
            </h4>
            <p className="text-white text-[16px] font-secondary text-center">Powered by</p>
            <img src="/partners/sphereone.webp" className="mx-auto" width={188} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
