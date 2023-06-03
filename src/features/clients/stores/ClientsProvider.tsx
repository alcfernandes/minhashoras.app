import React, { createContext, useMemo, useState } from 'react';

import { IClientFilter } from '@features/clients/types';

interface IClientsProviderProps {
  children: React.ReactNode;
}

interface IClientsContext {
  filter: IClientFilter;
  setFilter: React.Dispatch<React.SetStateAction<IClientFilter>>;
}

export const ClientsContext = createContext<IClientsContext>({
  filter: { showArchived: true },
  setFilter: () => {},
});

export function ClientsProvider({ children }: IClientsProviderProps) {
  const [filter, setFilter] = useState<IClientFilter>({ showArchived: true });

  const contextValue = useMemo(() => {
    return { filter, setFilter };
  }, [filter]);

  return (
    <ClientsContext.Provider value={contextValue}>
      {children}
    </ClientsContext.Provider>
  );
}
