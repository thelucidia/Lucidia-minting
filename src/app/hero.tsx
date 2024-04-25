"use client";

import { Button, Typography } from "@material-tailwind/react";
import { Navbar } from "@/components";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/back.jpeg')] bg-cover bg-no-repeat">
    <div className="bg-gradent absolute inset-0 h-full w-full bg-gray-900/60" />
    <Navbar />
    <div className="grid min-h-screen px-16">
      <div className="container relative z-10 my-auto mx-48 grid">
        <Image
          alt=""
          width={909}
          height={124}
          src="/image/text1.png"
          className="object-cover mb-6"
        />
        <Image
          alt=""
          width={926}
          height={98}
          src="/image/text2.png"
          className="object-cover mb-10"
        />
        <div className="flex gap-24">
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
        <div className="flex items-center gap-4 mt-14">
          <a href="" target="_blank">
            <Image
              alt=""
              width={438}
              height={64}
              src="/image/join_now.png"
              className="object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
