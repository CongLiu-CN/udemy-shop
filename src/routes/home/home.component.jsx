import { Outlet } from 'react-router-dom';

import Canada from '../../components/map/canada.component';

const Home = () => {
  return (
    <div style={{backgroundColor: "lightgray"}}>
      <Canada />
      <Outlet />
    </div>
  );
};

export default Home;
