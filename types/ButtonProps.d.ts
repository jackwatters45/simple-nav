import { MutableRefObject, ReactNode } from 'react';

export interface ButtonOptions {
  className?: string;
  icon?: ReactNode;
  text?: string;
  includeArrow?: boolean;
  arrowSize?: string;
}

export interface HamburgerButtonOptions extends ButtonOptions {
  isOpen?: boolean;
  toggleIsOpen?: () => void;
}


export interface ButtonProps {
  onClick: () => void;
  ref: MutableRefObject<HTMLButtonElement>;
}
