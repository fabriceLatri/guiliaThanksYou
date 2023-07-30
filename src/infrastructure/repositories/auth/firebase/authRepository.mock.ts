import { IUser } from '@domain/models/entities/User';

const EMAIL_MOCKED = 'admin@gmail.com';
const PWD_MOCKED = '1234';

const mockedUser: IUser = {
  email: 'admin@gmail.com',
  isAnonymous: false,
  id: '12345',
};

export class authFirebaseRepository {
  signIn = async (email: string, password: string): Promise<IUser> => {
    try {
      if (email !== EMAIL_MOCKED || password !== PWD_MOCKED) throw new Error('User not found');
      return Promise.resolve(mockedUser);
    } catch (error) {
      if (error instanceof Error) throw error;

      throw new Error('Unknown Error');
    }
  };

  signUp = async (email: string, password: string): Promise<IUser> => {
    try {
      if (email !== EMAIL_MOCKED || password !== PWD_MOCKED) throw new Error('Incorrect parameters');

      return Promise.resolve(mockedUser);
    } catch (error) {
      if (error instanceof Error) throw error;

      throw new Error('Unknown Error');
    }
  };
}
