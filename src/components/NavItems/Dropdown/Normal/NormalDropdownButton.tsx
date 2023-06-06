import { ButtonProps } from '../../../../types/SharedProps';
import { AlignedButton } from '../../../../styles/sharedComponents';
import { ReactNode } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  buttonProps: ButtonProps;
  className?: string;

  icon?: ReactNode;
  text?: string;
  includeArrow?: boolean;

  arrowSize?: number;
}

const NavDropdownButton = ({
  buttonProps,
  className,
  icon,
  text,
  includeArrow = true,
  arrowSize = 0.5,
}: Props) => {
  return (
    <AlignedButton {...buttonProps} className={className}>
      {icon && icon}
      {text && <span>{text}</span>}
      {includeArrow && <ExpandMoreIcon sx={{ width: arrowSize * 24 }} />}
    </AlignedButton>
  );
};

export default NavDropdownButton;
