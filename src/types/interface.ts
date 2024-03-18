import { HTMLAttributes } from 'react';

export interface IUIComponent extends HTMLAttributes<HTMLElement> {
  classNames?: string[];
}

export interface SliderButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
