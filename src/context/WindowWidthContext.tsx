import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { ModalProvider } from 'react-hook-modal-pure';

type WindowWidthContextType = boolean | undefined;

const WindowWidthContext = createContext<WindowWidthContextType>(undefined);

interface Props {
  threshold?: number;
  children: ReactNode;
}

export const WindowWidthProvider = ({ threshold = 768, children }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isNormalView = windowWidth > threshold;
  return (
    <ModalProvider>
      <WindowWidthContext.Provider value={isNormalView}>
        {children}
      </WindowWidthContext.Provider>
    </ModalProvider>
  );
};

export const useWindowWidth = () => {
  const context = useContext(WindowWidthContext);

  if (context === undefined) {
    throw new Error('useWindowWidth must be used within a WindowWidthProvider');
  }

  return context;
};
