import { Outlet } from 'react-router-dom';

import Canada from '../../components/map/canada.component';
import BulletinBoard from '../../components/bulletin-board/bulletin-board.component';
import { HomeContainer } from './home.styles'

const Home = () => {
  return (
    <HomeContainer>
      <Canada />
      <BulletinBoard />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
