import { useProfile } from '@features/profile/hooks/useProfile';
import { Typography } from 'antd';

export function Profile() {
  const { Title } = Typography;
  const { profile } = useProfile();
  const pageTitle = `Profile ${profile?.name}`;
  return (
    <div>
      <Title level={2}>{pageTitle}</Title>;
    </div>
  );
}
