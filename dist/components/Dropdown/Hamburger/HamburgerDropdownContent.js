import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
const CollapsibleList = styled.div `
  max-height: ${(props) => (props.open ? '500px' : '0')};
  overflow: hidden;
  transition: ${(props) => (props.open ? 'max-height 0.3s ease-in-out' : 'none')};
  z-index: 100;

  button {
    font-size: 1.5rem;
    margin-left: 0rem;
    font-weight: 600;
    cursor: pointer;
  }

  font-size: 2rem;
  font-weight: 700;
`;
const HamburgerDropdownContent = ({ isOpen, children }) => {
    return (_jsx(CollapsibleList, { open: isOpen, className: `hamburger-dropdown-content`, children: children }));
};
export default HamburgerDropdownContent;
