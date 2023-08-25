import { StyledHamburgerNavDiv } from '../../../styles/sharedComponents';
import { useCloseModal } from '../../../context/CloseModalContext';

interface NavButtonProps {
  text: string;
  onClick: () => void;
  iconSize?: number;
  className?: string;
  dataTestid?: string;
}
const NavButtonHamburger = ({ text, onClick, className, dataTestid }: NavButtonProps) => {
  const onClickHamburger = useCloseModal(onClick);

  return (
    <StyledHamburgerNavDiv className={className}>
      <button onClick={onClickHamburger} data-testid={dataTestid}>
        {text}
      </button>
    </StyledHamburgerNavDiv>
  );
};

export default NavButtonHamburger;
