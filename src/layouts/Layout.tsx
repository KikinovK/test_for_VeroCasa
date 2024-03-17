import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Main from '../ui/Main/Main';

const Layout: FC = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </>
);

export default Layout;
