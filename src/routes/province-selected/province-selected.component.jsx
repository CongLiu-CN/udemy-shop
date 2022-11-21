import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProvinceContext } from '../../contexts/province.context';
import PageNotFound from '../../components/pageNotFound/pageNotFound.component';

import { Ontario } from '../../components/map';
// import BulletinBoard from '../../components/bulletin-board/bulletin-board.component';
import { ProvinceSelectedContainer, MapContainer, CardContainer, ToggelMap } from './province-selected.styles'

import CollegeList from '../../components/college-list/college-list.component'
import CollegeBrief from '../../components/college-brief/college-brief.component'

import Button,  { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

const ProvinceSelected = () => {
  const [ useMap, setUseMap ] = useState(false);
  const { provinceSelected } = useParams();
  const { colleges } = useContext(ProvinceContext);

  const toggleMap = () => {
    setUseMap(!useMap)
  }

  const data = {
    "provinceSelected": provinceSelected,
    "colleges": colleges
  }
console.log({provinceSelected})
  return (
    provinceSelected === `Ontario` ? 
    <ProvinceSelectedContainer>
      <MapContainer>
        <ToggelMap><Button buttonType={BUTTON_TYPE_CLASSES.grow}  type='button' onClick={toggleMap}>{useMap? `Switch to Table` : `Switch to Map`}</Button></ToggelMap>
        {
          useMap? <Ontario /> : <CollegeList data={data} />
        }
      </MapContainer>
      <CardContainer>
        {/* <BulletinBoard /> */}
        <CollegeBrief />
      </CardContainer>
    </ProvinceSelectedContainer>
  :
  <PageNotFound /> 
  );
};

export default ProvinceSelected;
