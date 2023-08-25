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
  dataTestid?: string;
}

const NavButton = ({ text, onClick, icon, className, dataTestid }: NavButtonProps) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <li>
      <AlignedButton className={className} onClick={onClick} data-testid={dataTestid}>
        {icon && icon}
        <span>{text}</span>
      </AlignedButton>
    </li>
  ) : (
    <NavButtonHamburger
      text={text}
      onClick={onClick}
      className={className}
      dataTestid={dataTestid}
    />
  );
};

export default NavButton;
