import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <Suspense fallback="...is loading">
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>,
);
