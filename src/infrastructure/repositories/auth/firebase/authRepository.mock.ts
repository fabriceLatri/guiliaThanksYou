import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const EMAIL_MOCKED = 'admin@gmail.com';
const PWD_MOCKED = '1234';

const mockedUser = {
  displayName: 'Admin',
  email: 'admin@gmail.com',
  emailVerified: true,
  isAnonymous: false,
  metadata: null,
  multiFactor: null,
  phoneNumber: null,
  photoURL: null,
  providerData: [],
  providerId: '',
  uid: '12345',
};

export class authFirebaseRepository {
  signIn = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User | never> => {
    try {
      if (email !== EMAIL_MOCKED || password !== PWD_MOCKED)
        throw new Error('User not found');
      return Promise.resolve(mockedUser as unknown as FirebaseAuthTypes.User);
    } catch (error) {
      if (error instanceof Error) throw error;

      throw new Error('Unknown Error');
    }
  };

  signUp = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User | never> => {
    try {
      if (email !== EMAIL_MOCKED || password !== PWD_MOCKED)
        throw new Error('Incorrect parameters');

      return Promise.resolve(mockedUser as unknown as FirebaseAuthTypes.User);
    } catch (error) {
      if (error instanceof Error) throw error;

      throw new Error('Unknown Error');
    }
  };
}
