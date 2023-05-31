export interface IClientList {
  id: number;
  name: string;
  email: string;
  quick_info?: string;
  is_active?: boolean;
  uuid: string;
}

export interface IClientsFilter {
  showArchived?: boolean;
}
