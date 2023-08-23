import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
const CollapsibleList = styled.div `
  max-height: ${(props) => (props.open ? '500px' : '0')};
  overflow: hidden;
  transition: ${(props) => (props.open ? 'max-height 0.3s ease-in-out' : 'none')};
  ul {
    li {
      font-size: 1.5rem;
      margin-left: 0rem;
      font-weight: 600;
      cursor: pointer;
    }
  }

  font-size: 2rem;
  font-weight: 700;
`;
const HamburgerDropdownContent = ({ isOpen, className, children }) => {
    return (_jsx(CollapsibleList, { open: isOpen, className: `${className} hamburger-dropdown-content`, children: _jsx("ul", { children: children }) }));
};
export default HamburgerDropdownContent;
