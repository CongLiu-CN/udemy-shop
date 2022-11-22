import { CardWrapperBase, CardWrapperBlue } from "./card-wrapper.styles";

export const CARD_WRAPPER_CLASSES = {
  base: `base`,
  blue: `blue`,
}

const getCard = (cardType = CARD_WRAPPER_CLASSES.base) => 
  ({
    [CARD_WRAPPER_CLASSES.base]: CardWrapperBase,
    [CARD_WRAPPER_CLASSES.blue]: CardWrapperBlue,
  }[cardType]);


const CardWrapper = ({ children, cardType, ...otherProps }) => {
  const CustomCard = getCard(cardType);
  return <CustomCard {...otherProps}>{children}</CustomCard>
};

export default CardWrapper;