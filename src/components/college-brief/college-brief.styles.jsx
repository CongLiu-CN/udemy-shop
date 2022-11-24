import styled from 'styled-components';

export const CollegeBriefContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to bottom, #808080 17%, #e5e4e2 17%);
  border-radius: 20px;
`;

export const CollegeBriefHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  margin-bottom: 5px;
`;

export const SubHeader = styled.div`
  align-self: flex-end;
  width: 70%;
  display: flex;
  font-size: 32px;
`;

export const Title = styled.div`
  color: lightcyan;
  padding: 10px 0;
  border-radius: 4px;
`

export const MajorCards = styled.div`
  margin: 0 auto;
  width: 85%;
  min-height: 50px;
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;
  overflow-x: hidden;
`

export const CollegeBriefText = styled.span`
  margin-left: 0;
  font-size: 22px;
`;

export const Arrow = styled.div`
  font-size: 24px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;