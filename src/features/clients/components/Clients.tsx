import { Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { ClientsProvider } from '@features/clients/stores/ClientsProvider';
import { ClientList } from './ClientList';
import { useClientsApi } from '../hooks/useClientsApi';
import { ClientFilter } from './ClientFilter';

function ClientsContent() {
  const { t } = useTranslation();
  const { Title } = Typography;
  const { data } = useClientsApi();
  return (
    <Space direction="vertical" size={[0, 10]}>
      <Title level={2}>{t('clients')}</Title>
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
