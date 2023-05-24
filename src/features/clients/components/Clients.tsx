import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { ClientList } from './ClientList';

export function Clients() {
  const { t } = useTranslation();
  const { Title } = Typography;

  return (
    <>
      <Title level={2}>{t('clients')}</Title>;
      <ClientList />
    </>
  );
}
