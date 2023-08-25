import { ButtonOptions, ButtonProps } from '../../../../types/ButtonProps.d';
import { AlignedButton } from '../../../styles/sharedComponents';
import MenuDownIcon from '../../../assets/MenuDownIcon';

interface Props extends ButtonOptions {
  buttonProps: ButtonProps;
  dataTestid?: string;
}

const NormalDropdownButton = ({
  buttonProps,
  icon,
  text,
  includeText = false,
  includeArrow = true,
  arrowSize = '.5rem',
  dataTestid,
}: Props) => {
  return (
    <AlignedButton
      {...buttonProps}
      className={`normal-dropdown-button`}
      data-testid={dataTestid}
    >
      {icon && icon}
      {includeText && <span>{text}</span>}
      {includeArrow && <MenuDownIcon size={arrowSize} />}
    </AlignedButton>
  );
};

export default NormalDropdownButton;
