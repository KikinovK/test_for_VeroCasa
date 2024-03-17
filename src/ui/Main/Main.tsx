import { FC } from 'react';
import { IUIComponent } from '../../types/interface';

import './Main.scss';

const Main: FC<IUIComponent> = ({ classNames, children, ...restProps }) => {
  const classes = ['main', ...(classNames || [])].join(' ');
  return (
    <main className={classes} {...restProps}>{children}</main>
  );
};

export default Main;
