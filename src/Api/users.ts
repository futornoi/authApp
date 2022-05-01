import { ApiCall } from './api';
import { RolesList } from './enums';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  roles: RolesList[];
  imgSrc: string;
}

export interface IEditUser extends Omit<IUser, '_id' | 'roles'> {
  roles: RolesList;
  imgFile: null | File,
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
  },
  uploadImage: async (id: string, image: File): Promise<IUser> => {
    const FD = new FormData();
    FD.append('user-avatar', image)
   return await ApiCall('post', `/upload-user-file/${id}`, FD)
  }
};
