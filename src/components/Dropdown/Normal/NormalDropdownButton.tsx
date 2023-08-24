import { ButtonOptions, ButtonProps } from '../../../../types/ButtonProps.d';
import { AlignedButton } from '../../../styles/sharedComponents';
import MenuDownIcon from '../../../assets/MenuDownIcon';

interface Props extends ButtonOptions {
  buttonProps: ButtonProps;
}

const NormalDropdownButton = ({
  buttonProps,
  icon,
  text,
  includeText = false,
  includeArrow = true,
  arrowSize = '.5rem',
}: Props) => {
  return (
    <AlignedButton {...buttonProps} className={`normal-dropdown-button`}>
      {icon && icon}
      {includeText && <span>{text}</span>}
      {includeArrow && <MenuDownIcon size={arrowSize} />}
    </AlignedButton>
  );
};

export default NormalDropdownButton;
