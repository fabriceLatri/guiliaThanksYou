import {FirebaseAuthTypes} from '@react-native-firebase/auth';

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
    if (email !== 'admin@gmail.com' || password !== '1234')
      throw new Error('User not found');
    return Promise.resolve(mockedUser as unknown as FirebaseAuthTypes.User);
  };
}
