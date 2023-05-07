import { useState } from 'react';
import { AxiosError } from 'axios';
import { minhasHorasApi } from '../../../shared/services/minhashoras-api';

interface ILoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (loginData: ILoginData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await minhasHorasApi.post(
        '/auth/token/',
        JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.access;
      const refreshToken = response?.data?.refresh;

      return { accessToken, refreshToken };
    } catch (_error) {
      const apiError = _error as AxiosError;
      if (!apiError?.response) {
        setError('No server response.');
      } else if (apiError?.response?.status === 401) {
        setError('Invalid credentials');
      } else if (apiError?.response?.status === 404) {
        setError('Unauthorized');
      } else {
        setError('Unexpected error');
      }

      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
