import { createContext, useContext } from 'react';
export const CloseModalContext = createContext(undefined);
export const CloseModalProvider = CloseModalContext.Provider;
export const useCloseModal = (previousAction) => {
    const closeModal = useContext(CloseModalContext);
    if (closeModal === undefined) {
        throw new Error('useCloseModal must be used within a CloseModalProvider');
    }
    return () => {
        if (previousAction)
            previousAction();
        closeModal();
    };
};
