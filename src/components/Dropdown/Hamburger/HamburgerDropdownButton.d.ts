import { IStyledComponent } from 'styled-components';
import { AlignedButton } from '../../../styles/sharedComponents';

declare const MenuDownIcon: any;
declare const MenuRightIcon: any;

interface Props {
  isOpen: boolean;
  toggleIsOpen: () => void;
  className?: string;
  text?: string;
  iconSize?: number;
}

declare const HamburgerDropdownButton: React.FC<Props>;

export default HamburgerDropdownButton;
