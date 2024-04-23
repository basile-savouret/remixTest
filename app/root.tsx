import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AppProvider, ThemeContextProvider } from "@komune-io/g2";
import { QueryClient } from "@tanstack/react-query";
import { theme } from "./Themes";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const queryClient = new QueryClient()

export default function App() {
  return (
    <ThemeContextProvider theme={theme} >
      <AppProvider
        queryClient={queryClient}
      >
        <Outlet />
      </AppProvider>
      </ThemeContextProvider>
  );
}
