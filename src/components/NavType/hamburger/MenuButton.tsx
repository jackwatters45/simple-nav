import { AlignedButton } from '../../../styles/sharedComponents';
import { ButtonProps } from '../../../../types/SharedProps.d';
import MenuIcon from '../../../assets/MenuIcon';

interface Props {
  buttonProps?: ButtonProps;
  className?: string;
}

const MenuButton = ({ buttonProps, className }: Props) => {
  return (
    <AlignedButton {...buttonProps} className={className}>
      <MenuIcon />
    </AlignedButton>
  );
};

export default MenuButton;
