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

interface Props {
  isOpen: boolean;
  toggleIsOpen: () => void;
  className?: string;
  text?: string;
  buttonOptions?: ButtonOptions;
}

const HamburgerDropdownButton = ({
  className,
  text,
  isOpen,
  toggleIsOpen,
  buttonOptions,
}: Props) => {
  return (
    <StyledHamburgerDropdownButton
      className={className}
      onClick={toggleIsOpen}
      {...buttonOptions}
    >
      {isOpen ? <MenuDownIcon /> : <MenuRightIcon />}
      {text}
    </StyledHamburgerDropdownButton>
  );
};

export default HamburgerDropdownButton;
