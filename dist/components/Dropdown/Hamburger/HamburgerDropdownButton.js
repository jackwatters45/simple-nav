import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from 'styled-components';
import { AlignedButton } from '../../../styles/sharedComponents';
import MenuDownIcon from '../../../assets/MenuDownIcon';
import MenuRightIcon from '../../../assets/MenuRightIcon';
const StyledHamburgerDropdownButton = styled(AlignedButton) `
  font-size: 2rem;
  font-weight: 700;
  gap: 0.5rem;
`;
const HamburgerDropdownButton = ({ text, isOpen, toggleIsOpen }) => {
    return (_jsxs(StyledHamburgerDropdownButton, { className: `hamburger-dropdown-button`, onClick: toggleIsOpen, children: [isOpen ? _jsx(MenuDownIcon, {}) : _jsx(MenuRightIcon, {}), text] }));
};
export default HamburgerDropdownButton;
