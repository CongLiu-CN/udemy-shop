import { useContext } from 'react';

import { MajorContext } from '../../contexts/major.context';

import {
  ProvinceContainer,
  ProvinceHeader,
  HeaderBlock,
  Total
} from './major.styles';

const Major = () => {
  const { major } = useContext(MajorContext);

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
      <Total>{major.name}</Total>
    </ProvinceContainer>
  );
};

export default Major;
