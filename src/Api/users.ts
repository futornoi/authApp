import { ApiCall } from "./api";

export interface IUser {
  _id: string,
  name: string,
  email: string,
  roles: RolesList[],
}

export enum RolesList {
  USER = "USER",
  ADMIN = "ADMIN"
}

export const usersApi = {
  getUserList: async (): Promise<IUser[]> => {
    return ApiCall('get', '/users');
  },
  getAuthUser: async (token: string) => {
    return ApiCall('post', '/authUser', { token })
  }
}