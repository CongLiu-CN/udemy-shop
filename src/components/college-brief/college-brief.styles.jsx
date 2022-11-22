import styled from 'styled-components';

export const CollegeBriefContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to bottom, #778899 17%, white 17%);
  border-radius: 20px;
`;

export const CollegeBriefHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  color: lightcyan;
  padding: 10px;
  border-radius: 4px;
`

export const MajorCards = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`

export const CollegeBriefText = styled.span`
  margin-left: 0;
  font-size: 22px;
`;