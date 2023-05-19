import { useProfile } from '@features/profile/hooks/useProfile';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

export function Profile() {
  const { Title } = Typography;
  const { profile } = useProfile();
  const pageTitle = `Profile ${profile?.name}`;
  const { i18n } = useTranslation();
  return (
    <div>
      <Title level={2}>{pageTitle}</Title>;
      <Button
        type="primary"
        onClick={() => {
          i18n.changeLanguage('pt-BR');
        }}
      >
        Português
      </Button>
      <Button
        type="primary"
        onClick={() => {
          i18n.changeLanguage('en');
        }}
      >
        English
      </Button>
    </div>
  );
}
