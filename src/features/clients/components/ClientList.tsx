import { Badge, Card, Space, Tag, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { IClientList } from '@features/clients/types';

interface IClientListProps {
  data: IClientList[] | undefined;
}

export function ClientList({ data }: IClientListProps) {
  const { t } = useTranslation();
  const { Meta } = Card;
  const { Paragraph, Text } = Typography;

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
