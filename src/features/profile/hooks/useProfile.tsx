import { useEffect, useState } from 'react';
import { useMinhasHorasApiPrivate } from '@shared/hooks';

interface UserProfile {
  email: string;
  name: string;
}

export const useProfile = () => {
  const minhasHorasApiPrivate = useMinhasHorasApiPrivate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const url = '/accounts/users/me';

  useEffect(() => {
    setLoading(true);
    minhasHorasApiPrivate
      .get<UserProfile>(url)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    minhasHorasApiPrivate
      .get<UserProfile>(url)
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
