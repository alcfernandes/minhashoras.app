import React, { createContext, useMemo, useState } from 'react';
import { IClientsFilter } from '@features/clients/types';

interface IClientsProviderProps {
  children: React.ReactNode;
}

interface IClientsContext {
  filter: IClientsFilter;
  setFilter: React.Dispatch<React.SetStateAction<IClientsFilter>>;
}

export const ClientsContext = createContext<IClientsContext>({
  filter: { showArchived: true },
  setFilter: () => {},
});

export function ClientsProvider({ children }: IClientsProviderProps) {
  const [filter, setFilter] = useState<IClientsFilter>({ showArchived: true });

  const contextValue = useMemo(() => {
    return { filter, setFilter };
  }, [filter]);

  return (
    <ClientsContext.Provider value={contextValue}>
      {children}
    </ClientsContext.Provider>
  );
}
