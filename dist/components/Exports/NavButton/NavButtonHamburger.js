import { jsx as _jsx } from "react/jsx-runtime";
import { StyledHamburgerNavLi } from '../../../styles/sharedComponents';
import { useCloseModal } from '../../../context/CloseModalContext';
const NavButtonHamburger = ({ text, onClick, className }) => {
    const onClickHamburger = useCloseModal(onClick);
    return (_jsx(StyledHamburgerNavLi, { className: className, children: _jsx("button", { onClick: onClickHamburger, children: text }) }));
};
export default NavButtonHamburger;
