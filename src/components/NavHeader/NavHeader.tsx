import Container from '../../ui/Container/Container';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import ButtonCart from '../ButtonCart/ButtonCart';

import './NavHeader.scss';
import ButtonFavorites from '../ButtonFavorites/ButtonFavorites';

const NavHeader = () => (
  <div className='nav_header'>
    <Container>
      <ul className="nav_header__list">
        <li className="nav_header__item">
          <Logo />
        </li>
        <li className="nav_header__item nav_header__item--pos_mod">
          <Menu />
        </li>
        <li className="nav_header__item">
          <Search />
        </li>
        <li className="nav_header__item">
          <ButtonFavorites />
        </li>
        <li className="nav_header__item">
          <ButtonCart />
        </li>
      </ul>
    </Container>
  </div>
);

export default NavHeader;
