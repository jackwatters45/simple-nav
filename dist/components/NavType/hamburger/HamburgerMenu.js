import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModalTrigger } from 'react-hook-modal-pure';
import HamburgerModal from './HamburgerModal';
import MenuButton from './MenuButton';
const HamburgerMenu = ({ children, className }) => {
    const { isModalVisible, buttonProps, useModalParams } = useModalTrigger();
    return (_jsxs("div", { className: `${className} hamburger-menu`, children: [_jsx(MenuButton, { buttonProps: buttonProps }), isModalVisible && (_jsx(HamburgerModal, { useModalParams: useModalParams, children: children }))] }));
};
export default HamburgerMenu;
