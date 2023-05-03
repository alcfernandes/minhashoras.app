import { useEffect, useState } from 'react';
import packageJson from '../../../package.json';

export const useAppVersion = () => {
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    const { version } = packageJson;
    setAppVersion(version);
  }, []);

  return { appVersion };
};
