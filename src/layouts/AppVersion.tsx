import { useApiVersion, useAppVersion } from '../shared/hooks';

interface AppVersionProps {
  menuCollapsed: boolean;
}

function AppVersion({ menuCollapsed }: AppVersionProps) {
  const { apiVersion } = useApiVersion();
  const { appVersion } = useAppVersion();
  if (menuCollapsed) {
    return (
      <div className="app-version">
        <span>{`(${appVersion})`}</span> <br /> <span>{`(${apiVersion})`}</span>
      </div>
    );
  }
  return (
    <div className="app-version">
      <span>{`(${appVersion}|${apiVersion})`}</span>
    </div>
  );
}

export default AppVersion;
