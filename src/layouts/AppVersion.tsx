interface AppVersionProps {
  menuCollapsed: boolean;
}

function AppVersion({ menuCollapsed }: AppVersionProps) {
  const appVersion = '1.0.0';
  const apiVersion = '1.0.0';
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
