import { StyledHamburgerNavLi } from '../../../styles/sharedComponents';
import { useCloseModal } from '../../../context/CloseModalContext';

interface NavButtonProps {
  text: string;
  onClick: () => void;
  iconSize?: number;
  className?: string;
}
const NavButtonHamburger = ({ text, onClick, className }: NavButtonProps) => {
  const onClickHamburger = useCloseModal(onClick);

  return (
    <StyledHamburgerNavLi className={className}>
      <button onClick={onClickHamburger}>{text}</button>
    </StyledHamburgerNavLi>
  );
};

export default NavButtonHamburger;
