import React from 'react';
import Banner from '../../../views/Apps/Games/Banner';
import P2EGames from '../../../views/Apps/Games/P2EGames';
import Featured from '../../../views/Apps/Games/Featured';

const Game: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <Featured id={0} color={''} />
      <P2EGames />
    </section>
  );
};
export default Game;
