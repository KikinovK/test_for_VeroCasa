import { FC } from 'react';

import Stars from '../Stars/Stars';

import './ReviewCard.scss'
import { BASE_URL } from '../../shared/baseUrl';

interface ReviewCardProps {
  name: string;
  avatarSrc: string;
  info: string;
  stars: number;
}

const ReviewCard: FC<ReviewCardProps> = ({
  name,
  avatarSrc,
  info,
  stars,
}) => (
  <div className="review_card">
    <div className="review_card__header">
      <div className="review_card__avatar">
        <img src={`${BASE_URL}${avatarSrc}`} alt={name} className="review_card__img" />
      </div>
      <div className="review_card__caption">
        <Stars num={stars} />
        <div className="review_card__name">{name}</div>
      </div>
    </div>
    <p className="review_card__info">{info}</p>
  </div>
)

export default ReviewCard;
