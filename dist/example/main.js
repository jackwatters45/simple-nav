import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.example';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(Router, { children: _jsx(App, {}) }) }));
