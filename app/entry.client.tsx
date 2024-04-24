import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ClientStyleContext from './src/ClientStyleContext';
import createEmotionCache from './src/CreateEmotionCache';
import theme from './src/MuiTheme';
import { AppProvider } from '@komune-io/g2';
import { G2ThemeProvider } from './src/G2ThemeProvider';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient()

interface ClientCacheProviderProps {
  children: React.ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = React.useState(createEmotionCache());

  const clientStyleContextValue = React.useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache());
      },
    }),
    [],
  );

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      {/* @ts-ignore */}
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

const hydrate = () => {
  React.startTransition(() => {
    ReactDOM.hydrateRoot(
      document,
      <ClientCacheProvider>
        <ThemeProvider theme={theme}>
          <G2ThemeProvider>
            <AppProvider
              queryClient={queryClient}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <RemixBrowser />
            </AppProvider>
          </G2ThemeProvider>
        </ThemeProvider>
      </ClientCacheProvider>,
    );
  });
};

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}