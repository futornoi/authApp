import { ApiCall } from './api';
import { RolesList } from './enums';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  roles: RolesList[];
}

export interface IEditUser extends Omit<IUser, '_id' | 'roles'> {
  roles: RolesList;
}

export const usersApi = {
  getUserList: async (): Promise<IUser[]> => {
    return await ApiCall('get', '/users');
  },
  deleteUser: async (id: string) => {
    return await ApiCall('delete', `/users/${id}`);
  },
  editUser: async (id: string, data: IEditUser): Promise<IUser> => {
    return await ApiCall('post', `/users-edit/${id}`, data);
  },
  getAuthUser: async (token: string) => {
    return await ApiCall('post', '/authUser', { token });
  }
};
