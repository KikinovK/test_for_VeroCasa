import { Link } from 'react-router-dom';
import './Menu.scss';
import { FC } from 'react';

interface MenuProps {
  modName?: string;
}

const items = [
  {
    name: 'новинки',
    to: '/',
  },
  {
    name: 'чоловіки',
    to: '/',
  },
  {
    name: 'жінки',
    to: '/',
  },
  {
    name: 'аксесуари',
    to: '/',
  },
  {
    name: 'акції',
    to: '/',
  },
]

const Menu: FC<MenuProps> = ({modName =''}) => (
  <div className={`menu${modName ? ' menu--' + modName : ''}`}>
    <ul className="menu__list">
      {items.map(item => (
        <li key={item.name} className="menu__item">
          <Link to={item.to} className="menu__link">{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
