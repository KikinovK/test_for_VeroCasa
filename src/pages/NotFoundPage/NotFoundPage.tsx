import { Link } from 'react-router-dom';


import { HOME } from '../../shared/router-path/routerPath';
import Section from '../../ui/Section/Section';

const NotFoundPage = () => (
  <Section>
    <h2>Not Found Page</h2>
    <Link to={HOME}>Return to Home</Link>
  </Section>
);

export default NotFoundPage;
