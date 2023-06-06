import { MutableRefObject, ReactNode } from 'react';

export interface ButtonOptions {
  isOpen?: boolean;
  toggleIsOpen?: () => void;
  className?: string;

  icon?: ReactNode;
  text?: string;

  includeArrow?: boolean;
  arrowSize?: number;
}

export interface ButtonProps {
  onClick: () => void;
  ref: MutableRefObject<HTMLButtonElement>;
}
