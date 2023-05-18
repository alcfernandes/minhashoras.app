import { useEffect, useState } from 'react';
import { useMinhasHorasApiPrivate } from '@shared/hooks';
import { USERS_ME_URL } from '@shared/services/minhashoras-api';

interface UserProfile {
  email: string;
  name: string;
}

export const useProfile = () => {
  const minhasHorasApiPrivate = useMinhasHorasApiPrivate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);
    minhasHorasApiPrivate
      .get<UserProfile>(USERS_ME_URL)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [minhasHorasApiPrivate]);

  const refetch = () => {
    setLoading(true);
    minhasHorasApiPrivate
      .get<UserProfile>(USERS_ME_URL)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { profile, loading, error, refetch };
};
