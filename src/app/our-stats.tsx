"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1,500+",
    title: "Participants",
  },
  {
    count: "50",
    title: "Speakers",
  },
  {
    count: "20+",
    title: "Workshops",
  },
  {
    count: "3",
    title: "Days",
  },
];

export function OurStats() {
  return (
    <div className="flex px-64 py-60 w-full bg-[url('/image/stat_back.png')] bg-cover bg-no-repeat">
      <section className="container">
        <div className="flex items-center w-full mt-16 mb-20">
          <Typography variant="h1" color="orange" className="gradient benefits mb-6 font-medium">
            Benefits You Can Enjoy From Lucidia Passport
          </Typography>
        </div>
        <div>
          <Image
            alt=""
            width={1370}
            height={396}
            src="/image/blog1.png"
            className="object-cover mb-20"
          />
          <Image
            alt=""
            width={1370}
            height={396}
            src="/image/blog2.png"
            className="object-cover mb-24"
          />
        </div>
      </section>
    </div>
  );
}

export default OurStats;
