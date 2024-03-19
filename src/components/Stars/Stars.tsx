import { FC } from 'react';

import StarFullIcon from '../../assets/icon/star_full.svg?react';
import StarEmptyIcon from '../../assets/icon/star_empty.svg?react';

import './Stars.scss';

interface StarsProps {
  num: number;
  total?: number;
}

const Stars: FC<StarsProps> = ({num, total = 5}) => (
  <ul className="star__list">
    {Array.from({ length: num }, (_, index) => (
      <li className="star__item">
        <StarFullIcon key={index} />
      </li>
    ))}
    {Array.from({ length: total - num }, (_, index) => (
      <li className="star__item">
        <StarEmptyIcon key={index} />
      </li>
    ))}
  </ul>
)

export default Stars;
