import styled from 'styled-components';
import Button from '../../components/button/button.component';
import CardWrapper from '../../components/card-wapper/card-wrapper.component'

export const ProvinceSelectedContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
`;

export const MapContainer = styled(CardWrapper)`
  width: 49%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 50%;
  background-color: green;
  padding: 20px;
`;

export const ToggelMap = styled(Button)`
  position: absolute;
  top: 120px;
  right: 52vw;
  z-index: 5;
`