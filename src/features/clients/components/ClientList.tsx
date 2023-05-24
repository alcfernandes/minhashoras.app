import { Badge, Card, Space, Tag, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { useQuery } from '@tanstack/react-query';
import { useClientsApi } from '../hooks/useClientsApi';

export function ClientList() {
  const { t } = useTranslation();
  const { Meta } = Card;
  const { Paragraph, Text } = Typography;
  const { getClients } = useClientsApi();
  const { data } = useQuery(['client-list'], getClients);

  return (
    <Space size={[16, 16]} wrap>
      {data?.map((client) => (
        <Badge
          count={
            !client.is_active ? <Tag color="#f50">{t('archived')}</Tag> : 0
          }
          key={client.id}
          offset={[-40, 4]}
        >
          <Card
            key={client.id}
            style={{ width: 300 }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title={client.name}
              description={
                <Space direction="vertical">
                  <Text type="secondary">{client.email}</Text>
                  <div style={{ height: '3em' }}>
                    <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                      {client.quick_info}
                    </Paragraph>
                  </div>
                </Space>
              }
            />
          </Card>
        </Badge>
      ))}
    </Space>
  );
}
