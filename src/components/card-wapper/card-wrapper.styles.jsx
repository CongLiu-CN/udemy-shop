import styled from 'styled-components';

export const CardWrapperBase = styled.div`
  border: 1px solid black;
  border-radius: 20px;
`;

export const CardWrapperBlue = styled(CardWrapperBase)`
  background-color: blue;
  width: 100%;
  height: 100%;
  border-top-left-radius: 1px;
  border-top-right-radius: 5px;
  border: none;
  background-color: lightblue;
  padding: 10px 20px;
`

export const CardWrapperLine = styled(CardWrapperBase)`
  background: white;
  width: 100%;
  height: 65vh;
  background: transparent;
  border-radius: 0px;
  border: none;
  overflow-y: auto;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
`

export const CardWrapperSmall = styled(CardWrapperBase)`
  background: conic-gradient(at top right, black, #ffebcd);
  padding: 10px;
  border-radius: 2px;
  flex-grow: 4;
  border: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 1px solid gray;
    color: #696969;
  }
`