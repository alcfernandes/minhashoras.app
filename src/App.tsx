import { HashRouter } from 'react-router-dom';
import './App.css';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import { MainRoutes } from './routes';
import { AuthProvider } from './features/auth/stores/AuthProvider';

export function App() {
  return <MainRoutes />;
}

export function WrappedApp() {
  return (
    <HashRouter>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          // algorithm: theme.defaultAlgorithm,
        }}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </ConfigProvider>
    </HashRouter>
  );
}
