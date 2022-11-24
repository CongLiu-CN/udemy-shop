import styled from 'styled-components';

export const CardWrapperBase = styled.div`
  border: 1px solid #808080;
  border-radius: 20px;
`;

export const CardWrapperBlue = styled(CardWrapperBase)`
  width: 100%;
  height: 100%;
  border-top-left-radius: 1px;
  border-top-right-radius: 5px;
  border: none;
  background-color: transparent;
  padding: 10px;
`

export const CardWrapperLine = styled(CardWrapperBase)`
  width: 100%;
  height: 65vh;
  background: transparent;
  border-radius: 0px;
  border: none;
  overflow-y: auto;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  column-gap: 10px;
  row-gap: 10px;
`

export const CardWrapperSmall = styled(CardWrapperBase)`
  background: conic-gradient(at top right, black, #ffebcd);
  width: 200px;
  height: 200px;
  padding: 10px;
  border-radius: 2px;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`