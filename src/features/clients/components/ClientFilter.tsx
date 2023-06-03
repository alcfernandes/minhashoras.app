import { Input, Space, Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ClientsContext } from '@features/clients/stores/ClientsProvider';

export function ClientFilter() {
  const { Search } = Input;

  const { t } = useTranslation();
  const { setShowArchived, filter, setSearch } = useContext(ClientsContext);
  const onChangeShowArchived = (checked: boolean) => {
    setShowArchived(checked);
  };
  const onSearch = (value: string) => setSearch(value);

  const { showArchived, search } = filter;
  return (
    <Space>
      <Search
        defaultValue={search}
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <Switch
        checked={showArchived}
        checkedChildren={t('showArchived')}
        unCheckedChildren={t('hideArchived')}
        onChange={onChangeShowArchived}
      />
    </Space>
  );
}
