import {
  minhasHorasApiPublic,
  TOKEN_REFRESH_URL,
} from '@shared/services/minhashoras-api';
import { useAuth } from './useAuth';

export const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  return async () => {
    const response = await minhasHorasApiPublic.post(TOKEN_REFRESH_URL, {
      refresh: auth.refreshToken,
    });
    setAuth((prev) => {
      return { ...prev, accessToken: response.data.access };
    });
    return response.data.access;
  };
};
