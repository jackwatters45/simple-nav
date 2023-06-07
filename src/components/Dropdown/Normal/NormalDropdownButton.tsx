import { ButtonOptions, ButtonProps } from '../../../../types/ButtonProps.d';
import { AlignedButton } from '../../../styles/sharedComponents';
import MenuDownIcon from '../../../assets/MenuDownIcon';

interface Props extends ButtonOptions {
  buttonProps: ButtonProps;
}

const NormalDropdownButton = ({
  buttonProps,
  className,
  icon,
  text,
  includeText = true,
  includeArrow = true,
  arrowSize = '.5rem',
}: Props) => {
  return (
    <AlignedButton {...buttonProps} className={className}>
      {icon && icon}
      {includeText && <span>{text}</span>}
      {includeArrow && <MenuDownIcon size={arrowSize} />}
    </AlignedButton>
  );
};

export default NormalDropdownButton;
