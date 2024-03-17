import { FC } from 'react';
import Button from '../../ui/Button/Button';
import FavoritesIcon from '../../assets/icon/favorites.svg?react';

import './ButtonFavorites.scss';

interface ButtonFavoritesProps {
  onClick?: () => void;
}

const ButtonFavorites: FC<ButtonFavoritesProps> = ({onClick = () => {}}) => (
  <Button type="submit"  classNames={['button_favorites']} onClick={onClick}>
    <FavoritesIcon />
  </Button>
);

export default ButtonFavorites;
