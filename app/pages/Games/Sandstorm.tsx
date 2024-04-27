import React from 'react';
import Banner from '../../views/Games/Sandstorm/Banner';
import PartnersLower from '../../views/Hero/PartnersLower';
import Details from '../../views/Games/Sandstorm/Details';
import OtherGames from '../../views/Games/OtherGames';

const Sandstorm: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <Details />
      <OtherGames id={2} />
      <PartnersLower />
    </section>
  );
};
export default Sandstorm;
