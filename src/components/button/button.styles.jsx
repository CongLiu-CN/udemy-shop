import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const HoverGrowButton = styled(BaseButton)`
  height: 25px;
  line-height: 25px;
  transition: all 0.3s ease-in-out;

  &:hover {
    height: 50px;
    line-height: 50px;
  }
`;

export const LabelButtonSelected = styled.button`
  min-width: 135px;
  width: auto;
  letter-spacing: 0.5px;
  height: 50px;
  line-height: 50px;
  padding: 0;
  text-transform: uppercase;
  font-size: 15px;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: lightblue;
  color: black;
  cursor: pointer;
  border: none;
  margin-top: 15px;
  transition: all 3s ease-in-out;
  
  &:hover {
    background: conic-gradient(from .5turn at bottom center, lightblue, white);
    color: black;
  }
`;

export const LabelButton = styled(LabelButtonSelected)`
  min-width: 135px;
  box-sizing: border-box;
  border-radius: 10px;
  background: conic-gradient(from .5turn at bottom center, lightblue, white);
  border: 1px solid lightblue;
  color: slategray;
  margin-top: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: lightblue;
    color: black;
    border: none;
    margin-top: 8px;
  }
`;


