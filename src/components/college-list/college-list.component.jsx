import { Fragment } from 'react';
import {
  CollegeListContainer,
  CollegeListHeader,
  CollegeListBlock,
  CollegeListContent,
  Title,
  Logo
} from './college-list.styles';

const CollegeList = ({data}) => {
console.log(data)
const {
  provinceSelected, colleges
} = data
  return (
    <CollegeListContainer>
      <Title>{provinceSelected.toUpperCase()}</Title>
      <CollegeListHeader>
        <CollegeListBlock>
          <span>Logo</span>
        </CollegeListBlock>
        <CollegeListBlock>
          <span>Name</span>
        </CollegeListBlock>
        <CollegeListBlock>
          <span>Postcode</span>
        </CollegeListBlock>
        <CollegeListBlock>
          <span>City</span>
        </CollegeListBlock>
        <CollegeListBlock>
          <span>Address</span>
        </CollegeListBlock>
      </CollegeListHeader>
      {colleges.map(c => {
        return (
          <Fragment key={c.name}>
            <CollegeListContent>
              <CollegeListBlock><Logo src={c.logo} alt={c.name}/></CollegeListBlock>
              <CollegeListBlock>{c.name}</CollegeListBlock>
              <CollegeListBlock>{c.postcode}</CollegeListBlock>
              <CollegeListBlock>{c.city}</CollegeListBlock>
              <CollegeListBlock>{c.address}</CollegeListBlock>
            </CollegeListContent>
          </Fragment>
        )
      })}
  </CollegeListContainer>
  );
};

export default CollegeList;
