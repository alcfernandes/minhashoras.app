import { minhasHorasApiPublic } from '@shared/services/minhashoras-api';
import { useAuth } from './useAuth';

export const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  return async () => {
    const response = await minhasHorasApiPublic.post('/auth/token/refresh/', {
      refresh: auth.refreshToken,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.access);
      return { ...prev, accessToken: response.data.access };
    });
    return response.data.access;
  };
};
