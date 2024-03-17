import { ButtonHTMLAttributes, FC } from 'react';

import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string[];
}

const Button: FC<ButtonProps> = ({ classNames, children, ...restProps }) => {
  const classes = ['btn', ...(classNames || [])].join(' ');
  return (
    <button type="button" className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
