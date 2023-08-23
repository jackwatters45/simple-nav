import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModalTrigger } from 'react-hook-modal-pure';
import NormalDropdownButton from './NormalDropdownButton';
import NormalDropdownContent from './NormalDropdownContent';
const NormalDropdown = ({ children, buttonOptions, className }) => {
    const { isModalVisible, buttonProps, useModalParams } = useModalTrigger();
    return (_jsxs("div", { className: `${className} normal-dropdown`, children: [_jsx(NormalDropdownButton, { buttonProps: buttonProps, ...buttonOptions }), isModalVisible && (_jsx(NormalDropdownContent, { useModalParams: useModalParams, children: children }))] }));
};
export default NormalDropdown;
