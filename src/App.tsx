import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';
import NotImplemented from './pages/NotImplemented';
import NotFound from './pages/NotFound';
import Track from './pages/Track';
import Dashboard from './pages/Dashboard';

export function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>MinhasHoras.app</h1>

      <Routes>
        <Route path="/" element={<Navigate to="/track" />} />
        <Route index path="/track" element={<Track />} />
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route path="/not-implemented" element={<NotImplemented />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <p className="read-the-docs">
        Here, coming soon, the MyHours application.
      </p>
    </>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
