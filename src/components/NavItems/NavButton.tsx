import { useWindowWidth } from '../../context/WindowWidthContext';
import { ReactNode } from 'react';
import { AlignedButton, StyledHamburgerNavLi } from '../../styles/sharedComponents';

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
    <StyledHamburgerNavLi className={className}>
      <button onClick={onClick}>{text}</button>
    </StyledHamburgerNavLi>
  );
};

export default NavButton;
