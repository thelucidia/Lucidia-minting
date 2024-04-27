import React from 'react';
import Banner from '../../views/Apps/Home/Banner';
import Detail from '../../views/Apps/Home/Detail';
import Token from '../../views/Apps/Home/Token';
import UpdatedInfo from '../../views/Apps/Home/UpdatedInfo';
import Post from '../../views/Apps/Home/Post';
import JoinGame from '../../views/Apps/Home/JoinGame';

const AppHome: React.FC = () => {
  return (
    <section className="w-full h-auto overflow-hidden bg-bg">
      <Banner />
      <Token />
      <Detail item={'updated'} />
      <UpdatedInfo />
      <Detail item={'action'} />
      <Post />
      <Detail item={'join'} />
      <JoinGame />
      <Detail item={'started'} />
    </section>
  );
};
export default AppHome;
