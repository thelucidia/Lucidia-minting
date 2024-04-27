import Featured from '../../../views/Apps/Games/Featured';
import SandBanner from '../../../views/Apps/Games/SandStorm/SandBanner';
import SandContent from '../../../views/Apps/Games/SandStorm/SandContent';
import SandDescription from '../../../views/Apps/Games/SandStorm/SandDescription';
import SandView from '../../../views/Apps/Games/SandStorm/SandView';
import Ultimate from '../../../views/Apps/Games/SandStorm/Ultimate';

const SandStorm: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <SandBanner />
      <SandDescription id={3} />
      <Featured id={3} color={'#70F'} />
      <Ultimate />
      <SandView />
      <SandContent />
      {/* <OtherGames id={1} /> */}
    </section>
  );
};
export default SandStorm;
