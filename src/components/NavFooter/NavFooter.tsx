import Container from '../../ui/Container/Container';
import Menu from '../Menu/Menu';

import './NavFooter.scss';

const NavFooter = () => (
  <nav className="nav_footer">
    <Container>
      <ul className="nav_footer__list">
        <li className="nav_footer__item">
          <Menu modName="footer"/>
        </li>
        <li className="nav_footer__item">
          <span className="nav_footer__text">© 2022 — 2023 IGNAT. Усі права захищені.</span>
        </li>
      </ul>
    </Container>
  </nav>
);

export default NavFooter;
