import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative flex md:items-center justify-center">
      <div
        className={`w-full h-screen bg-black fixed z-30 top-0 left-0 flex flex-col items-center justify-center  transition-all ease-in-out duration-300 opacity-100 pointer-events-auto`}
      >
        <div className={`animate-pulse flex justify-center items-center flex-col`}>
          <img src="/loading.svg" alt="Logo" className="w-24" />
          <h1 className="font-primary font-semibold text-white text-2xl mt-10 tracking-widest">Coming Soon!</h1>
          <Link to="/game">
            <h2 className="font-primary font-semibold text-3xl mt-10 text-prpl tracking-widest">Go To Game Page</h2>
          </Link>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-prpl/50 to-black z-10"></div>
    </section>
  );
};

export default ComingSoon;
