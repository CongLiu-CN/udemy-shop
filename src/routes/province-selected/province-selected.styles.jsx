import styled from 'styled-components';
import CardWrapper from '../../components/card-wapper/card-wrapper.component'

export const ProvinceSelectedContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
`;

export const MapContainer = styled(CardWrapper)`
  width: 49.5%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardContainer = styled(CardWrapper)`
  width: 49.5%;
`;

export const ToggelMap = styled.div`
  position: absolute;
  top: 120px;
  right: 52vw;
  z-index: 5;
`