import React, { createContext, useMemo, useState } from 'react';

import { IClientFilter } from '@features/clients/types';

interface IClientsProviderProps {
  children: React.ReactNode;
}

interface IClientsContext {
  filter: IClientFilter;
  setShowArchived: (showArchived: boolean) => void;
  setSearch: (search: string) => void;
}

const initialClientFilter: IClientFilter = {
  showArchived: false,
  search: '',
};

export const ClientsContext = createContext<IClientsContext>({
  filter: { showArchived: true },
  setShowArchived: () => {},
  setSearch: () => {},
});

export function ClientsProvider({ children }: IClientsProviderProps) {
  const [filter, setFilter] = useState<IClientFilter>(initialClientFilter);

  const contextValue = useMemo(() => {
    const setShowArchived = (showArchived: boolean) => {
      setFilter({ ...filter, showArchived });
    };

    const setSearch = (search: string) => {
      setFilter({ ...filter, search });
    };

    return { filter, setShowArchived, setSearch };
  }, [filter]);

  return (
    <ClientsContext.Provider value={contextValue}>
      {children}
    </ClientsContext.Provider>
  );
}
