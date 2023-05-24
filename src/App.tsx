import { HashRouter } from 'react-router-dom';
import './App.css';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainRoutes } from './routes';
import { AuthProvider } from './features/auth/stores/AuthProvider';

export function App() {
  return <MainRoutes />;
}

const queryClient = new QueryClient();

export function WrappedApp() {
  return (
    <HashRouter>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          // algorithm: theme.defaultAlgorithm,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryClientProvider>
      </ConfigProvider>
    </HashRouter>
  );
}
