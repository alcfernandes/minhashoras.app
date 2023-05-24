import { useMinhasHorasApiPrivate } from '@shared/hooks';
import { CLIENTS_URL } from '@shared/services/minhashoras-api';
import { IClientList } from '@features/clients/types/clients-types';

export const useClientsApi = () => {
  const minhasHorasApiPrivate = useMinhasHorasApiPrivate();

  async function getClients(): Promise<IClientList[]> {
    const response = await minhasHorasApiPrivate.get<IClientList[]>(
      CLIENTS_URL
    );

    return response.data;
  }

  return { getClients };
};
