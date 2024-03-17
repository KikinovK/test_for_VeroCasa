import NavHeader from '../NavHeader/NavHeader';
import TopRow from '../TopRow/TopRow';
import './Header.scss';

const Header = () => (
  <header className="header">
    <TopRow />
    <NavHeader />
  </header>
);

export default Header;
