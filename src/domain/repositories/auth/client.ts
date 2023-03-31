import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface IClient {
  signIn: (
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.UserCredential | never>;
  signUp: (email: string, password: string) => Promise<void>;
}
