import { useEffect } from 'react';
import { useAuth, useRefreshToken } from '@features/auth/hooks';
import { minhasHorasApiPrivate } from '@shared/services/minhashoras-api';
import { useLocation, useNavigate } from 'react-router-dom';

export const useMinhasHorasApiPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const navigation = useNavigate();
  const location = useLocation();

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
          try {
            const newAccessToken = await refresh();
            if (newAccessToken) {
              prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return await minhasHorasApiPrivate(prevRequest);
            }
            navigation('/auth/login', { state: { from: location } });
          } catch (err) {
            navigation('/auth/login', { state: { from: location } });
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      minhasHorasApiPrivate.interceptors.request.eject(requestIntercept);
      minhasHorasApiPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh, location, navigation]);

  return minhasHorasApiPrivate;
};
