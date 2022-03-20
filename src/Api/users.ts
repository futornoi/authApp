import { ApiCall } from "./api";

export interface IUser {
  _id: string,
  name: string,
  email: string,
  roles: string[],
}

export const usersApi = {
  getUserList: async (): Promise<IUser[]> => {
    return ApiCall('get', '/users');
  },
  getAuthUser: async (token: string) => {
    return ApiCall('post', '/authUser', { token })
  }
}