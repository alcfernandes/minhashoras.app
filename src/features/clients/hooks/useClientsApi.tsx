import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useMinhasHorasApiPrivate } from '@shared/hooks';
import { CLIENTS_URL } from '@shared/services/minhashoras-api';
import { useContext } from 'react';
import { ClientsContext } from '@features/clients/stores/ClientsProvider';
import { IClientList } from '@features/clients/types';

export const useClientsApi = (): UseQueryResult<IClientList[], Error> => {
  const minhasHorasApiPrivate = useMinhasHorasApiPrivate();
  const { filter } = useContext(ClientsContext);

  async function getClients(): Promise<IClientList[]> {
    try {
      const { showArchived, search } = filter;
      const response = await minhasHorasApiPrivate.get<IClientList[]>(
        CLIENTS_URL,
        {
          params: {
            'show-archived': showArchived,
            search,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  }

  return useQuery(['client-list', filter], getClients, {
    keepPreviousData: true,
  });
};
