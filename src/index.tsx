import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './app/App';

const container = document.getElementById('app-root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
