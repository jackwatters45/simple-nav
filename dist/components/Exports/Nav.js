import { jsx as _jsx } from "react/jsx-runtime";
import { WindowWidthProvider } from '../../context/WindowWidthContext';
import NavType from '../NavType/NavType';
const Nav = ({ children, className }) => {
    return (_jsx(WindowWidthProvider, { children: _jsx(NavType, { className: className, children: children }) }));
};
export default Nav;
