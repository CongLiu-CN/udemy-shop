import { useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { ProvinceContext } from '../../contexts/province.context';
import PageNotFound from '../../components/pageNotFound/pageNotFound.component';

import {
  ProvinceSelectedContainer,
  ProvinceSelectedHeader,
  HeaderBlock,
  Title,
} from './province-selected.styles';

const ProvinceSelected = () => {
  const { provinceSelected } = useParams();
  const { colleges } = useContext(ProvinceContext);

  return (
    provinceSelected === `ontario` ? 
    <ProvinceSelectedContainer>
      <Title>{provinceSelected.toUpperCase()}</Title>
      <ProvinceSelectedHeader>
        <HeaderBlock>
          <span>Name</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Address</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>City</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Postcode</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Logo</span>
        </HeaderBlock>
      </ProvinceSelectedHeader>
      {colleges.map(c => {
        return (
          <Fragment key={c.name}>
            <HeaderBlock><span>{c.name}</span></HeaderBlock>
            <HeaderBlock><span>{c.address}</span></HeaderBlock>
            <HeaderBlock><span>{c.city}</span></HeaderBlock>
            <HeaderBlock><span>{c.postalCode}</span></HeaderBlock>
            <HeaderBlock><span>{c.logo}</span></HeaderBlock>
          </Fragment>
        )
      })}
  </ProvinceSelectedContainer>
  :
  <PageNotFound /> 
  );
};

export default ProvinceSelected;
