import { useMinhasHorasApiPrivate } from '@shared/hooks';
import { CLIENTS_URL } from '@shared/services/minhashoras-api';
import { IClientFilter, IClientList } from '@features/clients/types';

export const useClientsApi = () => {
  const minhasHorasApiPrivate = useMinhasHorasApiPrivate();

  async function getClients(
    filter: IClientFilter = {}
  ): Promise<IClientList[]> {
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

  return { getClients };
};
