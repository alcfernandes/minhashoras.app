import { useEffect, useState } from 'react';
import { minhasHorasApiPublic, VERSION_URL } from '../services/minhashoras-api';

export const useApiVersion = () => {
  const [apiVersion, setApiVersion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    minhasHorasApiPublic
      .get(VERSION_URL)
      .then((response) => {
        setApiVersion(response.data?.api_version);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const refetch = () => {
    setLoading(true);
    minhasHorasApiPublic
      .get(VERSION_URL)
      .then((response) => {
        setApiVersion(response.data?.api_version);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { apiVersion, loading, error, refetch };
};
