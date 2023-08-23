import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect, useContext } from 'react';
import { ModalProvider } from 'react-hook-modal-pure';
const WindowWidthContext = createContext(undefined);
export const WindowWidthProvider = ({ threshold = 768, children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const isNormalView = windowWidth > threshold;
    return (_jsx(ModalProvider, { children: _jsx(WindowWidthContext.Provider, { value: isNormalView, children: children }) }));
};
export const useWindowWidth = () => {
    const context = useContext(WindowWidthContext);
    if (context === undefined) {
        throw new Error('useWindowWidth must be used within a WindowWidthProvider');
    }
    return context;
};
