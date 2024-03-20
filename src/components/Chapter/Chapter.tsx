import { FC } from 'react';
import { Link, To } from 'react-router-dom';

import './Chapter.scss';

interface ChapterProps {
  title: string;
  items: {
    name: string;
    href?: string;
    to?: To;
  }[];
}

const Chapter: FC<ChapterProps> = ({
  title,
  items,
}) => (
  <div className="chapter">
    <h3 className="chapter__title">{title}</h3>
    <ul className="chapter__list">{items.map(item => (
      <li key={item.name} className="chapter__item">
        {item.href ? (
          <a href={item.href} className='chapter__link'>{item.name}</a>
        ): item.to ? (
            <Link to={item.to} className='chapter__link'>{item.name}</Link>
          ):(
            <span className="chapter__text">{item.name}</span>
          )
        }
      </li>))}
    </ul>
  </div>
);

export default Chapter;
