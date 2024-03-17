import { FC } from 'react';
import { IUIComponent } from '../../types/interface';

import './Container.scss';

const Container: FC<IUIComponent> = ({ classNames, children, ...restProps }) => {
  const classes = ['container', ...(classNames || [])].join(' ');
  return (
    <div className={classes} {...restProps}>{children}</div>
  );
};

export default Container;
