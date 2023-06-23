import { useWindowWidth } from '../../../context/WindowWidthContext';
import { ReactNode } from 'react';
import { AlignedButton } from '../../../styles/sharedComponents';
import NavButtonHamburger from './NavButtonHamburger';

interface NavButtonProps {
  text: string;
  onClick: () => void;
  icon?: ReactNode;
  iconSize?: number;
  className?: string;
}

const NavButton = ({ text, onClick, icon, className }: NavButtonProps) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <li>
      <AlignedButton className={className} onClick={onClick}>
        {icon && icon}
        {text}
      </AlignedButton>
    </li>
  ) : (
    <NavButtonHamburger text={text} onClick={onClick} className={className} />
  );
};

export default NavButton;
