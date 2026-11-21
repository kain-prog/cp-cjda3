import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthAppShell, AuthProvider } from '@web-condopack/auth';
import { AdminContactsDashboard } from '@web-condopack/contact';
import { GatehouseOperationsPanel } from '@web-condopack/home';
import { ThemeProvider } from '@web-condopack/ui';
import { appEnv } from '@configs/cjda3/env';
import { appSettings } from '@configs/cjda3/settings';
import { appTheme } from '@configs/cjda3/theme';

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (appEnv.swEnabled) {
      navigator.serviceWorker.register('/sw.js').catch(() => undefined);
    } else {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          for (const registration of registrations) {
            void registration.unregister();
          }
        })
        .catch(() => undefined);
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <AuthProvider env={appEnv} settings={appSettings}>
        <AuthAppShell
          adminContent={<AdminContactsDashboard />}
          gatehouseContent={<GatehouseOperationsPanel />}
        />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
