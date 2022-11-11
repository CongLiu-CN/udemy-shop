import { useContext } from 'react';

import { ProvinceContext } from '../../contexts/province.context';

import {
  ProvinceContainer,
  ProvinceHeader,
  HeaderBlock,
  Total
} from './province.styles';

const Province = () => {
  const { province } = useContext(ProvinceContext);

  return (
    <ProvinceContainer>
      <ProvinceHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </ProvinceHeader>
      <Total>{province.name}</Total>
    </ProvinceContainer>
  );
};

export default Province;
