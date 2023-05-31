import { Space, Typography } from 'antd';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  ClientsContext,
  ClientsProvider,
} from '@features/clients/stores/ClientsProvider';
import { ClientList } from './ClientList';
import { useClientsApi } from '../hooks/useClientsApi';
import { ClientFilter } from './ClientFilter';

function ClientsContent() {
  const { t } = useTranslation();
  const { Title, Text } = Typography;
  const { getClients } = useClientsApi();
  const { filter } = useContext(ClientsContext);
  const { data } = useQuery(['client-list', filter], () => getClients(filter), {
    keepPreviousData: true,
  });

  return (
    <Space direction="vertical" size={[0, 10]}>
      <Text>Filtro: {JSON.stringify(filter)}</Text>
      <Title level={2}>{t('clients')}</Title>;
      <ClientFilter />
      <ClientList data={data} />
    </Space>
  );
}

export function Clients() {
  return (
    <ClientsProvider>
      <ClientsContent />
    </ClientsProvider>
  );
}
