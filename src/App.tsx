import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { MantineProvider } from '@mantine/core';
import NotImplemented from './features/NotImplemented';
import NotFound from './features/NotFound';
import Track from './features/Track';
import Dashboard from './features/Dashboard';
import MainLayout from './layouts/MainLayout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/track" />} />
        <Route path="/track" element={<Track />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/not-implemented" element={<NotImplemented />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <MantineProvider
        theme={{ colorScheme: 'dark' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <App />
      </MantineProvider>
    </HashRouter>
  );
}
