import { Link } from 'react-router-dom';
import Container from '../../ui/Container/Container';

import './TopRow.scss';

const items = [
  {
    name: '098 900 09 09',
    href: 'tel:+3800989000909',
    mod: '',
  },
  {
    name: 'Допомога',
    to: '/',
    mod: '',
  },
  {
    name: 'Увійти / Зареєструватися',
    to: '/',
    mod: 'pos_mod',
  },
]

const TopRow = () => {
  return (
    <div className="top_row">
      <Container>
        <ul className="top_row__list">
          {items.map(item => (
            <li key={item.name} className={`top_row__item ${item.mod ? 'top_row__item--' + item.mod : ''}`}>
              {item.href ? (
                <a href={item.href} className='top_row__link'>{item.name}</a>
              ) : (
                <Link to={item.to || '/'} className='top_row__link'>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default TopRow;
