import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <Link to="/" className="logo__link">
      <span className="logo__text">IGNAT</span>
    </Link>
  </div>
);

export default Logo;
