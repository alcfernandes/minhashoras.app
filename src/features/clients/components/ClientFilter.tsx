import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ClientsContext } from '@features/clients/stores/ClientsProvider';

export function ClientFilter() {
  const { t } = useTranslation();
  const { filter, setFilter } = useContext(ClientsContext);
  const onChange = (checked: boolean) => {
    setFilter({ ...filter, showArchived: checked });
  };
  return (
    <div>
      <Switch
        checkedChildren={t('showArchived')}
        unCheckedChildren={t('hideArchived')}
        onChange={onChange}
      />
    </div>
  );
}
