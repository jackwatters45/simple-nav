import { styled } from 'styled-components';
import { AlignedButton } from '../../../../styles/sharedComponents';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const StyledHamburgerDropdownButton = styled(AlignedButton)`
  font-size: 2rem;
  font-weight: 700;
  gap: 0.5rem;
`;

interface Props {
  isOpen: boolean;
  toggleIsOpen: () => void;
  className?: string;

  text?: string;
  iconSize?: number;
}

const HamburgerDropdownButton = ({ className, text, isOpen, toggleIsOpen }: Props) => {
  return (
    <StyledHamburgerDropdownButton className={className} onClick={toggleIsOpen}>
      {isOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
      {text}
    </StyledHamburgerDropdownButton>
  );
};

export default HamburgerDropdownButton;
