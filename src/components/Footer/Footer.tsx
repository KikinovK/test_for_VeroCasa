import NavFooter from '../NavFooter/NavFooter';
import NavService from '../NavService/NavService';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <NavService />
    <NavFooter />
  </footer>
);

export default Footer;
