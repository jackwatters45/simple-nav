import { styled } from 'styled-components';
import { AlignedButton } from '../../../styles/sharedComponents';
import MenuDownIcon from '../../../assets/MenuDownIcon';
import MenuRightIcon from '../../../assets/MenuRightIcon';
import { ButtonOptions } from '../../../../types/ButtonProps.d';

const StyledHamburgerDropdownButton = styled(AlignedButton)`
  font-size: 2rem;
  font-weight: 700;
  gap: 0.5rem;
`;

interface Props extends ButtonOptions {
  isOpen: boolean;
  toggleIsOpen: () => void;
  dataTestid?: string;
}

const HamburgerDropdownButton = ({ text, isOpen, toggleIsOpen, dataTestid }: Props) => {
  return (
    <StyledHamburgerDropdownButton
      className={`hamburger-dropdown-button`}
      onClick={toggleIsOpen}
      data-testid={dataTestid}
    >
      {isOpen ? <MenuDownIcon /> : <MenuRightIcon />}
      {text}
    </StyledHamburgerDropdownButton>
  );
};

export default HamburgerDropdownButton;
