import { CardWrapperContainer } from "./card-wrapper.styles";

const CardWrapper = ({ children, ...otherProps }) => {
  return <CardWrapperContainer {...otherProps}>{children}</CardWrapperContainer>
}

export default CardWrapper;