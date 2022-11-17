import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProvinceContext } from '../../contexts/province.context';
import PageNotFound from '../../components/pageNotFound/pageNotFound.component';

import TableBoard from '../../components/table-board/table-board.component'

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
    <TableBoard data={data} />
  :
  <PageNotFound /> 
  );
};

export default ProvinceSelected;
