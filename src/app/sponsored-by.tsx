"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function SponsoredBy() {
  return (
    <section className="SponsoredBy py-10 px-10 lg:px-20 flex items-center">
      <div className="video-view flex items-center py-10 px-10">
        <div className="video-player">
          <Image
            alt=""
            width={1412}
            height={621}
            src="/image/video.png"
            className="object-cover mb-6"
          />
        </div>
        <div className="video-discription text-center">
          Curse Of The Pharaoh is an action/adventure/survival game set in a post-apocalyptic world overrun by zombies. Collect weapon, bullet, and fuel props. Travel through open-world environment with different biomes.
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
