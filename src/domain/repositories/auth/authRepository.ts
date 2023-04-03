import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface IAuthRepository {
  signIn: (
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.User | never>;
  signUp: (email: string, password: string) => Promise<void | never>;
  signOut: () => Promise<void | never>;
}
