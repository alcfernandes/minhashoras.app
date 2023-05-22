import { useState } from 'react';
import { AxiosError } from 'axios';
import {
  minhasHorasApiPublic,
  TOKEN_URL,
} from '@shared/services/minhashoras-api';
import { useTranslation } from 'react-i18next';

interface ILoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (loginData: ILoginData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await minhasHorasApiPublic.post(
        TOKEN_URL,
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
        setError(t('auth:noServerResponse'));
      } else if (apiError?.response?.status === 401) {
        setError(t('auth:invalidCredentials'));
      } else if (apiError?.response?.status === 404) {
        setError(t('auth:unauthorized'));
      } else {
        setError(t('auth:unexpectedError'));
      }

      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
