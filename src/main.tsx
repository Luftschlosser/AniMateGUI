import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProviders } from './contexts/ContextProviders.tsx';
import App from './App.tsx';
import './i18n';
import './index.css';
import Loading from './components/Loading.tsx';

createRoot(document.getElementById('root')!).render(
  <ContextProviders>
    <Suspense fallback={<Loading />}>
      <StrictMode>
        <App />
      </StrictMode>
    </Suspense>
  </ContextProviders>,
);
