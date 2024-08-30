import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProviders } from './contexts/ContextProviders.tsx';
import App from './App.tsx';
import './i18n';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Suspense fallback="...is loading">
    <StrictMode>
      <ContextProviders>
        <App />
      </ContextProviders>
    </StrictMode>
  </Suspense>,
);
