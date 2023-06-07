import { ButtonProps } from '../../../../types/ButtonProps.d';
import { AlignedButton } from '../../../styles/sharedComponents';
import { ReactNode } from 'react';
import MenuDownIcon from '../../../assets/MenuDownIcon';

interface Props {
  buttonProps: ButtonProps;
  className?: string;
  icon?: ReactNode;
  text?: string;
  includeArrow?: boolean;
  arrowSize?: string;
}

const NormalDropdownButton = ({
  buttonProps,
  className,
  icon,
  text,
  includeArrow = true,
  arrowSize = '.5rem',
}: Props) => {
  return (
    <AlignedButton {...buttonProps} className={className}>
      {icon && icon}
      {text && <span>{text}</span>}
      {includeArrow && <MenuDownIcon size={arrowSize} />}
    </AlignedButton>
  );
};

export default NormalDropdownButton;
