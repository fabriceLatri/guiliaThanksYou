import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface IClient {
  signIn: (email: string, password: string) => Promise<FirebaseAuthTypes.UserCredential>;
  signUp: (email: string, password: string) => Promise<void>;
}
