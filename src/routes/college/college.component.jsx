import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CollegeContext } from '../../contexts/college.context';

import {
  CollegeContainer,
  HeaderBlock,
  Total,
  CollegeHeader
} from './college.styles';

const College = () => {
  const { collegeSelected } = useParams();
  console.log(`second path: `, collegeSelected)
  const { college } = useContext(CollegeContext);

  return (
    <CollegeContainer>
      <CollegeHeader>
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
      </CollegeHeader>
      <Total>{college.name}</Total>
    </CollegeContainer>
  );
};

export default College;
