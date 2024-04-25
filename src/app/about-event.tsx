"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section className="container flex flex-col items-left px-52 py-28 min-w-full bg-[url('/image/about.png')] bg-cover bg-no-repeat">
      <Typography variant="h6" color="white">
        E A S Y &nbsp; S T E P
      </Typography>
      <Typography variant="h1" color="white" className="mb-16">
        HOW TO GET THE AIRDROP
      </Typography>
    </section>
  );
}

export default AboutEvent;
