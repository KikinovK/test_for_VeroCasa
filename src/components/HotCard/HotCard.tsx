import { FC } from 'react';

import Button from '../../ui/Button/Button';

import FavoritesIcon from '../../assets/icon/favorites.svg?react';

import './HotCard.scss';

interface HotCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  type: string;
  info: string;
  price: string;
}

const HotCard: FC<HotCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  type,
  info,
  price,
}) => {
  return (
    <div className="hot_card">
      <div className="hot_card__pic">
        <img src={imgSrc} alt={imgAlt} className="hot_card__img" />
      </div>
      <h3 className="hot_card__title">{title}</h3>
      <div className="hot_card__type">{type}</div>
      <div className="hot_card__info">{info}</div>
      <div className="hot_card__price">{`${price} грн.`}</div>
      <Button classNames={['hot_card__btn']}>
        <FavoritesIcon />
      </Button>
    </div>
  );
};

export default HotCard;
