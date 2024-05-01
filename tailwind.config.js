/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Clash'],
        secondary: ['Bai Jamjuree'],
        thrid: ['Ghost Clan Italic'],
        forth: ['Call of Ops Duty II'],
      },
      colors: {
        bl: '#0ED4FF',
        cyan: '#0ED4FF',
        bg: '#010102',
        lavender: '#9786FF',
        grn: '#C0FF0E',
        lightpurple: '#e4d3fe',
        gry: '#26272B',
        prpl: '#7700FF',
        footergry: '#B3B4BC',
        neon: '#c0ff0e',
        yelw: '#A5FF16',
      },
      boxShadow: {
        world: '0px -84px 147px -9px rgba(0,0,0,0.78) inset',
        worldHover: '0px -99px 400px 51px rgba(127, 80, 231, 0.97) inset',
        gameHover: '0px -99px 400px 51px rgba(192, 255, 14, 0.58) inset',
        tokenHover: '-115px -4px 181px -34px rgba(255,255,255,0.75) inset',
        teamShadow: '0px -118px 161px -87px rgba(119,0,255,1) inset',
      },
      screens: {
        xs: '520px', // Example custom breakpoint at 400px
        customXl: '1420px',
      },
      backgroundImage: {
        'gradient-to-b': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 99.82%)",
        'custom-gradient': "linear-gradient(0deg, rgba(23, 1, 48, 0.1), rgba(23, 1, 48, 0.1)), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 99.82%)",
        'step-gradient': 'linear-gradient(90deg, #193F47 33.5%, #0ED4FF 100%)'
      },
    },
  },
  plugins: [],
};
