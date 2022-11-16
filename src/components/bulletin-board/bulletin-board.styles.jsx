import styled from 'styled-components';

export const BulletinBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 800px;
`;

export const BulletinHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 45px;
`;

export const BulletinText = styled.span`
  margin-top: 30px;
  margin-left: 0;
  font-size: 36px;
`;