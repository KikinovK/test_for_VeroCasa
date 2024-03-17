import { FC } from 'react';
import Button from '../../ui/Button/Button';
import CartIcon from '../../assets/icon/cart.svg?react';

import './ButtonCart.scss';

interface ButtonCartProps {
  onClick?: () => void;
}

const ButtonCart: FC<ButtonCartProps> = ({onClick = () => {}}) => (
  <Button type="submit"  classNames={['button_cart']} onClick={onClick}>
    <CartIcon />
  </Button>
);

export default ButtonCart;
