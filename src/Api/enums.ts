import { ApiCall } from './api';

export enum RolesList {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export type Roles = {
  _id: string;
  value: RolesList;
};

export const enumsApi = {
  getRoles: async (): Promise<Roles[]> => {
    return await ApiCall('get', '/enums/roles');
  }
};
