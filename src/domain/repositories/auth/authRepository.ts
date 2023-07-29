import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface IAuthRepository {
  signIn: (email: string, password: string) => Promise<FirebaseAuthTypes.User>;
  signUp: (email: string, password: string) => Promise<FirebaseAuthTypes.User>;
  signOut: () => Promise<void>;
  getUserIsAuthenticatedAsync: () => Promise<FirebaseAuthTypes.User | null>;
}
