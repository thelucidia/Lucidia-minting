import DesertBanner from '../../../views/Apps/Games/desert/DesertBanner';
import DesertContent from '../../../views/Apps/Games/desert/DesertContent';
import DesertView from '../../../views/Apps/Games/desert/DesertView';
import FPS from '../../../views/Apps/Games/desert/FPS';
import Featured from '../../../views/Apps/Games/Featured';

const Desertwarrior: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <DesertBanner />
      <Featured id={3} color={'#0ED4FF'} />
      <FPS />
      <DesertView />
      <DesertContent />
      {/* <OtherGames id={1} /> */}
    </section>
  );
};
export default Desertwarrior;
