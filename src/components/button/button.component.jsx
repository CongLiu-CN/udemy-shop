import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  HoverGrowButton,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
  grow: 'grow'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.grow]: HoverGrowButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
