import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Main from '../ui/Main/Main';
import Footer from '../components/Footer/Footer';

const Layout: FC = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

export default Layout;
