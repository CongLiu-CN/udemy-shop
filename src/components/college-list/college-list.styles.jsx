import styled from 'styled-components';

export const CollegeListContainer = styled.div`
  width: 100%;
  height: 95%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    width: 12px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
`;

export const CollegeListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CollegeListBlock = styled.div`
  text-transform: capitalize;
  width: 16%;

  &:first-child {
    width: 5%;
  }

  &:nth-child(2) {
    width: 17%;
  }

  &:last-child {
    width: 45%;
  }
`;

export const CollegeListContent = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const Logo = styled.img`
  height: 20px;
  width: 20px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
