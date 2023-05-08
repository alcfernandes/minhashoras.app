import { useEffect } from 'react';
import { useAuth, useRefreshToken } from '@features/auth/hooks';
import { minhasHorasApiPrivate } from '@shared/services/minhashoras-api';

export const useMinhasHorasApiPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = minhasHorasApiPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          const newConfig = { ...config };
          newConfig.headers.Authorization = `Bearer ${auth?.accessToken}`;
          return newConfig;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = minhasHorasApiPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return minhasHorasApiPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      minhasHorasApiPrivate.interceptors.request.eject(requestIntercept);
      minhasHorasApiPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return minhasHorasApiPrivate;
};
