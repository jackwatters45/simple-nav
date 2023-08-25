"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowWidth = exports.WindowWidthProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hook_modal_pure_1 = require("react-hook-modal-pure");
const WindowWidthContext = (0, react_1.createContext)(undefined);
const WindowWidthProvider = ({ threshold = 768, children }) => {
    const [windowWidth, setWindowWidth] = (0, react_1.useState)(window.innerWidth);
    (0, react_1.useEffect)(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const isNormalView = windowWidth > threshold;
    return ((0, jsx_runtime_1.jsx)(react_hook_modal_pure_1.ModalProvider, { children: (0, jsx_runtime_1.jsx)(WindowWidthContext.Provider, { value: isNormalView, children: children }) }));
};
exports.WindowWidthProvider = WindowWidthProvider;
const useWindowWidth = () => {
    const context = (0, react_1.useContext)(WindowWidthContext);
    if (context === undefined) {
        throw new Error('useWindowWidth must be used within a WindowWidthProvider');
    }
    return context;
};
exports.useWindowWidth = useWindowWidth;
