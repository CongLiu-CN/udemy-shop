import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProvinceContext } from '../../contexts/province.context';
import PageNotFound from '../../components/pageNotFound/pageNotFound.component';
import { Outlet } from 'react-router-dom';

import { Ontario } from '../../components/map';
import BulletinBoard from '../../components/bulletin-board/bulletin-board.component';
import { ProvinceSelectedContainer } from './province-selected.styles'

// import TableBoard from '../../components/table-board/table-board.component'

const ProvinceSelected = () => {
  const { provinceSelected } = useParams();
  const { colleges } = useContext(ProvinceContext);
  const data = {
    "provinceSelected": provinceSelected,
    "colleges": colleges
  }
console.log({provinceSelected})
  return (
    provinceSelected === `Ontario` ? 
    <ProvinceSelectedContainer>
      <Ontario />
      <BulletinBoard />
      {/* <TableBoard data={data} /> */}
      <Outlet />
    </ProvinceSelectedContainer>
  :
  <PageNotFound /> 
  );
};

export default ProvinceSelected;
