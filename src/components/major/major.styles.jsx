import styled from 'styled-components';

export const CollegeBriefContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to bottom, #808080 10%, #e5e4e2 10%);
  border-radius: 20px;
`;

export const CollegeBriefHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  margin-bottom: 5px;
  padding: 5px;
`;

export const TagContainer = styled.div`
  display: flex;
  font-size: 32px;
  flex-direction: row;
`;

export const Tag = styled.div`
  font-size: 28px;
  padding: 4px 20px;
  background: white;
  border: 1px solid black;
`;

export const TagBtn = styled(Tag)`
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  color: black;
`

export const MajorCards = styled.div`
  margin: 20px auto;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
`

export const CollegeBriefText = styled.span`
  margin-left: 10px;
  padding: 20px 40px;
  font-size: 22px;
`;

export const MajorContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const VerticalNavContainer = styled.div`
  width: 200px;
  font-size: 32px;
`;

export const LikeBtn = styled.div`
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;