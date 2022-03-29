import { IRegistrationValues, ISignInValues } from '../Components/Auth/AuthTypes';
import { ApiCall } from './api';

export const authApi = {
  registration: async (data: Omit<IRegistrationValues, 'confirmPassword'>) => {
    return ApiCall('post', '/auth/registration', data);
  },
  login: async (data: ISignInValues): Promise<{ token: string }> => {
    return ApiCall('post', '/auth/signIn', data);
  }
};
