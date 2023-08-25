"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCloseModal = exports.CloseModalProvider = exports.CloseModalContext = void 0;
const react_1 = require("react");
exports.CloseModalContext = (0, react_1.createContext)(undefined);
exports.CloseModalProvider = exports.CloseModalContext.Provider;
const useCloseModal = (previousAction) => {
    const closeModal = (0, react_1.useContext)(exports.CloseModalContext);
    if (closeModal === undefined) {
        throw new Error('useCloseModal must be used within a CloseModalProvider');
    }
    return () => {
        if (previousAction)
            previousAction();
        closeModal();
    };
};
exports.useCloseModal = useCloseModal;
