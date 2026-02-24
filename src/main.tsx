import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { MedplumClient } from '@medplum/core';
import { MedplumProvider } from '@medplum/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const medplum = new MedplumClient({
  baseUrl: import.meta.env.VITE_MEDPLUM_BASE_URL || 'http://localhost:8103',
  clientId: import.meta.env.VITE_MEDPLUM_CLIENT_ID || undefined,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MedplumProvider medplum={medplum}>
        <MantineProvider>
          <App />
        </MantineProvider>
      </MedplumProvider>
    </BrowserRouter>
  </StrictMode>,
);
