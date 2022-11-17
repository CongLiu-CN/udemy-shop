import { Fragment } from 'react';
import {
  TableBoardContainer,
  TableBoardHeader,
  TableBoardBlock,
  TableBoardContent,
  Title,
  Logo
} from './table-board.styles';

const TableBoard = ({data}) => {
console.log(data)
const {
  provinceSelected, colleges
} = data
  return (
    <TableBoardContainer>
      <Title>{provinceSelected.toUpperCase()}</Title>
      <TableBoardHeader>
        <TableBoardBlock>
          <span>Name</span>
        </TableBoardBlock>
        <TableBoardBlock>
          <span>Address</span>
        </TableBoardBlock>
        <TableBoardBlock>
          <span>City</span>
        </TableBoardBlock>
        <TableBoardBlock>
          <span>Postcode</span>
        </TableBoardBlock>
        <TableBoardBlock>
          <span>Logo</span>
        </TableBoardBlock>
      </TableBoardHeader>
      {colleges.map(c => {
        return (
          <Fragment key={c.name}>
            <TableBoardContent>
              <TableBoardBlock>{c.name}</TableBoardBlock>
              <TableBoardBlock>{c.address}</TableBoardBlock>
              <TableBoardBlock>{c.city}</TableBoardBlock>
              <TableBoardBlock>{c.postcode}</TableBoardBlock>
              <TableBoardBlock><Logo src={c.logo} alt={c.name}/></TableBoardBlock>
            </TableBoardContent>
          </Fragment>
        )
      })}
  </TableBoardContainer>
  );
};

export default TableBoard;
