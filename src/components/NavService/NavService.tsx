import Container from '../../ui/Container/Container';
import Chapter from '../Chapter/Chapter';

import { items } from './const';

import './NavService.scss';

const NavService = () => (
  <Container>
    <nav className="nav_service">
      <ul className="nav_service__list">
        { items.map(item => (
            <li className="nav_service__item">
              <Chapter title={item.title} items={item.items}/>
            </li>
          ))
        }
      </ul>
    </nav>
  </Container>
);

export default NavService;
