import { FC } from 'react';

import './SlideHero.scss';
import { BASE_URL } from '../../shared/baseUrl';

interface SlideHeroProps {
  imgSrc: string,
  title: string,
  subTitle: string,
  text: string
}

const SlideHero: FC<SlideHeroProps> = ({
  imgSrc,
  title,
  subTitle,
  text,
}) => (
  <div className="slide_hero" style={{ backgroundImage: `url(${BASE_URL}${imgSrc})` }}>
    <div className="slide_hero__row">
      <div className="slide_hero__col">
        <h2 className="slide_hero__title" dangerouslySetInnerHTML={{ __html: title }}></h2>
      </div>
      <div className="slide_hero__col">
        <div className="slide_hero__col_wr">
          <h3 className="slide_hero__sub_title">{subTitle}</h3>
          <p className="slide_hero__text">{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export default SlideHero;
