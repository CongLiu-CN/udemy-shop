import { CardWrapperBase, CardWrapperBlue, CardWrapperLine, CardWrapperSmall } from "./card-wrapper.styles";

export const CARD_WRAPPER_CLASSES = {
  base: `base`,
  blue: `blue`,
  line: `line`,
  small: `small`,
}

const getCard = (cardType = CARD_WRAPPER_CLASSES.base) => 
  ({
    [CARD_WRAPPER_CLASSES.base]: CardWrapperBase,
    [CARD_WRAPPER_CLASSES.blue]: CardWrapperBlue,
    [CARD_WRAPPER_CLASSES.line]: CardWrapperLine,
    [CARD_WRAPPER_CLASSES.small]: CardWrapperSmall,
  }[cardType]);


const CardWrapper = ({ children, cardType, ...otherProps }) => {
  const CustomCard = getCard(cardType);
  return <CustomCard {...otherProps}>{children}</CustomCard>
};

export default CardWrapper;