import { AlignedButton } from '../../../styles/sharedComponents';
import { ButtonProps } from '../../../../types/ButtonProps.d';
import MenuIcon from '../../../assets/MenuIcon';

interface Props {
  buttonProps?: ButtonProps;
}

const MenuButton = ({ buttonProps }: Props) => {
  return (
    <AlignedButton {...buttonProps} className="hamburger-menu-button">
      <MenuIcon />
    </AlignedButton>
  );
};

export default MenuButton;
