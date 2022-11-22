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
  background: conic-gradient(from -90deg at bottom center, papayawhip, peachpuff);
  width: 100%;
  height: 65vh;
  border-radius: 10px;
  background-color: white;
  padding: 10px 20px;
  overflow-y: scroll;
`