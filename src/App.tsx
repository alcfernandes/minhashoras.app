import { HashRouter } from 'react-router-dom';
import './App.css';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import { MainRoutes } from './routes';

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
        <App />
      </ConfigProvider>
    </HashRouter>
  );
}
