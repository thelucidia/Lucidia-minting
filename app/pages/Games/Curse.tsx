import React from 'react';
import Banner from '../../views/Games/Curseof/Banner';
import PartnersLower from '../../views/Hero/PartnersLower';
import Details from '../../views/Games/Curseof/Details';
import Survive from '../../views/Games/Curseof/Survive';

const CurseofThePharaoh: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <Survive />
      <Details />
      <PartnersLower />
    </section>
  );
};
export default CurseofThePharaoh;
