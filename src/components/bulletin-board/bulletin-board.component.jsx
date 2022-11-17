import {BulletinBoardContainer, BulletinHeader, BulletinText} from './bulletin-board.styles';

const BulletinBoard = () => {
  return (
   <BulletinBoardContainer>
    <BulletinHeader>
      Hi!
    </BulletinHeader>
    <BulletinText>
      Welcome to RunCA.
    </BulletinText>
    <BulletinText>
      Please click any province to get started.
    </BulletinText>
   </BulletinBoardContainer>
  )
};

export default BulletinBoard;