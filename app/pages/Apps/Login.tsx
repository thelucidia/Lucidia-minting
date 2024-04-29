import React, { useEffect, useState } from 'react';
import { LiaTelegramPlane } from 'react-icons/lia';
import { TfiWorld } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';
import { BsTwitterX } from 'react-icons/bs';
import { sphereoneSDK } from '../../config';
import { useSDK } from '@metamask/sdk-react';
import {
  WalletConnectModalSign,
  useConnect,
  // useRequest
 } from '@walletconnect/modal-sign-react'
 
const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  const { sdk, connected } = useSDK();
  const [failed, setFailed] = useState(false);
  const [fetched, setFetched] = useState(false);

  const [session, setSession] = useState({});  
  const [disabled, setDisabled] = useState(false);
  console.log(session, disabled);
  const { connect } = useConnect({
    requiredNamespaces: {
      eip155: {
      methods: ['eth_sendTransaction', 'personal_sign'],
      chains: ['eip155:1'],
      events: ['chainChanged', 'accountsChanged']
      }
    }
  });
  const projectId = '6a2e9030474264df3b50c650c2b521b5';

  useEffect(() => {
    setFetched(true);
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
  useEffect(() => {
    if (!fetched) {
      return;
    }
    if (connected) {
      window.location.href = `/`;
    }
  }, [connected]);

  const login = async () => {
    try {
      await sphereoneSDK.login();
    } catch (e: any) {
      console.error(e);
    }
  };

  const connectMetaMask = async (evt: { preventDefault: () => void; stopPropagation: () => void }) => {
    evt.preventDefault();
    evt.stopPropagation();
    try {
      console.log('connected: ', connected);
      if (connected) {
        await sdk?.terminate();
      } else {
        await window.ethereum?.request({ method: 'eth_requestAccounts' });
        await sdk?.connect();
      }
    } catch (err) {
      console.error(err);
      setFailed(true);
    }
  };


  const connectWallet =  async () => {
    try {
      setDisabled(true)
      const session = await connect()
      console.info(session)
      setSession(session)
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled(false)
    }
  }

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
      <div className="container mx-auto flex flex-row gap-x-5 pt-[200px]">
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
        <div className="max-w-[700px] w-full h-auto rounded-[10px] sm:ml-[23%] mx-6 border-[2px] border-[#401675] relative bg-opacity-5 backdrop-filter backdrop-blur-lg">
          <div className="py-10 flex flex-col gap-y-5">
            <div className="mx-auto text-transparent font-bold text-center text-[32px] uppercase font-secondary bg-clip-text bg-gradient-to-r from-white via-[#D5B0FF] to-white w-fit">
              log in to your account
            </div>
            {/* <button onClick={login}>
              <img src="/assets/app/games/login/google.svg" alt="extra lucida" width={'343'} className="mx-auto" />
            </button>
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
              className="min-w-[343px] mx-auto mt-10 clipped scale-x-[-1] rounded-[5px] bg-prpl font-secondary font-semibold text-[15px] py-[12px] text-center uppercase text-white"
              onClick={login}
            >
              <h4 className="scale-x-[-1]">Login</h4>
            </button>
            <button
              className="min-w-[343px] mx-auto mt-10 clipped scale-x-[-1] rounded-[5px] bg-prpl font-secondary font-semibold text-[15px] py-[12px] text-center uppercase text-white"
              onClick={connectMetaMask}
            >
              <div className='flex flex-row scale-x-[-1] justify-center item-center sm:gap-x-5 gap-x-2'>
                <img src='/assets/images/wallet/metamask_icon.svg'/>
                <h4 className='text-black'>Metamask Connect</h4>
              </div>
            </button>
            {failed && (<h5 className="mx-auto text-bl">Metamask connect faild</h5>)}
            <button
              className="min-w-[343px] mx-auto mt-2 clipped scale-x-[-1] rounded-[5px] bg-prpl font-secondary font-semibold text-[15px] py-[12px] text-center uppercase text-white mb-12"
              onClick={connectWallet}
            >
              <div className='flex flex-row scale-x-[-1] justify-center item-center sm:gap-x-5 gap-x-2'>
                <img src='/assets/images/wallet/walletconnect_icon.svg'/>
                <h4  className='text-bl'>Wallet Connect</h4>
              </div>
            </button>
            <WalletConnectModalSign
              projectId={projectId}
              metadata={{
              name: 'My Dapp',
              description: 'My Dapp description',
              url: 'https://my-dapp.com',
              icons: ['https://my-dapp.com/logo.png']
              }}
            />
            {/* <h4 className="text-[18px] text-white font-primary text-center">
              Don't have an account yet?
              <Link to="/signup" className="pl-1 text-cyan text-[18px] font-primary">
                Sign Up
              </Link>
            </h4> */}
            {/* <p className="text-white text-[16px] font-secondary text-center">Powered by</p>
            <img src="/partners/sphereone.webp" className="mx-auto" width={188} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
