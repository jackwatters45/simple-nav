import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface CollapsibleListProps {
  open: boolean;
}

const CollapsibleList = styled.div<CollapsibleListProps>`
  max-height: ${(props) => (props.open ? '500px' : '0')};
  overflow: hidden;
  transition: ${(props) => (props.open ? 'max-height 0.3s ease-in-out' : 'none')};

  button {
    font-size: 1.5rem;
    margin-left: 0rem;
    font-weight: 600;
    cursor: pointer;
  }

  font-size: 2rem;
  font-weight: 700;
`;

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const HamburgerDropdownContent = ({ isOpen, children }: Props) => {
  return (
    <CollapsibleList open={isOpen} className={`hamburger-dropdown-content`}>
      {children}
    </CollapsibleList>
  );
};

export default HamburgerDropdownContent;
