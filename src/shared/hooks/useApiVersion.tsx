import { useEffect, useState } from 'react';
import { minhasHorasApi } from '../services/minhashoras-api';

export const useApiVersion = () => {
  const [apiVersion, setApiVersion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = '/version';

  useEffect(() => {
    setLoading(true);
    minhasHorasApi
      .get(url)
      .then((response) => {
        setApiVersion(response.data?.api_version);
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
    minhasHorasApi
      .get(url)
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
