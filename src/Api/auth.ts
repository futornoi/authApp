import { IRegistrationValues, ISignInValues } from '../Components/Auth/AuthTypes';
import { ApiCall } from './api';

export const authApi = {
  registration: async (data: Omit<IRegistrationValues, 'confirmPassword'>) => {
    return await ApiCall('post', '/auth/registration', data);
  },
  login: async (data: ISignInValues): Promise<{ token: string }> => {
    return await ApiCall('post', '/auth/signIn', data);
  }
};
