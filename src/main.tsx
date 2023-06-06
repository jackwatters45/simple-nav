import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { WindowWidthProvider } from './context/WindowWidthContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router>
      <WindowWidthProvider>
        <App />
      </WindowWidthProvider>
    </Router>
  </StrictMode>,
);
