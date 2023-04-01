// Interfaces

import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface IAuthService {
  signInAsync: (
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.User>;
  signUpAsync: (email: string, password: string) => Promise<void>;
}

// Types
