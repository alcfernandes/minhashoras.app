import { useQuery } from '@tanstack/react-query';
import { useMinhasHorasApiPrivate } from '@shared/hooks';
import { CLIENTS_URL } from '@shared/services/minhashoras-api';
import { useContext } from 'react';
import { ClientsContext } from '@features/clients/stores/ClientsProvider';
import { IClientList } from '@features/clients/types';

export const useClientsApi = () => {
  const minhasHorasApiPrivate = useMinhasHorasApiPrivate();
  const { filter } = useContext(ClientsContext);

  async function getClients(): Promise<IClientList[]> {
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
  }

  const { data } = useQuery(['client-list', filter], () => getClients(), {
    keepPreviousData: true,
  });
  return { data };
};
